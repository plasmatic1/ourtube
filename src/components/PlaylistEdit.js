import React from 'react';
import { Button, TextField, Paper, Typography, Grid, ListItem, Container } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import LanguageIcon from '@material-ui/icons/Language';
import * as data from '../util/data';

export class PlaylistEdit extends React.Component {
    constructor(props) {
        super(props);
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
        if (this.props.playlist === null || this.props.playlist === undefined) {
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
                <Container style={{
                    marginTop: '10px'
                }}>
                    <Paper style={{
                        padding: '10px'
                    }}>
                        <TextField label="Name" variant="outlined" value={this.props.playlist.name} onChange={e => {
                            this.props.setCurPlaylistName(e.target.value);
                            // data.save();
                        }}/>
                        <Button variant="contained" onClick={() => this.props.setCurView('search')} style={{
                            marginLeft: '10px',
                            marginTop: '8px'
                        }}>
                            Add More Songs <LanguageIcon />
                        </Button>
                    </Paper>
                    <Paper style={{
                        marginTop: '7px',
                        padding: '10px'
                    }}>
                        {this.renderTracks()}
                    </Paper>
                </Container>
            );
        }

        return playlistRender;
    }
}
