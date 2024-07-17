import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useInput } from '../hooks/useInput';

const CreateInfo = () => {
    const name = useInput();
    const artist = useInput();
    const text = useInput();


    return (
        <Grid container direction='column' style={{ padding: 20 }}>
            <TextField
                {...name}
                style={{ marginTop: 10 }}
                label={'Track name'}
            />
            <TextField
                {...artist}
                style={{ marginTop: 10 }}
                label={'Artist name'}
            />
            <TextField
                {...text}
                style={{ marginTop: 10 }}
                label={'Text'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default CreateInfo;