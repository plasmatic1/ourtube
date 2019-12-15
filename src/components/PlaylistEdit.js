import React from 'react';
import { TextField, Paper, Typography, Grid, ListItem, Container } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import * as data from '../util/data';

export class PlaylistEdit extends React.Component {
    constructor(props) {
        super(props);

        // this.setNameInputVal = this.setNameInputVal.bind(this);
        this.nameInputRef = React.createRef();
    }

    renderTracks() {
        if (this.props.playlist.tracks.length === 0)
            return (<Typography>No tracks!</Typography>);
        else {
            return this.props.playlist.tracks.map((track, index) => {
                return (
                    <ListItem key={index}>
                        <Grid container spacing={3}>
                            <Grid item xs={10}>
                                <Typography>{track.name}</Typography>
                                <Typography style={{
                                    fontSize: '13px',
                                    fontStyle: 'italic'
                                }}>by {track.author}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <PlayArrowIcon />
                            </Grid>
                        </Grid>
                    </ListItem>
                );
            });
        }
    }
    
    render() {
        let playlistRender;
        if (this.props.playlist === null) {
            playlistRender = (
                <Container style={{
                    marginLeft: '0px',
                    marginTop: '20px'
                }}>
                    <Paper style={{
                        padding: '10px'
                    }}>
                        <Typography>No playlist selected!</Typography>
                    </Paper>
                </Container>
            )
        }
        else {
            playlistRender = (
                <Container>
                    <Paper>
                        <TextField label="Name" variant="outlined" value={this.props.playlist.name} ref={this.nameInputRef} onChange={e => {
                            this.props.playlist.name = e.target.value;
                            this.nameInputRef.current.props.value = e.target.value;
                            // data.save();
                        }}/>
                    </Paper>
                    <Paper>
                        {this.renderTracks()}
                    </Paper>
                </Container>
            );
        }

        return playlistRender;
    }
}
