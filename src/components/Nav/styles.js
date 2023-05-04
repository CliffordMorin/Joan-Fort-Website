import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navLinkText: {
    color: theme.palette.text.light,
    "&:hover": {
      color: theme.palette.text.black,
    },
  },
}));
