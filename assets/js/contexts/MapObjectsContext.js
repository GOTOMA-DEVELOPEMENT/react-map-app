import React, {createContext} from 'react';

export const MapObjectsContext = createContext();

class MapObjectsContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapObjects: [
                {city: 'Kraków'},
            ],
        };
    }

    createMapObject() {

    }

    render() {
        return (
            <MapObjectsContext.Provider value={{
                ...this.state,
                createMapObject: this.createMapObject.bind(this),
            }}>
                {this.props.children}
            </MapObjectsContext.Provider>
        );
    }
}

export default MapObjectsContextProvider;