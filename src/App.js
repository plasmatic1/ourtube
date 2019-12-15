import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

class App extends React.Component {
    state = {
        searchResp: undefined
    }

    render() {
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
            </div>
        );
    }
}

export default App;
