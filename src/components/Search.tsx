import { Box } from '@mui/system';
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Search = () => {
    const [query, setQuery] = useState('');

    return (
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: '3em' }} >
            <SearchBar query={query} setQuery={setQuery} />

        </Box>
    );
};

export default Search;