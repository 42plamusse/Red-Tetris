import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const Input = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        {...props}
        inputRef={ref}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
});

export default Input;
