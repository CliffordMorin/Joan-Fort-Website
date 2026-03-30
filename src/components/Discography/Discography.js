import React from "react";

import { Container, Grow, Typography, Grid, Divider } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import Disc from "../../images/Disc.jpg";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

const Discography = () => {
  const classes = makeStyles();
  const theme = useTheme();
  return (
    <div>
      <Helmet>
        <title>Joan Fort | Discography</title>
        <meta
          name="description"
          content="Joan Fort's Discography containing martin's most recent projects and records that martin has recorded on."
        />
        <link rel="canonical" href="/discography" />
      </Helmet>
      <Grow in>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            align="center"
            pt={5}
            gutterBottom
            sx={{ color: theme.palette.text.dark }}
          >
            <Bounce>DISCOGRAPHY</Bounce>
          </Typography>
          <Divider
            sx={{
              zIndex: "100",
              backgroundColor: theme.palette.text.dark,
              height: "2px",
              width: "100px",
              margin: "auto",
              mb: 5,
            }}
          />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <LazyLoadImage
                className={classes.images}
                src={Disc}
                effect="blur"
                alt="martin"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
              <Typography
                variant="h4"
                sx={{ mt: 3, mb: 1, color: theme.palette.text.dark }}
              >
                As Leader:
              </Typography>
              <iframe
                title="Hangin' In"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/5CXVVpIQ2xuVeNTivgWdgi?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                title="So Far, So Good"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/3JethU0YM8wTTyWouZAQ8c?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <Typography
                variant="h4"
                sx={{ mt: 3, mb: 1, color: theme.palette.text.dark }}
              >
                As Co-Leader:
              </Typography>
              <iframe
                title="Triphasic"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/2rqZ82DGG2Ucnjy4nh0cpu?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                title="Forward!"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/0sUcan38J0H0R6Jey4661Y?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                title="Master st"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/3kxUnjjRa5Jjr0G4C06Pqp?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <Typography
                variant="h4"
                sx={{ mt: 3, mb: 1, color: theme.palette.text.dark }}
              >
                As Sideman:
              </Typography>
              <iframe
                title="The Lamp Is Low"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/544zydzZfrmAMQLWTCOvyZ?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                title="Spotify"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/4p93zaXPeRj2G6ZZEKh6Ki?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <iframe
                title="Spotify"
                className={classes.iframe}
                src="https://open.spotify.com/embed/album/1FBkFfyGX8KWuwU0wgU0f3?utm_source=generator"
                width="95%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>

              <Typography
                variant="h4"
                sx={{ mt: 4, color: theme.palette.text.dark }}
              >
                As leader:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <a
                      href="https://open.spotify.com/intl-es/album/5CXVVpIQ2xuVeNTivgWdgi?si=IrUZJpA1Rgq27UJ-2HPelA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hangin’ In (2026)
                    </a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    So Far, So Good (2025)
                  </Typography>
                </li>
              </ul>

              <Typography
                variant="h4"
                sx={{ mt: 3, color: theme.palette.text.dark }}
              >
                As co-leader:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <a
                      href="https://open.spotify.com/intl-es/album/2rqZ82DGG2Ucnjy4nh0cpu?si=B4TsnHZyQWakCrCabcM9Dw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Triphasic (2025)
                    </a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">Forward! (2024)</Typography>
                </li>
                <li>
                  <Typography variant="body1">Master St. (2023)</Typography>
                </li>
              </ul>

              <Typography
                variant="h4"
                sx={{ mt: 3, color: theme.palette.text.dark }}
              >
                As sideman:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <a
                      href="https://open.spotify.com/intl-es/album/544zydzZfrmAMQLWTCOvyZ?si=0SGi_vRuRfSsUWF2nIfOjA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Too Soon, Too Late (2026)
                    </a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    The Badger Digs Deep (2022)
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">Find The Way (2020)</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Discography;
