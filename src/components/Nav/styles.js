import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navLinkText: {
    color: theme.palette.text.light,
    "&:hover": {
      color: theme.palette.text.black,
    },
  },
  navLinkTextMobile: {
    color: theme.palette.text.colorful,
    "&:hover": {
      color: theme.palette.text.black,
    },
  },
  navLinkTextDesktop: {
    color: theme.palette.text.dark,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.text.black,
    },
  },
  navLinkTextActiveDesktop: {
    color: theme.palette.text.colorful,
    "&:hover": {
      color: theme.palette.text.black,
    },
  },
}));
