import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
    const track: ITrack = { '_id': '1', 'name': 'Name 1', 'artist': 'Artist 1', 'text': 'Text', 'listens': 0, 'picture': '', 'audio': '', 'comments': [] };
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{ fontSize: 32 }}
                onClick={() => router.push('/traks')}
            >
                To list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} />
                <div style={{ margin: '20px 0' }}>
                    <h1>Name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>

                </div>
            </Grid>
            <h1>Text</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid>
                <TextField
                    label='Your name'
                    fullWidth
                />
                <TextField
                    label='Comment'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;