import React from "react";
import { Grid, Button } from "@material-ui/core";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import useStyles from "./style";
// Anurag
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={() => navigate("/contact")}
        style={{ color: "white", marginLeft: "10%" }}
      >
        about expenso
      </Button>
      <Button
        onClick={() => navigate("/aboutus")}
        style={{ float: "right", color: "white", marginRight: "10%" }}
      >
        Go to About Us
      </Button>
      <Grid
        className={classes.grid}
        container
        // spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <Grid item md>
          <Details title="Income" />
        </Grid>
        <Grid item md={4}>
          <Main />
        </Grid>
        <Grid item md>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
