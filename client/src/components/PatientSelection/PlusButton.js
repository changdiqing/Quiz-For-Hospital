import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const AddTripButton = props => {
  return <button onClick={props.addTrip}>Add a trip</button>
}

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab aria-label="add" size="small" disableElevation>
        <AddIcon style={{ color: "rgb(0, 0, 255)" }} />
      </Fab>
    </div>
  );
}
