import React from 'react';
import './App.css';
import PlaylistPanel
  from "./components/PlaylistPanel";

class App extends React.Component {
  render() {
      return (
          <div className="App">
              <PlaylistPanel />
          </div>
      );
  }
}

export default App;
