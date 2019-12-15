import React from 'react';
import "./PlaylistList.css"

class PlaylistList extends React.Component {
    constructor(props) {
        super();

        this.state = {
            playlists: props.playlists
        }
    }
    render() {
        return (
            <ul className={"playlistContainer"}>
                {
                    this.state.playlists.map((v, i) => (
                        <li>
                            <h1>{v.name}</h1>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default PlaylistList;