import { makeStyles } from "@mui/styles";
import React, { Fragment } from "react";

const useStyle = makeStyles({
  logo: {
    width: 100,
  },
});

export default function Header() {
  const logo = "https://miro.medium.com/max/1838/1*ap0NRizcKwuX5gfzKqEk6Q.png";
  const classes = useStyle();

  return (
    <Fragment>
      <img className={classes.logo} src={logo} alt="logo" />
    </Fragment>
  );
}
