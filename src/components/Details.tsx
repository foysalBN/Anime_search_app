import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import InfoBox from './InfoBox';

interface IAnime {
    images: {
        jpg: {
            image_url: string
        },
    }
    synopsis: string,
    rank: number,
    popularity: number,
    members: number,
    score: number,
    scored_by: number,
}

const Details = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState<IAnime>()
    const url = `https://api.jikan.moe/v4/anime/${id}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setAnime(res.data.data)
            })

    }, [])

    return (
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: '3em' }} >
            <Grid container spacing={2} >
                <Grid item xs={3} >
                    <img src={anime?.images.jpg.image_url} alt="" width='100%' />
                </Grid>
                <Grid item xs={9} >
                    <Typography variant="h5" >Synopsis</Typography>
                    <Typography>{anime?.synopsis}</Typography>

                    {anime && <Box sx={{ display: "flex", my: 2 }} >
                        <InfoBox name={`${anime?.scored_by} users`} value={anime?.score} colorIndex={0} />
                        <InfoBox name="RANKLED" value={`# ${anime?.rank}`} colorIndex={1} />
                        <InfoBox name="POPULARITY" value={`# ${anime?.popularity}`} colorIndex={2} />
                        <InfoBox name="MEMBERS" value={anime?.members} colorIndex={3} />
                    </Box>}
                </Grid>
            </Grid>
            <Link to='/'>
                <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
                    Back
                </Button>
            </Link>
        </Box>
    );
};

export default Details;