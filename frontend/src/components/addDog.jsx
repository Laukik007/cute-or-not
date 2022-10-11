import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";

function AddDog() {
  return (
    <div className="addDogMain">
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} style={{ marginTop: "2rem" }}>
          <Paper>
            <Typography variant="h5">Add a Doggo</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default AddDog;
