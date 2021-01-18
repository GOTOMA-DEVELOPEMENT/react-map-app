import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function WeatherDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const hide = () => {
        props.setWeatherInfoIsShown(false)
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            onClose={hide}
            aria-labelledby="responsive-dialog-title"
            open={props.open}
        >
            <DialogTitle id="responsive-dialog-title">Weather in: {props.mapObject.city}</DialogTitle>
            <DialogContent>
                <Avatar alt={props.mapObject.description} src={"http://openweathermap.org/img/w/" + props.mapObject.icon + ".png"} />
                <List>
                    <ListItem>
                        <ListItemText primary="Temperature" secondary={props.mapObject.temp + " (Celsius)"} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Wind speed" secondary={props.mapObject.windSpeed + " (m/s)"} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Description" secondary={props.mapObject.description}  />
                    </ListItem>
                    <Divider />
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={hide} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
WeatherDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setWeatherInfoIsShown: PropTypes.func.isRequired,
    mapObject: PropTypes.object,
};
export default WeatherDialog;
