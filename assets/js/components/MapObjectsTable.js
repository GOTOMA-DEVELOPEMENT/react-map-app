import React, {Fragment, useContext, useState} from 'react';
import {MapObjectsContext} from "../contexts/MapObjectsContext";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteDialog from "./DeleteDialog";

function MapObjectsTable() {
    const context = useContext(MapObjectsContext);
    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [mapObjectToBeDeleted, setMapObjectToBeDeleted] = useState(null);

    return (
        <Fragment>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {context.mapObjects.map(mapObject => (
                        <TableRow key={mapObject.id}>
                            <TableCell>
                                {mapObject.id}
                            </TableCell>
                            <TableCell>
                                {mapObject.city}
                            </TableCell>
                            <TableCell>
                                {mapObject.description}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => {setDeleteConfirmationIsShown(true); setMapObjectToBeDeleted(mapObject)}}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {deleteConfirmationIsShown && (
                <DeleteDialog mapObject={mapObjectToBeDeleted}
                              open={deleteConfirmationIsShown}
                              setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}/>
            )}

        </Fragment>
    );
}

export default MapObjectsTable;
