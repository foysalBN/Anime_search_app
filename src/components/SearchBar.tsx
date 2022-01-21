import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce'

interface IProps {
    query: string,
    setQuery: Function
};

const SearchBar: React.FC<IProps> = ({ query, setQuery }) => {
    const updateQueru = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setQuery(e.target.value);
    }
    const debouncedOnChange = debounce(updateQueru, 200);

    return (
        <div>
            <TextField
                placeholder='Search...'
                variant="outlined"
                size='small'
                onChange={debouncedOnChange}
                sx={{
                    width: 1,
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchBar;