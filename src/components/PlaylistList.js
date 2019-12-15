import React from 'react';
import "./PlaylistList.css"
import {Paper, Box, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Track from "./Track"

class PlaylistList extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <ul className={"playlistContainer"}>
                {
                    this.props.playlists.map((v, i) => (
                        <div style={{width: "90%"}}>
                            <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                    >
                                        <h1> {v.name} </h1>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        {v.tracks.map((v,i) => (
                                            <Track options={v} />
                                        ))}
                                    </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    ))
                }
            </ul>
        );
    }
}

export default PlaylistList;