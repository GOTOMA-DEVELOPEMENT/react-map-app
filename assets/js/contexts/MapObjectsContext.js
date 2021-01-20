import React, {createContext} from 'react';
import axios from 'axios';

export const MapObjectsContext = createContext();

class MapObjectsContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapObjects: [],
            mostSearchedCity: [],
            tempStats: [],
            numberOfSearches: []
        };
        this.readMapObjects();
    }

    deleteMapObject(data) {
        axios.delete('/list/delete/' + data.id)
            .then(response => {
                let mapObjects = [...this.state.mapObjects];
                let mapObject = mapObjects.find(mapObject => {
                    return mapObject.id === data.id;
                });

                mapObjects.splice(mapObjects.indexOf(mapObject), 1);

                this.setState({
                    mapObjects: mapObjects,
                });
                this.readMapObjects();
            })
            .catch(error => {
                console.log(error);
            });
    }

    readMapObjects() {
        axios.get('/list/get-list')
            .then(response => {
                this.setState({
                    mapObjects: response.data.mapObjects,
                    mostSearchedCity: response.data.tableStats.mostSearchedCity,
                    tempStats: response.data.tableStats.tempStats,
                    numberOfSearches: response.data.tableStats.numberOfSearches,
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <MapObjectsContext.Provider value={{
                ...this.state,
                deleteMapObject: this.deleteMapObject.bind(this)
            }}>
                {this.props.children}
            </MapObjectsContext.Provider>
        );
    }
}

export default MapObjectsContextProvider;
