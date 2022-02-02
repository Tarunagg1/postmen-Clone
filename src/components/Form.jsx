import { Box, TextField, MenuItem, Select, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProovider";

const useStyle = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: 150,
    height: 45,
  },
  textField: {
    width: "100%",
    background: "#F6F6F6",
  },
  button: {
    width: 100,
    heigh: 40,
    marginLeft: [5, "!important"],
  },
});

export default function Form({onSendClick}) {
  const classes = useStyle();
  const { formData, setformData } = useContext(DataContext);

  const handelChange = (e) => {
    console.log(e.target);
    setformData({ ...formData, type: e.target.value });
  };

  const onUrlChange = (e) => {
    setformData({ ...formData, url: e.target.value });
  };

  return (
    <Box>
      <div className={classes.component}>
        <Select
          value={formData.type}
          label={formData.type}
          onChange={handelChange}
          className={classes.select}
        >
          <MenuItem value={"GET"}>GET</MenuItem>
          <MenuItem value={"POST"}>POST</MenuItem>
          <MenuItem value={"PATCH"}>PATCH</MenuItem>
          <MenuItem value={"DELETE"}>DELETE</MenuItem>
        </Select>

        <TextField
          onChange={onUrlChange}
          size="small"
          className={classes.textField}
        />

        <Button className={classes.button} onClick={() => onSendClick()} variant="contained">
          Send
        </Button>
      </div>
    </Box>
  );
}
