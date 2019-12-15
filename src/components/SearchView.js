import React from 'react';
import * as search from '../util/search';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

class SearchResult {
    constructor(title, description, channel, thumbnailUrl) {
        this.title = title;
        this.description = description;
        this.channel = channel;
        this.thumbnailUrl = thumbnailUrl;
    }
}

export default class SearchView extends React.Component {
    state = {
        searchResults: []
    }

    componentDidMount() {

    }

    renderSearchResult() {

    }

    runSearch = async (query) => {
        const results = await search.sendRequest(query);

        let resultsList = [];
        for (const video of results.items) {
            const id = video.id.videoId, { title, description, channelTitle } = video.snippet, thumbnailUrl = video.snippet.thumbnails.default.url;
            resultsList.push(new SearchResult(title, description, channelTitle, thumbnailUrl));
        }

        this.setState({
            searchResults: resultsList
        });
    }

    render() {
        return (
            <Container>
                <Paper>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button variant="contained" color="primary">
                        Search
                    </Button>
                </Paper>
                <Paper>
                    <ListItem button component="a">Yes</ListItem>
                </Paper>
            </Container>
        );
    }
}
