import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid } from '@mui/material';
import CreateInfo from '../../components/CreateInfo';
import { FileUpload } from '@mui/icons-material';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/router';

const Create = () => {
    const [activeStep, setActiveState] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const router = useRouter();

    const next = () => {
        if (activeStep !== 2) {
            setActiveState(prev => prev++)
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('audio', audio.value);
            formData.append('picture', picture.value);
            axios.post('http://localhost:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }
    const back = () => {
        setActiveState(prev => prev--)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <CreateInfo />
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept='image/*'>
                        <Button>Download image</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept='audio/*'>
                        <Button>Download audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;