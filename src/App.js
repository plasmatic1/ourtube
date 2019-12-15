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
        curView: 'playlistList'
    }

    constructor(props) {
        super(props);

        this.setCurView = this.setCurView.bind(this);
    }

    setCurView(curView) {
        this.setState({ curView });
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
                {this.state.curView === 'playlistList' && (<PlaylistList playlists={data.getPlaylists()} />)}
                {this.state.curView === 'playlistEdit' && (<PlaylistEdit playlists={data.getPlaylists()} />)}
            </div>
        );
    }
}

export default App;
