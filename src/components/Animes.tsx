import { Grid } from '@mui/material';
import React from 'react';
import Anime from './Anime';
import { IAnimes } from '../components/Search'

interface IProps {
    animes: IAnimes[]
}


const Animes: React.FC<IProps> = ({ animes }) => {
    return (
        <Grid container spacing={2} sx={{ my: 2 }}>
            {
                animes.map(anime => <Anime
                    key={anime.mal_id}
                    mal_id={anime.mal_id}
                    title={anime.title}
                    image_url={anime.images.jpg.image_url}
                />
                )
            }
        </Grid>
    );
};

export default Animes;