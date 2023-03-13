import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CustomPagination = ({ setPage, numOfPages = 10 }) => {

    const theme = createTheme({
        pallete: {
            type: "dark",
        },
    });

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >

            <ThemeProvider theme={theme}>
                <Pagination
                    count={numOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    color="secondary"
                />
            </ThemeProvider>



        </div>
    );
}

export default CustomPagination;