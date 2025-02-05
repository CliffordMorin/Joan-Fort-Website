import { makeStyles } from "@mui/styles";
import cover from "../../images/cover.jpeg";

export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${cover})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",

    [theme.breakpoints.down("sm")]: {},
  },
  logo: {
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
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
  transparentSnackbar: {
    backgroundColor: "rgba(33, 150, 243, 0.9)", // Adjust the alpha channel (fourth value) as needed
  },
  textContainer: {
    paddingTop: "1%",
    paddingLeft: "13%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    "& span": {
      fontSize: "3rem",
      fontWeight: "bold",
      paddingRight: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "7%",
      paddingLeft: "30%",
      width: "100%",
      "& span": {
        fontSize: "2rem",
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
