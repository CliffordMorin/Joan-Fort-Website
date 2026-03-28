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
      width: "20%",
    },
  },
  link: {
    textDecoration: "none",
    color: "#FFD600", // Bright yellow for visibility
    cursor: "pointer",
    fontWeight: 900,
    fontSize: "1.1em",
    textShadow: "0 1px 2px #000",
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
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
    backgroundColor: "rgba(0,0,0,0.85)", // Black with opacity
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    padding: "24px 32px",
    maxWidth: 420,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "6px 4px 6px 14px",
      fontSize: "0.82rem",
      maxWidth: 170,
      margin: "8px 0 0 8px",
      textAlign: "left",
    },
  },
  albumCover: {
    width: "100%",
    maxWidth: 300,
    display: "block",
    margin: "0 auto 16px auto",
    borderRadius: 8,
    transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      "&:hover": {
        transform: "scale(1.07)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 180,
      margin: "0 0 12px 10px",
      // No hover effect on mobile
      "&:hover": {
        transform: "none",
      },
    },
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
      fontSize: "10px",
      paddingTop: "7%",
      paddingLeft: "0%",
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
