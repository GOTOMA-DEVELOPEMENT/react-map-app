import React, {useContext} from 'react';
import {MapObjectsContext} from "../contexts/MapObjectsContext";

function MapObjectsTable() {
    const context = useContext(MapObjectsContext);

    return (
        <div>
            {context.mapObjects.map(mapObject => (
                <div>{mapObject.city}</div>
            ))}
        </div>
    );
}

export default MapObjectsTable;