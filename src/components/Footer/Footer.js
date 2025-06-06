import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { YouTube, Facebook, Favorite } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import promoJoan from "../../images/promoJoan.png";
import makeStyles from "./styles";
import "./style.css";

const Footer = () => {
  const classes = makeStyles();
  let date = new Date();
  return (
    <div>
      <footer>
        <Box>
          <Container
            align="center"
            sx={{
              backgroundColor: "primary.main",
            }}
            maxWidth="xl"
          >
            <Box mb={1} pt={2}>
              <a
                href="https://www.instagram.com/joanfort_/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ffffff" }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-2xl "
                  style={{ margin: "5px 10px 16px 10px", color: "#f8f9fa" }}
                />
              </a>

              <a
                href="https://www.youtube.com/@joanfortmusic"
                target="_blank"
                rel="noreferrer"
              >
                <YouTube
                  htmlColor="#f8f9fa"
                  fontSize="large"
                  style={{ margin: "5px 10px" }}
                />
              </a>

              <a
                href="https://www.facebook.com/JoanFortN"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook
                  htmlColor="#f8f9fa"
                  fontSize="large"
                  style={{ margin: "5px 10px" }}
                />
              </a>

              {/* <a
                href="https://open.spotify.com/artist/6UI1WZGepDltj9s5RU2HHJ?si=y4clMkNyQzWF26l9DoqSCA"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSpotify}
                  className="fa-2x"
                  style={{ color: "#20DF64", margin: "10px 10px" }}
                />
              </a> */}
            </Box>
            <Box>
              <Typography
                variant="h9"
                sx={{ fontSize: "10px", color: "#f8f9fa" }}
              >
                Made with <Favorite fontSize="10px" color="error" /> by{" "}
                <a
                  href="https://cliffordmorin.dev"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  Clifford Morin
                </a>
                {` ${date.getFullYear()}`}
              </Typography>
            </Box>
          </Container>
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          Represented By Young Musicians International (YMI)
        </Typography>
        <img
          src={promoJoan}
          alt="joan promo"
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
            width: "100px", // Adjust size here
            height: "auto",
          }}
        />
      </footer>
    </div>
  );
};

export default Footer;
