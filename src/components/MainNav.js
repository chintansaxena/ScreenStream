import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) navigate('/');
        else if (value === 1) navigate('/movies');
        else if (value === 2) navigate('/series');
        else if (value === 3) navigate('/search');
    }, [value, navigate]);

    return (
        <Box
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                backgroundColor: '#3d4457',
                zIndex: 100,
            }}
        >
            <BottomNavigation
                style={{ backgroundColor: '#2d313a' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction sx={{ color: 'white' }}
                    label="Trending"
                    icon={<WhatshotIcon />} />
                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    label="Movies"
                    icon={<MovieIcon />} />
                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    label="TV Series"
                    icon={<LiveTvIcon />} />
                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    label="Search"
                    icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}
