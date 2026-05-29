import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  reviewBox: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: "4px",
    color: "#000000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  reviewText: {
    color: `#000000 !important`,
    textAlign: "justify",
    textJustify: "inter-word",
    lineHeight: 1.6,
    fontSize: "1rem",
    marginBottom: theme.spacing(1),
    "& a": {
      color: "#ffffff",
      backgroundColor: theme.palette.primary.main,
      textDecoration: "none",
      marginTop: theme.spacing(1),
      display: "inline-block",
      padding: theme.spacing(1, 2),
      borderRadius: "4px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        transform: "translateY(-2px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
    },
    "& strong": {
      color: "#000000",
      fontWeight: 600,
    },
  },
}));
