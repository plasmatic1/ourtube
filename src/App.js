import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import './App.css';

import PlaylistList
    from "./components/PlaylistList";
const fs = window.require("fs");

class App extends React.Component {

    render() {
        //Generate list of all playlists
        var playlistObj = JSON.parse(fs.readFileSync("./src/data/playlists.json"));

        return (
            <div className="App">
                <PlaylistPanel />
                <SearchView />
                <PlaylistList playlists={playlistObj.playlists} />
            </div>
        );
    }
}

export default App;
