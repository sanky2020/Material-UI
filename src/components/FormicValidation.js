import React from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


// install npm install yup --save &
// npm install formik --save
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const useStyles = makeStyles({
    form:{
        maxWidth:600,
        margin:"20px auto",
        
    }
})

const FormicValidation = () => {
  const formik = useFormik({
    initialValues: {
      email: 'a.b@c.com',
      password: '12345678',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.form}>
    <KeyboardDoubleArrowDownIcon/>Form Created Using Formic<KeyboardDoubleArrowDownIcon/>
      <form onSubmit={formik.handleSubmit} className={classes.form} >
        <TextField
        
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
        className={classes.form}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default FormicValidation;