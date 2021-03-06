import React from 'react';
import './PlaylistPanel.css';
import logo from "../static/logo.png";
import * as data from '../util/data';

class PlaylistPanel extends React.Component {
    constructor(props) {
        super(props);

        this.addPlaylist = this.addPlaylist.bind(this);
        this.back = this.back.bind(this);
    }

    addPlaylist() {
        this.props.setCurView('playlistEdit');
        this.props.setCurPlaylist(data.makeNewPlaylist());
    }

    back() {
        this.props.setCurView('playlistList');
    }

    render() {
        return (
            <div className={"playlistPanel"}>
                <div className={"logo"}>
                    <img src={logo} alt="OurTube logo"/>
                </div>
                <div className={"header"}>
                    Options
                </div>
                <ul className={"optionsContainer"}>
                    <li onClick={this.addPlaylist}>Add Playlist</li>
                    <li onClick={() => this.props.setCurView('playlistList')}>Select Playlist</li>
                    <li>Remove Playlist</li>
                    <li onClick={this.back}>Back</li>
                </ul>
            </div>
        )
    }
}

export default PlaylistPanel;
