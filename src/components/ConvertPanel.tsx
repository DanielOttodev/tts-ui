import { Paper, Grid, Button } from "@mui/material";
import VoiceSelect from "./VoiceSelect";
import LanguageSelect from "./LanguageSelect";
import Box from '@mui/material/Box';
import TextArea from "./TextArea";
import UploadBar from "./UploadBar";
import SamplePlayer from "./SamplePlayer";


export default function ConvertPanel() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 800,
                    height: 'auto',
                    padding: 5
                },
            }}
        >
            <Paper elevation={3}>
                <Grid>
                    <LanguageSelect />
                    <VoiceSelect />
                    <SamplePlayer audio='https://speech-mp3-samples.s3.ap-southeast-2.amazonaws.com/test2.mp3' />
                    <UploadBar />
                    <TextArea />
                    <Button fullWidth variant="contained">Convert</Button>
                </Grid>
            </Paper>
        </Box>

    )
}
