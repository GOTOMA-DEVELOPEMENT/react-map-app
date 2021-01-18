import React, {useContext} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import {MapObjectsContext} from "../contexts/MapObjectsContext";

function DeleteDialog(props) {
    const context = useContext(MapObjectsContext);

    const hide = () => {
        props.setDeleteConfirmationIsShown(false)
    };

    return (
        <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open}>
            <DialogTitle>
                Are you sure you want to delete this record?
            </DialogTitle>
            <DialogContent>
                {props.mapObject.city} (id: {props.mapObject.id})
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Cancel</Button>
                <Button
                    onClick={() => {context.deleteMapObject({id: props.mapObject.id});
                        hide();
                    }}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    mapObject: PropTypes.object,
};
export default DeleteDialog;
