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
            searchView: false
        };

        this.showSearchView = this.showSearchView.bind(this);
        this.testToggle = this.testToggle.bind(this);
    }

    showSearchView() {
        return this.state.searchView;
    }

    testToggle() {
        this.setState({
            searchView: !this.state.searchView
        });
    }

    render() {
        //Generate list of all playlists
        var playlistObj = JSON.parse(fs.readFileSync("./src/data/playlists.json"));

        return (
            <div className="App">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <PlaylistPanel testFn={this.testToggle}/>
                    </Grid>
                    {this.state.searchView &&
                        (<Grid item xs={9} style={{paddingLeft: '35px'}}>
                        <SearchView/>
                    </Grid>)}
                </Grid>
                {!this.state.searchView && (<PlaylistList playlists={playlistObj.playlists} />)}
            </div>
        );
    }
}

export default App;
