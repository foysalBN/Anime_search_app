import { Box } from '@mui/system';
import React from 'react';
import SearchBar from './SearchBar';
import Animes from './Animes';
import { Pagination } from '@mui/material';
import { IAnimes } from '../App'

interface IProps {
    query: string,
    setQuery: Function,
    animes: IAnimes[],
    pageCount: number,
    page: number,
    setPage: Function
}

const Search: React.FC<IProps> = ({ query, setQuery, animes, pageCount, page, setPage }) => {
    return (
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: '3em' }} >
            <SearchBar query={query} setQuery={setQuery} />
            <Animes animes={animes} />

            {pageCount !== 0 && <Pagination
                count={pageCount}
                defaultPage={page}
                onChange={(e, page) => setPage(page)}
                sx={{ my: 3, display: 'flex', justifyContent: 'center' }}
            />}
        </Box>
    );
};

export default Search;