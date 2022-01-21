import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface IProps {
    name: string,
    value: number | string,
    colorIndex: number,
};

const colors = [
    ['#264653', '#7acef173'],
    ['#2b9a8d', '#1ce8d040'],
    ['#e0b650', '#f3d07c57'],
    ['#f39952', '#ff9f5438'],
]

const InfoBox: React.FC<IProps> = ({ name, value, colorIndex }) => {
    return (
        <Box
            sx={{
                width: "150px",
                textAlign: "center",
                m: 1,
                py: 1,
                border: 1,
                color: colors[colorIndex][0],
                borderColor: colors[colorIndex][0],
                bgcolor: colors[colorIndex][1],
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: "700" }}>{value}</Typography>
            <Typography >{name}</Typography>
        </Box>
    );
};

export default InfoBox;