import React from 'react';
import ReactDom from 'react-dom';
import MapObjectsContextProvider from './contexts/MapObjectsContext';
import MapObjectsTable from "./components/MapObjectsTable";
import {CssBaseline} from "@material-ui/core";
import Navigation from "./components/Navigation";

class List extends React.Component {
    render() {
        return (
            <MapObjectsContextProvider>
                <CssBaseline>
                    <Navigation/>
                    <MapObjectsTable/>
                </CssBaseline>
            </MapObjectsContextProvider>
        );
    }
}

ReactDom.render(<List/>, document.getElementById('root'));