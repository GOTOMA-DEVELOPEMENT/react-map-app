import React, {Fragment, useContext, useState} from 'react';
import {MapObjectsContext} from "../contexts/MapObjectsContext";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TablePagination from '@material-ui/core/TablePagination';
import DeleteDialog from "./DeleteDialog";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import format from 'dateformat';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TableFooter from "@material-ui/core/TableFooter";

const useStyles = makeStyles({
    root: {
        width: '100%',
    }
});

const columns = [
    {id: 'id', label: 'ID'},
    {id: 'city', label: 'City'},
    {id: 'temp', label: 'Temperature (Celsius)'},
    {id: 'windSpeed', label: 'Wind speed (m/s)'},
    {id: 'icon', label: 'Clouds', format: (value) => <Avatar src={"http://openweathermap.org/img/w/" + value + ".png"} />},
    {id: 'description', label: 'Description'},
    {id: 'createdAt', label: 'Created At', format: (value) => format(value)},
];

function MapObjectsTable() {
    const context = useContext(MapObjectsContext);
    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [mapObjectToBeDeleted, setMapObjectToBeDeleted] = useState(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Fragment>
            <Paper className={classes.root}>
                <TableContainer>
                    <Table>
                        <TableHead style={{backgroundColor:'#90ee90'}}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {context.mapObjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align="right">
                                            <IconButton onClick={() => {setDeleteConfirmationIsShown(true); setMapObjectToBeDeleted(row)}}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    {deleteConfirmationIsShown && (
                        <DeleteDialog mapObject={mapObjectToBeDeleted}
                                      open={deleteConfirmationIsShown}
                                      setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}/>
                    )}
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    component="div"
                    count={context.mapObjects.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                    <Box component="span" fontWeight="fontWeightBold" display="block" p={1} m={1} bgcolor="background.paper">
                        TOTAL SEARCHES: {context.numberOfSearches}
                    </Box>
                    <Box component="span" fontWeight="fontWeightBold" display="block" p={1} m={1} bgcolor="background.paper">
                        MOST SEARCHED CITY: {context.mostSearchedCity.city} ({context.mostSearchedCity.occurrence})
                    </Box>
                    <Box component="span" fontWeight="fontWeightBold" display="block" p={1} m={1} bgcolor="background.paper">
                        Temp MIN: {context.tempStats.minTemp}
                    </Box>
                    <Box component="span" fontWeight="fontWeightBold" display="block" p={1} m={1} bgcolor="background.paper">
                        Temp MAX: {context.tempStats.maxTemp}
                    </Box>
                    <Box component="span" fontWeight="fontWeightBold" display="block" p={1} m={1} bgcolor="background.paper">
                        Temp AVG: {parseFloat(context.tempStats.avgTemp).toFixed(2)}
                    </Box>
            </Paper>
        </Fragment>
    );
}

export default MapObjectsTable;
