import React from 'react';
import "./PlaylistList.css";
import { Paper, Box, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import Track from "./Track";
import * as data from '../util/data';

class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className={"playlistContainer"}>
                {
                    this.props.playlists.map((v, i) => (
                        <div style={{width: "90%"}} key={i}>
                            <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                    >
                                        <h3>{v.name}</h3>
                                        <EditIcon style={{
                                            paddingTop: '19px',
                                            paddingLeft: '10px'
                                        }} onClick={() => {
                                            // console.log('click icon bois');
                                            this.props.setCurPlaylist(data.getPlaylists()[i]).then(() => {
                                                this.props.setCurView('playlistEdit');
                                            });
                                        }}/>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        {v.tracks.map((v, i) => (
                                            <Track options={v} key={i}/>
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