import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useContext, useState } from "react";
import ErrorScreen from "./ErrorScreen";
import Form from "./Form";
import Header from "./Header";

import Response from "./Response";
import Selecttabs from "./Selecttabs";
import { checkParams } from "../utils/common.utils";
import { DataContext } from "../context/DataProovider";
import SnackBar from "./SnackBar";
import { getData } from "../service/api";

const useStyles = makeStyles({
  component: {
    width: "68%",
    margin: "20px auto 0 auto",
  },
});

export default function Home() {
  const classes = useStyles();
  const { formData, paramsData, headerData, Jsontext } =
    useContext(DataContext);
  const [error, setError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiresponse, setapiresponse] = useState({});

  const onSendClick = async () => {
    if (
      !checkParams(formData, Jsontext, paramsData, headerData, seterrorMessage)
    ) {
      setError(true);
      return false;
    }
    let response = await getData(formData, Jsontext, paramsData, headerData);
    if (response === "error") {
      setErrorResponse(true);
    } else {
      setErrorResponse(false);
      setapiresponse(response);
    }
  };

  return (
    <Fragment>
      <Header />
      <Box>
        <Box className={classes.component}>
          <Form onSendClick={onSendClick} />
          <Selecttabs />
          {errorResponse ? (
            <ErrorScreen />
          ) : (
            <Response data={apiresponse && apiresponse.data} />
          )}
        </Box>
        {error && (
          <SnackBar
            error={error}
            setError={setError}
            errorMessage={errorMessage}
          />
        )}
      </Box>
    </Fragment>
  );
}
