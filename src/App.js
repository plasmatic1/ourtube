import React from 'react';
import SearchView from './components/SearchView';
import PlaylistPanel from "./components/PlaylistPanel";
import './App.css';

class App extends React.Component {
    state = {
        searchResp: undefined
    }

    render() {
        return (
            <div className="App">
                <PlaylistPanel />
                <SearchView />
            </div>
        );
    }
}

export default App;
