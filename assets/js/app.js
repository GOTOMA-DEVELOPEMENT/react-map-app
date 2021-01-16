import React from 'react';
import ReactDom from 'react-dom';
import MapObjectsContextProvider from './contexts/MapObjectsContext';
import MapObjectsTable from "./components/MapObjectsTable";

class App extends React.Component {
    render() {
        return (
            <MapObjectsContextProvider>
                <MapObjectsTable/>
            </MapObjectsContextProvider>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));