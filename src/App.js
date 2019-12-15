import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import PlaylistList
    from "./components/PlaylistList";
const fs = window.require("fs");

class App extends React.Component {

    render() {
        //Generate list of all playlists
        var playlistObj = JSON.parse(fs.readFileSync("./src/data/playlists.json"));

        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <PlaylistPanel />
                    </Grid>
                    <Grid item xs={9} style={{
                        paddingLeft: '35px'
                    }}>
                        <SearchView />
                    </Grid>
                </Grid>
                <PlaylistList playlists={playlistObj.playlists} />
            </div>
        );
    }
}

export default App;
