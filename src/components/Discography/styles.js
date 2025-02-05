import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  images: {
    width: "100%",
    padding: "0px",
    borderRadius: "10px",
    margin: "0px 10px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  text: {
    color: theme.palette.text.dark,
    textAlign: "justify",
    textJustify: "inter-word",
    padding: "10px 40px",
  },
  iframe: {
    borderRadius: "10px",
    margin: "10px",
    width: "95%",
    height: "352px",
    border: "0",
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "20px",
    },
  },
}));
