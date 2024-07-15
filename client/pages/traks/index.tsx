import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack = [
        {'_id': '1', 'name': 'Name 1','artist': 'Artist 1','text': 'Text','listens': 0,'picture': '','audio': '','comments': []},
        {'_id': '2', 'name': 'Name 2','artist': 'Artist 2','text': 'Text','listens': 0,'picture': '','audio': '','comments': []},
    ];
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900px }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Trak List</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Download
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;