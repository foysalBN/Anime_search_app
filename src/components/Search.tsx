import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

export interface IAnimes {
    mal_id: number,
    url: string,
    images: {
        jpg: {
            image_url: string
        }
    },
    title: string
}

const Search = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState<number>(1)
    const [animes, setAnimes] = useState<IAnimes[]>([]);
    const [pageCount, setPageCount] = useState(0)

    let api = `https://api.jikan.moe/v4/anime?sfw=1&q=${query}&limit=20&page=${page}`;

    useEffect(() => {
        if (!query) {
            setAnimes([]);
            setPageCount(0);
            return;
        }
        axios.get(api)
            .then(res => {
                const { pagination, data } = res.data;
                setPageCount(pagination?.last_visible_page)
                setAnimes(data)
                console.log(res.data)
            })
            .catch(e => console.log('Got an error fetching data', e))
    }, [query, page, api])


    return (
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: '3em' }} >
            <SearchBar query={query} setQuery={setQuery} />

        </Box>
    );
};

export default Search;