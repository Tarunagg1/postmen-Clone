import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment } from "react";

const useStyle = makeStyles({
  logo: {
    width: 100,
  },

  errimg: {
    width: "65%",
    height: "auto",
    margin: "auto",
    objectPosition: "center 0",
  },
});

export default function ErrorScreen() {
  const errorImage = "https://i.stack.imgur.com/01tZQ.png";
  const classes = useStyle();

  return (
    <Fragment>
      <Box>
        <Typography mt={3} mb={3}>
          Response
        </Typography>
        <Box style={{ display: "flex" }}>
          <img
            className={classes.errimg}
            src={errorImage}
            alt="error response"
          />
        </Box>
      </Box>
    </Fragment>
  );
}
