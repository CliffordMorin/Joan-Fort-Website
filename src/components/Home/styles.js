import { makeStyles } from "@mui/styles";
import joan5 from "../../images/joan5.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${joan5})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "80%",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  textContainer: {
    paddingTop: "15%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "10%",
      display: "block",
      textAlign: "left",
      width: "40%",
      "& span": {
        fontSize: "3rem",
      },
      "& h5": {
        fontSize: "1.3rem",
      },
      "& h6": {
        fontSize: "1.3rem",
      },
    },
  },
}));
