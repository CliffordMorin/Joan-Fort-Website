import React, { useState, useEffect } from "react";
import {
  Container,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useTheme from "@mui/material/styles/useTheme";
import { Fade } from "react-awesome-reveal";
import makeStyles from "./styles";
import { Helmet } from "react-helmet-async";
// import { ReactComponent as LogoLarge } from "../../images/logoLarge.svg";
import logo from "../../images/logo.svg";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = makeStyles();
  const [open, setOpen] = useState(true);

  const TransitionDown = (props) => {
    return <Slide {...props} direction="down" />;
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Container
      className={classes.container}
      sx={{
        [theme.breakpoints.down("sm")]: {
          ml: 0,
          pl: 0,
        },
      }}
      maxWidth={isSmallScreen ? "sm" : "xl"}
    >
      <Helmet>
        <title>Joan Fort | Home</title>
        <meta name="description" content="Joan Fort's Home Page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDown}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="info"
          className={classes.transparentSnackbar}
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          New Album{" "}
          <a
            href="https://open.spotify.com/album/3JethU0YM8wTTyWouZAQ8c?si=8GlN3lDfTq6OP2effRzZgQ"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            "So Far, So Good"
          </a>{" "}
          out now! Click to listen!{" "}
        </Alert>
      </Snackbar>
      <Container
        className={classes.textContainer}
        sx={{
          marginLeft: "60%",
          [theme.breakpoints.down("sm")]: {
            width: "40%",
            pt: "10%",
            ml: 0,
            pl: 0,
          },
        }}
        maxWidth={isSmallScreen ? "sm" : "lg"}
      >
        <Fade delay="50">
          <img src={logo} alt="logo" className={classes.logo} />
        </Fade>
        <Fade delay="100">
          <Typography
            component="span"
            variant="h1"
            sx={{
              display: "inline",
              color: theme.palette.text.textDark,
              [theme.breakpoints.down("sm")]: {
                pb: 10,
              },
            }}
          >
            JOAN
            <Typography
              variant="h1"
              component="span"
              sx={{
                display: "inline",
                color: theme.palette.secondary.main,
              }}
            >
              FORT
            </Typography>
          </Typography>
        </Fade>
        {/* <Fade delay="100">
          <Typography variant="h5" sx={{ color: theme.palette.text.light }}>
            Guitarist, Composer & Educator
          </Typography>
        </Fade>

        <Divider className={classes.divider} />

        <Fade delay="100">
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", color: theme.palette.text.light }}
          >
            <a
              href="https://orcd.co/avvade9"
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              "THE DAM JAWN"
            </a>{" "}
            Out Now!
          </Typography>
        </Fade> */}
      </Container>
    </Container>
  );
};

export default Home;
