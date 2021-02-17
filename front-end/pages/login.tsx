import React, { useContext } from "react";
// Modules
import { NextPage } from "next/types";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "context";
import Header from "components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage: NextPage = () => {
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <Container
      //   style={{ backgroundColor: "red", width: "100%", height: "100%" }}
      component="main"
      maxWidth="xs"
    >
      <form onSubmit={handleSubmit} noValidate>
        <Grid
          style={{ width: "100%", height: "100%" }}
          container
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <TextField
              id="name-input"
              name="email"
              label="E-mail"
              type="text"
              //   value={formValues.name}
              //   onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="age-input"
              name="password"
              label="Age"
              type="password"
              //   value={formValues.age}
              //   onChange={handleInputChange}
            />
          </Grid>
          <Button
            onClick={() =>
              dispatch({
                type: "LOGGED_IN_USER",
                payload: "Ryan Dhungel",
              })
            }
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

const styles = {
  conatiner: {
    display: "flex",
  },
};

export default LoginPage;
