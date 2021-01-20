import React from 'react';
import ReactDom from 'react-dom';
import MapObjectsContextProvider from './contexts/MapObjectsContext';
import MapObjectsTable from "./components/MapObjectsTable";
import {CssBaseline} from "@material-ui/core";
import Navigation from "./components/Navigation";

class List extends React.Component {
    render() {
        return (
                <CssBaseline>
                    <Navigation/>
                    <MapObjectsContextProvider>
                        <MapObjectsTable/>
                    </MapObjectsContextProvider>
                </CssBaseline>
        );
    }
}

ReactDom.render(<List/>, document.getElementById('root'));