import React from "react";
import { Button, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h2>form</h2>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <div className={classes.fileInput}>file</div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
