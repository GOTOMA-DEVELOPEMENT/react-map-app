import React, {Fragment} from 'react';
import {AppBar, Toolbar, Link, Box,} from '@material-ui/core';

const Navigation = () => {

    return (
        <Fragment>
            <AppBar position="sticky" height="65px">
                <Toolbar>
                    <Link href="/" variant="h6" color="textPrimary" underline="none">WeatherApp</Link>
                    <Box flexGrow={1}/>
                    <Link href="/list" variant="h6" color="textPrimary" underline="none">History</Link>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default Navigation;
