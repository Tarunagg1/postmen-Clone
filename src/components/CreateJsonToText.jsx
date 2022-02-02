import { TextareaAutosize, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useContext } from "react";
import { DataContext } from "../context/DataProovider";

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

export default function CreateJsonToText() {
  const { setJsontext } = useContext(DataContext);

  const onChangeTextJsoon = (e) => {
    setJsontext(e.target.value);
  };
  return (
    <Fragment>
      <Box>
        <Typography mt={2} mb={2}>
          Json
        </Typography>
        <TextareaAutosize
          minRows={3}
          maxRows={5}
          onChange={onChangeTextJsoon}
          style={txtareastyle}
        />
      </Box>
    </Fragment>
  );
}
