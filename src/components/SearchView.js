import React from 'react';
import * as search from '../util/search';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LanguageIcon from '@material-ui/icons/Language';
import AddIcon from '@material-ui/icons/Add';
const fs = window.require('fs')
const youtubedl = window.require('youtube-dl')

class SearchResult {
    constructor(title, description, channel, thumbnailUrl, videoId) {
        this.title = title;
        this.description = description;
        this.channel = channel;
        this.thumbnailUrl = thumbnailUrl;
        this.videoId = videoId;
    }

    getVideoLink() {
        return ''
    }

    downloadVideo(){
        const video = youtubedl(`https://www.youtube.com/watch?v=${this.videoId}`,
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
        // Additional options can be given for calling `child_process.execFile()`.
        { cwd: __dirname })

        // Will be called when the download starts.
        if (!fs.existsSync('./data')) fs.mkdirSync('./data');
        if (!fs.existsSync('./data/tracks')) fs.mkdirSync('./data/tracks');
        
        video.on('info', function(info) {
            console.log('Download started')
            console.log('filename: ' + info._filename)
            console.log('size: ' + info.size)
        });

        video.pipe(fs.createWriteStream('./data/tracks/'+this.title+'.mp3'));
    }
}

export default class SearchView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            curSearchQuery: '',
        }
    }
    componentDidMount() {

    }

    truncateText(text) {
        const MAX_LENGTH = 100;
        if (text.length > MAX_LENGTH)
            return text.substr(0, MAX_LENGTH) + '...';
        return text;
    }

    renderSearchResults() {
        if (this.state.searchResults.length === 0) {
            return (
                <Paper style={{
                    padding: '10px'
                }}>No search results!</Paper>
            );
        }
        
        return this.state.searchResults.map(res => {
            return (<ListItem button key={res.videoId}>
                <Grid container spacing={3}>
                    <Grid key={0} item xs={2}>
                        <img src={res.thumbnailUrl} alt={res.title}/>
                    </Grid>
                    <Grid key={1} item xs={9}>
                        <Typography style={{
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }}>{res.title}</Typography>
                        <Typography style={{
                            fontSize: '13px',
                            fontStyle: 'italic'
                        }}>by {res.channel}</Typography>
                        <Typography style={{
                            fontSize: '11px',
                            color: 'gray'
                        }}>{this.truncateText(res.description)}</Typography>
                    </Grid>
                    <Grid key={2} item xs={1}>
                        <Link href={res.getVideoLink()}>
                            <LanguageIcon />
                        </Link>
                        <Link>
                            <AddIcon onClick={() => {
                                res.downloadVideo();
                                let track = {
                                    name: res.title,
                                    author: res.channel,
                                    path: `src/tracks/${res.title}-${res.videoId}.mp3`
                                };
                                this.props.addCurPlaylistTrack(track);
                                this.props.setCurView('playlistEdit');
                            }} />
                        </Link>
                    </Grid>
                </Grid>
            </ListItem>)
        });
    }

    runSearch = async () => {
        const results = await search.sendRequest(this.state.curSearchQuery);

        let resultsList = [];
        for (const video of results.items) {
            const id = video.id.videoId, { title, description, channelTitle } = video.snippet, thumbnailUrl = video.snippet.thumbnails.default.url;
            resultsList.push(new SearchResult(title, description, channelTitle, thumbnailUrl, id));
        }

        this.setState({
            searchResults: resultsList
        });
    }

    render() {
        return (
            <Container>
                <Paper style={{
                    margin: '15px',
                    padding: '10px'
                }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" 
                        onChange={e => this.setState({ curSearchQuery: e.target.value })}/>
                    <Button variant="contained" color="primary" onClick={this.runSearch} style={{
                        marginLeft: '5px',
                        height: '55px'
                    }}>
                        Go!
                    </Button>
                </Paper>
                <Paper>
                    {this.renderSearchResults()}
                </Paper>
            </Container>
        );
    }
}
