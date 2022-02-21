import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import RadioButtons from "./RadioButtons";

const useStyles = makeStyles({
  textfield: {
    "&.css-wb57ya-MuiFormControl-root-MuiTextField-root": {
      margin: "20px auto",
    },
  },
  dimension: {
    width: 600,
    margin: "20px auto",
  },
});

function NormalFormValidation() {
  const classes = useStyles();

  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [emailerror, SetemailError] = useState(false);
  const [passworderror, SetpasswordError] = useState(false);

  const submitHandler = (e) => {
    SetemailError(false);
    SetpasswordError(false);

    e.preventDefault();

    if (email && password) {
      console.log(email, password);
      alert(`email: ${email}, password: ${password}`);
    }

    if (email === "") {
      SetemailError(true);
    }
    if (password === "") {
      SetpasswordError(true);
    }
  };

  return (
    <>
      <Typography variant="h5"> Normal Form Creation</Typography>

      <form
        noValidate
        autoComplete="off"
        className={classes.dimension}
        onSubmit={submitHandler}
      >
        <TextField
          className={classes.textfield}
          label="Enter the Email"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => Setemail(e.target.value)}
          error={emailerror}
        />
        <TextField
          className={classes.textfield}
          label="Enter the Password"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => Setpassword(e.target.value)}
          error={passworderror}
        />
        <TextField
          className={classes.textfield}
          label="Enter Feedback if any!"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
        />
        <RadioButtons/><br/>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default NormalFormValidation;
