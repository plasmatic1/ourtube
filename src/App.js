import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import './App.css';
import Grid from '@material-ui/core/Grid';

import PlaylistList
    from "./components/PlaylistList";
const fs = window.require("fs");

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchView: false,
            addPlaylistView: false
        };

        this.toggleSearchView = this.toggleSearchView.bind(this);
        this.toggleAddPlaylistView = this.toggleAddPlaylistView.bind(this);
    }

    toggleSearchView() {
        this.setState({
            searchView: !this.state.searchView
        });
    }

    toggleAddPlaylistView() {
        this.setState({
            addPlaylistView: !this.state.addPlaylistView
        });
    }

    render() {
        //Generate list of all playlists
        var playlistObj = JSON.parse(fs.readFileSync("./src/data/playlists.json"));

        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <PlaylistPanel toggleSearchView={this.toggleSearchView} addPlaylistView={this.toggleAddPlaylistView}/>
                    </Grid>
                    {this.state.searchView &&
                        (<Grid item xs={9} style={{paddingLeft: '35px'}}>
                        <SearchView/>
                    </Grid>)}
                </Grid>
                {!this.state.searchView && !this.state.addPlaylistView && (<PlaylistList playlists={playlistObj.playlists} />)}
            </div>
        );
    }
}

export default App;
