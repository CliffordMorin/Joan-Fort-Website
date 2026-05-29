import React from "react";
import { Container, Grow, Typography, Divider, Link, Box } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import makeStyles from "./styles";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

const Press = () => {
  const classes = makeStyles();
  const theme = useTheme();

  return (
    <div>
      <Helmet>
        <title>Joan Fort | Press</title>
        <meta
          name="description"
          content="Press reviews and coverage of Joan Fort's musical projects and performances."
        />
        <link rel="canonical" href="/press" />
      </Helmet>
      <Grow in>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            pt={5}
            gutterBottom
            sx={{ color: theme.palette.text.dark }}
          >
            <Bounce>PRESS</Bounce>
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

          {/* AS LEADER SECTION */}
          <Typography
            variant="h4"
            sx={{
              mt: 4,
              mb: 2,
              color: theme.palette.text.dark,
              fontWeight: "bold",
            }}
          >
            AS LEADER:
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              mb: 2,
              color: "#000000",
              fontWeight: "600",
              pl: 1,
              borderLeft: `3px solid ${theme.palette.primary.main}`,
            }}
          >
            Hangin' In (2026)
          </Typography>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>All About Jazz</strong> ★★★★
              <br />
              "...Even more notable are Fort's remarkable command of the guitar
              and his broad yet personal improvisational mindset, placing those
              assets in the service of a smooth and lyrical design that should
              please anyone who appreciates the guitar's melodious and pliable
              aspects."
              <br />
              <br />
              <Link
                href="https://www.allaboutjazz.com/hangin-in-joan-fort-45jazz"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Jazzism</strong>
              <br />
              "...For the recording, Fort surrounded himself with an impressive
              ensemble that embodies the spirit of New York jazz. Together, they
              create a sound that is firmly rooted in tradition, yet
              simultaneously showcases Fort's personal voice as a composer and
              guitarist. With Hangin' In, Joan Fort shows that jazz is not only
              a musical tradition, but also a personal journey."
              <br />
              <br />
              <Link
                href="https://www.jazzism.nl/recensies/albumrecensie-hangin-in-joan-fort/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Flophouse</strong>
              <br />
              "...Fort's hangin' in, true to his work's leitmotif, being a jazz
              musician, a nomad, tackling challenges in Amsterdam, Philly, NYC,
              on the road, growing as a human being. Growth is what you're
              looking for and Fort certainly meets demands, a step forward with
              a record that gains weight downtown."
              <br />
              <br />
              <Link
                href="http://flophousemagazine.com/2026/03/26/joan-fort-hangin-in-45-jazz-2026/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>JazzNu</strong>
              <br />
              "...Hard bop is in good hands with Fort and his men. Hangin' In is
              solid craftsmanship, with which Fort stays perfectly within the
              lines."
              <br />
              <br />
              <Link
                href="https://jazznu.com/asset?type=detail&asset=10514&title=/cd-recensies/joan-fort-hangin-in-the-45-records"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>MásJazz</strong>
              <br />
              "...Joan no es un guitarrista más en el panorama jazzístico."
              <br />
              <br />
              <Link
                href="https://www.masjazzdigital.com/el-calido-hogar-musical-de-joan-fort/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>JazzJournal UK</strong>
              <br />
              "...It's heartening to hear youngsters like Fort in full command
              of the classic jazz language and, to boot, choosing alluring
              repertoire."
              <br />
              <br />
              <Link
                href="https://jazzjournal.co.uk/2025/04/24/reviewed-the-leaning-in-underground-featuring-paula-bila-joan-fort-dikeman-hong-lumley-warelis-walter-davis-jr-luis-rivera/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          {/* AS SIDEMAN SECTION */}
          <Typography
            variant="h4"
            sx={{
              mt: 5,
              mb: 2,
              color: theme.palette.text.dark,
              fontWeight: "bold",
            }}
          >
            AS SIDEMAN:
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              mb: 2,
              color: "#000000",
              fontWeight: "600",
              pl: 1,
              borderLeft: `3px solid ${theme.palette.primary.main}`,
            }}
          >
            Triphasic - The Dam Jawn feat. Jeremy Pelt
          </Typography>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>AllAboutJazz</strong> ★★★★
              <br />
              "...Whether a moment of transition or a brief detour, Triphasic
              adds new shades and textures to the trajectory of a band that from
              its very first moment has fought to defend, champion, and refresh
              a legacy that remains far more alive than it might seem at a
              cursory look."
              <br />
              <br />
              <Link
                href="https://www.allaboutjazz.com/triphasic-the-dam-jawn-feat-jeremy-pelt-dox-records"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Jazzism</strong>
              <br />
              "...Without losing their acoustic core, and reinforced by the
              extra energy of Jeremy Pelt. The result is a beautiful, autumnal
              blues, without frills."
              <br />
              <br />
              <Link
                href="https://www.jazzism.nl/recensies/albumrecensie-triphasic-the-dam-jawn-feat-jeremy-pelt/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Jazzism</strong>
              <br />
              "...An exciting baptism of fire."
              <br />
              <br />
              <Link
                href="https://www.jazzism.nl/recensies/the-dam-jawn-feat-dick-oatts-master-st/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Flophouse</strong>
              <br />
              "...Trisaphic? Thrashfisch? Ah, what the hell. A killer record by
              The Dam Jawn, that's for sure. An acute expansion of the
              tradition."
              <br />
              <br />
              <Link
                href="http://flophousemagazine.com/2025/11/18/the-dam-jawn-triphasic-dox-2025/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Nieuweplaat</strong>
              <br />
              "...The Dam Jawn proves that the jazz collective, formed back in
              Philadelphia, is no flash in the pan. And also that the men have a
              knack for attracting the right guest musicians to take their jazz
              to an even higher level."
              <br />
              <br />
              <Link
                href="https://www.nieuweplaat.nl/album/the-dam-jawn-feat-jeremy-pelt-triphasic/"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box className={classes.reviewBox}>
            <Typography className={classes.reviewText}>
              <strong>Jazzenzo</strong>
              <br />
              "...Here too, it is the experienced Oatts who set the tone,
              interspersed with those five young guns who together represent
              great promise for the future of hardbop in the Netherlands."
              <br />
              <br />
              <Link
                href="https://www.jazzenzo.nl/?e=5354"
                target="_blank"
                rel="noopener"
              >
                Read Full Review
              </Link>
            </Typography>
          </Box>

          <Box sx={{ pb: 5 }} />
        </Container>
      </Grow>
    </div>
  );
};

export default Press;
