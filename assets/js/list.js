import React from 'react';
import ReactDom from 'react-dom';
import MapObjectsContextProvider from './contexts/MapObjectsContext';
import MapObjectsTable from "./components/MapObjectsTable";
import {CssBaseline} from "@material-ui/core";

class List extends React.Component {
    render() {
        return (
            <MapObjectsContextProvider>
                <CssBaseline>
                    <MapObjectsTable/>
                </CssBaseline>
            </MapObjectsContextProvider>
        );
    }
}

ReactDom.render(<List/>, document.getElementById('root'));