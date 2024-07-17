import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTraks, searchTraks } from '../../store/actions-creators/track';
import { useDispatch } from 'react-redux';

const Index = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector(state => state.track);
    const [query, setQuery] = useState<string>('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState(null)

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTraks(e.target.value))
            }, 500)
        )
    }

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={'Track list'}>
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
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTraks())
})