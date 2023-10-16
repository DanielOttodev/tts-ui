import { Paper, Grid, IconButton } from "@mui/material";
import VoiceSelect from "./VoiceSelect";
import LanguageSelect from "./LanguageSelect";
import Box from '@mui/material/Box';
import TextArea from "./TextArea";
import { PlayCircleOutline } from "@mui/icons-material";
import Slidebar from "./SlideBar";
import { useState } from "react";

export default function ConvertPanel() {
    const [text, setText] = useState<string | undefined>()
    function check() {
        alert(text);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 1200,
                    height: 'auto',
                    padding: 5
                },
            }}
        >

            <Paper elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <LanguageSelect />
                    </Grid>
                    <Grid item xs={6}>
                        <VoiceSelect />
                    </Grid>
                    <Grid item xs={12}>
                        <TextArea text={text} setText={setText} />
                        <IconButton onClick={() => check()} size="medium" sx={{ color: 'skyblue' }}><PlayCircleOutline fontSize="medium" /></IconButton>
                        <Slidebar />
                    </Grid>

                </Grid>
            </Paper>
        </Box>

    )
}

