import React from 'react';
import ReactDom from 'react-dom';
import MapView from "./components/MapView";
import {CssBaseline} from "@material-ui/core";

class App extends React.Component {
    render() {
        return (
            <CssBaseline>
                <MapView/>
            </CssBaseline>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
