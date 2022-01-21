import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


interface IProps {
    mal_id: number,
    title: string
    image_url: string
}


const Anime: React.FC<IProps> = ({ mal_id, title, image_url }) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/anime/${mal_id}`)
    }


    return (
        <Grid item md={3} sm={4} xs={6}
            onClick={handleOnClick}
            sx={{ cursor: 'pointer' }}
        >
            <img src={image_url} alt={title} width='100%' />
            <h4>{title}</h4>
        </Grid>
    );
};

export default Anime;