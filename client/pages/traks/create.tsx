import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid } from '@mui/material';
import CreateInfo from '../../components/CreateInfo';
import { FileUpload } from '@mui/icons-material';

const Create = () => {
    const [activeStep, setActiveState] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const next = () => {
        if (activeStep !== 2) {
            setActiveState(prev => prev++)
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