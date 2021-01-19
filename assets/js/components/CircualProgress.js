import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularIndeterminate() {
    return (
        <div>
            <CircularProgress />
            <CircularProgress color="secondary" />
        </div>
    );
}
