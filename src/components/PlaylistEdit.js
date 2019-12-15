import React from 'react';
import { TextField, Paper, Typography, Grid, ListItem, Container } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
        return (
            <Container>
                <Paper>
                    <TextField label="Name" variant="outlined" onChange={e => 
                        this.props.playlist.name = e.target.value
                    }/>
                </Paper>
                <Paper>
                    {this.renderTracks()}
                </Paper>
            </Container>
        );
    }
}
