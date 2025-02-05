import makeStyles from "./styles";
import { Container, Typography, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";
import VideoItem from "./VideoItem";

const Videos = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const videoTrio = [
    {
      title: "Joan Fort Organ trio 'Tyrone (L.Young)'",
      link: "https://www.youtube.com/embed/ZJFQt78Ncdg?si=9lIDwTKaPgCgZ3Ee",
    },
    {
      title: "Joan Fort Organ trio 'you'll be missed'",
      link: "https://www.youtube.com/embed/LbwxIs6h1sk",
    },
    {
      title: "Joan Fort Organ trio 'Lyresto'",
      link: "https://www.youtube.com/embed/k4Xk0Q4IJzc",
    },
    {
      title: "Joan Fort Organ trio 'Speedball'",
      link: "https://www.youtube.com/embed/0S--_i2M28Q",
    },

    // Add more videos as needed
  ];

  const videoJawn = [
    {
      title: "Dam Jawn 'Send In the Clowns'",
      link: "https://www.youtube.com/embed/wuf-jbppOog",
    },
    {
      title: "Dam Jawn 'Master St'",
      link: "https://www.youtube.com/embed/UR6oHk4okfo",
    },
  ];
  return (
    <Container>
      <Helmet>
        <title>Joan Fort | Videos</title>
        <meta name="description" content="Videos of Joan Fort" />
        <link rel="canonical" href="/videos" />
      </Helmet>
      <Typography
        align="center"
        variant="h2"
        sx={{ pt: 5, pb: 2, color: theme.palette.text.dark }}
      >
        <Bounce>VIDEOS</Bounce>
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
      <Typography
        align="center"
        variant="h2"
        sx={{ pt: 5, pb: 2, color: theme.palette.text.dark }}
      >
        Joan Fort Organ Trio
      </Typography>
      {videoTrio.map((video, index) => {
        return (
          <Container align="center" className={classes.video}>
            <VideoItem key={index} title={video.title} link={video.link} />
          </Container>
        );
      })}
      <Typography
        align="center"
        variant="h2"
        sx={{ pt: 5, pb: 2, color: theme.palette.text.dark }}
      >
        Dam Jawn
      </Typography>
      {videoJawn.map((video, index) => {
        return (
          <Container align="center" className={classes.video}>
            <VideoItem key={index} title={video.title} link={video.link} />
          </Container>
        );
      })}
    </Container>
  );
};

export default Videos;
