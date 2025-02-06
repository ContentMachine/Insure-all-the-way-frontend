import classes from "./Loader.module.css";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className={classes.container}>
      <CircularProgress
        size={"2rem"}
        color="inherit"
        style={{ color: "#e5c300" }}
      />
    </div>
  );
};

export default Loader;
