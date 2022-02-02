import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { Fragment, useState } from "react";
import Addrow from "./Addrow";

const useStyles = makeStyles({
  tabelcell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  typography: {
    marginBottom: "20px !important",
    marginTop: "10px !important",
  },
});

export default function CreateTable({ text, data, setData }) {
  const classes = useStyles();
  const [rows, setRows] = useState([0]);
  

  return (
    <Fragment>
      <Box>
        <Typography className={classes.typography} md={2} mb={2}>
          {text}
        </Typography>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: "100%", border: "1px solid rgba(224,224,224,1)" }}
          >
            <TableHead>
              <TableRow>
                <TableCell className={classes.tabelcell}>...</TableCell>
                <TableCell className={classes.tabelcell}>Key</TableCell>
                <TableCell className={classes.tabelcell}>Value</TableCell>
                <TableCell className={classes.tabelcell}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <Addrow key={index} data={data} setData={setData} setRows={setRows} rowId={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
}
