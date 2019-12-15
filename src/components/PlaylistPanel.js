import React from 'react';
import './PlaylistPanel.css';
import logo from "../static/logo.png"

class PlaylistPanel extends React.Component {
     render() {
        return (
            <div className={"playlistPanel"}>
                <div className={"logo"}>
                    <img src={logo} />
                </div>
                <div className={"header"}>
                    Options
                </div>
                <ul className={"optionsContainer"}>
                    <li>Add Playlist</li>
                    <li>Edit Playlist</li>
                    <li>Remove Playlist</li>
                </ul>
            </div>
        )
     }
 }

 export default PlaylistPanel;
