import { Grid, TextField } from '@mui/material';
import React from 'react';

const CreateInfo = () => {
    return (
        <Grid container direction='column' style={{ padding: 20 }}>
            <TextField
                style={{ marginTop: 10 }}
                label={'Track name'}
            />
            <TextField
                style={{ marginTop: 10 }}
                label={'Artist name'}
            />
            <TextField
                style={{ marginTop: 10 }}
                label={'Text'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default CreateInfo;