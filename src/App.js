import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import PlaylistList from "./components/PlaylistList";
import './App.css';
import Grid from '@material-ui/core/Grid';
import * as data from './util/data';
import { PlaylistEdit } from './components/PlaylistEdit';

class App extends React.Component {
    /*
    curView: Can be:
    - playlistList
    - playlistEdit
    - search
    */

    state = {
        curView: 'playlistEdit',
        curPlaylist: null
    }

    constructor(props) {
        super(props);

        this.setCurView = this.setCurView.bind(this);
        this.setCurPlaylist = this.setCurPlaylist.bind(this);
        this.setCurPlaylistName = this.setCurPlaylistName.bind(this);

        this.playlistEditRef = React.createRef();
    }

    setCurView(curView) {
        this.setState({ curView });
    }

    setCurPlaylist(curPlaylist) {
        return new Promise(res => {
            this.setState({ curPlaylist }, res);
        });
    }

    setCurPlaylistName(newName) {
        let newCurPlaylist = this.state.curPlaylist;
        newCurPlaylist.name = newName;
        this.setState({ curPlaylist: newCurPlaylist });
    }

    render() {
        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <PlaylistPanel setCurView={this.setCurView} setCurPlaylist={this.setCurPlaylist}/>
                    </Grid>
                    <Grid item xs={9} style={{paddingLeft: '35px'}}>
                        {this.state.curView === 'search' && (<SearchView />)}
                        {this.state.curView === 'playlistList' && (<PlaylistList playlists={data.getPlaylists()} setCurPlaylist={this.setCurPlaylist} setCurView={this.setCurView}/>)}
                        {this.state.curView === 'playlistEdit' && (<PlaylistEdit playlist={this.state.curPlaylist} setCurPlaylistName={this.setCurPlaylistName}/>)}
                    </Grid>    
                </Grid>
            </div>
        );
    }
}

export default App;
