import { Box } from '@mui/system';
import React from 'react';

const Header = () => {
    return (
        <Box
            sx={{
                color: 'white',
                bgcolor: '#1976d2',
                p: 3,
                mb: 3,
                fontWeight: "700"
            }}
        >
            Anime Search App
        </Box>
    );
};

export default Header;