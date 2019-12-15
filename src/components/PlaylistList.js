import React from 'react';
import "./PlaylistList.css"

class PlaylistList extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <ul className={"playlistContainer"}>
                {
                    this.props.playlists.map((v, i) => (
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