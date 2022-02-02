import { Box, TextareaAutosize, Typography } from "@mui/material";
import React, { Fragment } from "react";

const txtareastyle = {
  width: "100%",
  padding: 10,
  background: "url(http://i.imgur.com/2cOaJ.png)",
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: 35,
  paddingTop: 10,
  borderColor: "#ccc",
};

export default function Response({ data }) {
  let readableObj = "{\n";
  let obj = data;

  for (let key in obj) {
    readableObj += "\t";
    readableObj +=
      typeof obj[key] === "string"
        ? `${key}: "${obj[key]}"`
        : `${key}: ${obj[key]}`;
    if (Object.keys(obj).pop() !== key.toString()) {
      readableObj += ',\n';
    }
  }
  readableObj += "\n}";

  return (
    <Fragment>
      <Box>
        <Typography mt={3} mb={3}>
          JSON
        </Typography>
        <TextareaAutosize
          minRows={3}
          maxRows={5}
          style={txtareastyle}
          value={readableObj}
          disabled
        />
      </Box>
    </Fragment>
  );
}
