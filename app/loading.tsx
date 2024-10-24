"use client";
import { createUseStyles } from "react-jss";
import { Loader } from "semantic-ui-react";
const useStyles = createUseStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Loader active />
    </div>
  );
};

export default Loading;
