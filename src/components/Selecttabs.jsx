import { Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../context/DataProovider";
import CreateJsonToText from "./CreateJsonToText";
import CreateTable from "./CreateTable";

const useStyle = makeStyles({
  component: {
    marginTop: 20,
  },

  tab: {
    textTransform: "none !important",
  },
  tabs: {
    color: "#F2683A !important",
  },
});

export default function Selecttabs() {
  const [tabValue, settabValue] = useState(0);
  const { paramsData, setParamsData, headerData, setHeaderData } =
    useContext(DataContext);

  const classes = useStyle();

  const handleChange = (e, newval) => {
    settabValue(newval);
  };

  return (
    <Fragment>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className={classes.component}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ sx: { backgroundColor: "#F2683A" } }}
          className={classes.tabs}
        >
          <Tab label="Params" className={classes.tab} />
          <Tab label="Headers" className={classes.tab} />
          <Tab label="Body" className={classes.tab} />
        </Tabs>
      </Box>
      <Box>
        <Box
          role="tabpanel"
          hidden={tabValue !== 0}
          id={`simple-tabpanel-${tabValue}`}
          aria-labelledby={`simple-tab-${tabValue}`}
        >
          <CreateTable
            data={paramsData}
            setData={setParamsData}
            text={"Query Params"}
          />
        </Box>
        <Box
          role="tabpanel"
          hidden={tabValue !== 1}
          id={`simple-tabpanel-${tabValue}`}
          aria-labelledby={`simple-tab-${tabValue}`}
        >
          <CreateTable
            data={headerData}
            setData={setHeaderData}
            text={"Headers"}
          />
        </Box>
        <Box
          role="tabpanel"
          hidden={tabValue !== 2}
          id={`simple-tabpanel-${tabValue}`}
          aria-labelledby={`simple-tab-${tabValue}`}
        >
          <CreateJsonToText />
        </Box>
      </Box>
    </Fragment>
  );
}
