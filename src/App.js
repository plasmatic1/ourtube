import React from 'react';
import SearchView from './components/SearchView';
import * as search from './util/search';
import { isUndefined } from 'util';
import './App.css';

class App extends React.Component {
    state = {
        searchResp: undefined
    }

    render() {
        return (
            <div className="App">
                <SearchView />
            </div>
        );
    }
}

export default App;
