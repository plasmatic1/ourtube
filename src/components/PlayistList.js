import React from 'react';

class PlaylistList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.entries.map((v, i) => (
                        <li>
                            <h1>{v.title}</h1>
                            <p>{v.artist} - {v.duration}</p>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default PlaylistList;