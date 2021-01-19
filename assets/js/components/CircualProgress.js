import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularIndeterminate() {
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999"
        }}>
            <CircularProgress color="secondary" />
        </div>
    );
}