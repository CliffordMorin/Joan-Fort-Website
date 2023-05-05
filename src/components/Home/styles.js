import { makeStyles } from "@mui/styles";
import joan5 from "../../images/joan5.jpg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${joan5})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "50%",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  divider: {
    backgroundColor: theme.palette.text.dark,
    width: "40%",
    height: "3px",
    margin: "20px auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      ml: 0,
    },
  },
  textContainer: {
    paddingTop: "4%",
    paddingLeft: "20%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "10%",
      width: "100%",
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
