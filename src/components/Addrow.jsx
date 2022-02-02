import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tabelcell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  checkbox: {
    padding: ["2px 5px", "!important"],
  },
  textField: {
    width: "100%",
  },
});

export default function Addrow({ setRows, rowId, data, setData }) {
  const classes = useStyles();
  const [checkkCheckkbox, secheckkCheckkbox] = useState(false);

  const handelChange = (e) => {
    secheckkCheckkbox(true);
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];

    if (!checkkCheckkbox) {
      setRows((oldArr) => [...oldArr, rowId]);
      result = { ...result, id: rowId, checked: true };
    } else {
      secheckkCheckkbox(false);
      result = { ...result, checked: false };
    }

    const indx = data.findIndex((value) => value.id === Number(e.target.name));

    if (indx === -1) {
      setData((oldarr) => [...oldarr, result]);
    } else {
      const newArr = Object.assign([...data], {
        [indx]: result,
      });
      setData(newArr);
    }

    console.log(data);
  };

  const onTextChnage = (e) => {
    let result = data.filter((entry) => entry.id === rowId)[0];

    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    const indx = data.findIndex((value) => value.id === rowId);

    if (indx === -1) {
      setData((oldarr) => [...oldarr, result]);
    } else {
      const newArr = Object.assign([...data], {
        [indx]: result,
      });
      setData(newArr);
    }
  };

  return (
    <Fragment>
      <TableRow>
        <TableCell className={classes.tabelcell}>
          <Checkbox
            checked={checkkCheckkbox}
            onChange={handelChange}
            size="large"
            className={classes.checkbox}
            name={`${rowId}`}
          />
        </TableCell>
        <TableCell className={classes.tabelcell}>
          <TextField
            className={classes.textField}
            inputProps={{ style: { height: 30, padding: "0 5px" } }}
            name="key"
            onChange={onTextChnage}
          />
        </TableCell>
        <TableCell className={classes.tabelcell}>
          <TextField
            className={classes.textField}
            inputProps={{ style: { height: 30, padding: "0 5px" } }}
            name="value"
            onChange={onTextChnage}
          />
        </TableCell>
        <TableCell className={classes.tabelcell}>
          <TextField
            className={classes.textField}
            inputProps={{ style: { height: 30, padding: "0 5px" } }}
            name="description"
            onChange={onTextChnage}
          />
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
