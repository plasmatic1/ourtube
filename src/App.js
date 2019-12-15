import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import PlaylistList from "./components/PlaylistList";
import './App.css';
import Grid from '@material-ui/core/Grid';
import * as data from './util/data';
import { PlaylistEdit } from './components/PlaylistEdit';
import audio from "./tracks/That Person's Name Is - Bravely Default OST [Asterisk Boss Battle Theme](High Quality 1080p HD)-sk-9ihcy2R8.mp3"

class App extends React.Component {
    /*
    curView: Can be:
    - playlistList
    - playlistEdit
    - search
    */

    constructor(props) {
        super(props);

        this.state = {
            curView: 'playlistList',
            playing: audio
        };

        this.setCurView = this.setCurView.bind(this);
        this.setPlaying = this.setPlaying.bind(this);
    }

    setCurView(curView) {
        this.setState({ curView });
    }

    setPlaying(src) {
        this.setState({ playing: src});
    }

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <PlaylistPanel setCurView={this.setCurView}/>
                    </Grid>
                    {this.state.curView === 'search' &&
                        (<Grid item xs={9} style={{paddingLeft: '35px'}}>
                        <SearchView/>
                    </Grid>)}
                </Grid>
                {this.state.curView === 'playlistList' && (<PlaylistList setPlaying={this.setPlaying} playlists={data.getPlaylists()} />)}
                {this.state.curView === 'playlistEdit' && (<PlaylistEdit playlists={data.getPlaylists()} />)}
                <audio controls={true}>
                    <source src={this.state.playing} type={"audio/mpeg"}/>
                </audio>
            </div>
        );
    }
}

export default App;
