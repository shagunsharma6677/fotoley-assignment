import React, { useState, useEffect } from "react";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import img1 from "./Assets/2.jpg";
import img2 from "./Assets/7.jpg";
import img3 from "./Assets/4.jpg";
import img4 from "./Assets/5.jpg";
import img5 from "./Assets/6.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Navbar from "./component/Navbar/Navbar";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

interface Image {
  id: string;
  url: string;
  details: string;
}
const images: Image[] = [
  {
    id: "1",
    url: img1,
    details:
      "Our team of highly experienced and skilled people provides the best in-house solutions for all your holiday needs. We have the right advice to make your holiday a memorable and special experience. So, let us create your holiday. We will be happy to give you a quote for all your holiday needs. If you have any questions, feel free to contact us: contact@cobra-lakeside.com.au.",
  },
  {
    id: "2",
    url: img2,
    details:
      "We are a family of dreamers, with a passion for adventure travel. We live on a small mountain valley outside of Durban, South Africa. We have always had a keen interest in nature, the wilderness and experiencing people. We love the thrill of bushwalking, riding skis, the beauty of nature for its healing properties, and the adventure of exploring new destinations by car. We love the great outdoors. And we dream of being able to share these experiences with our children. We love our animals.",
  },
  {
    id: "3",
    url: img3,
    details:
      "A holiday resort which has been designed with the ultimate choice, the resort is located in the heart of the nature and offers all the facilities you need to create unforgettable experiences with family and friends.",
  },
  {
    id: "4",
    url: img4,
    details:
      "We are a team of seasoned and experienced professionals who strive to make you happy with our products and services. We believe in taking the extra step to provide you with the best service possible. At Araluru-Arthabaska, we are committed to providing you with a hassle-free and fun holiday experience. Our team of experienced staff, travel agents and hostels are just a few of the ways we ensure you get the best from your holiday!",
  },
  {
    id: "5",
    url: img5,
    details:
      "A holiday resort which has been designed with the ultimate choice, the resort is located in the heart of the nature and offers all the facilities you need to create unforgettable experiences with family and friends.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: "#121212", // Specify the desired black shade here
      },
    },
  });
  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => {
      window.clearInterval(timer);
    };
  }, [isPlaying]);

  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
  
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <Navbar check={darkMode} change={() => setDarkMode(!darkMode)} />
          <section>
            <Grid
              style={{ minHeight: "100vh" }}
              container
              spacing={2}
            >
              {/* Row -1 */}
              <Grid
                container
                item
                md={12}
                spacing={2}
                style={{ minHeight: "75vh" }}
              >
                <Grid style={{}} item md={7} sm={12} xs={12}>
                  <div className="img-cont">
                    <div className="card">
                      <div className="card2">
                        <div>
                          <img
                            className="glow"
                            src={images[currentIndex].url}
                            alt={`${currentIndex + 1}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid style={{}} item md={5} sm={12}>
                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: darkMode ? "#1E1E1E" : "#1976d2",
                      }}
                      className="card-des glow"
                    >
                      <Typography fontSize={"20px"} variant="body1">
                        <h1>Totle Lorem</h1>
                        {images[currentIndex].details}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>

              {/* Row - 2 */}
              <Grid
                container
                item
                md={12}
                spacing={2}
                style={{ minHeight: "35vh" }}
              >
                <Grid style={{ height: "100%" }} item md={7} sm={12}>
                  <Grid
                    alignItems={"center"}
                    container
                    style={{ height: "100%", padding: "25px" }}
                    columns={12}
                    spacing={2}
                    className="carousel-cont"
                  >
                    <Grid className="disable" item xs={1}>
                      <IconButton
                        style={{
                          backgroundColor: darkMode ? "white" : "#1976d2",
                          color: "#121212",
                        }}
                        onClick={handlePrevious}
                      >
                        <ArrowLeftIcon className="frIcon" />
                      </IconButton>
                    </Grid>

                    {images.map((image, index) => (
                      <Grid
                        style={{
                          height: "70%",
                          borderRadius: "20px",
                        }}
                        item
                        key={image.id}
                        xs={2}
                        className="grid-cont"
                      >
                        <img
                          src={image.url}
                          alt={`Thumbnail ${index + 1}`}
                          className="glow grid-img"
                          onClick={() => handleThumbnailClick(index)}
                          style={{
                            width: "100%",
                            cursor: "pointer",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "conter",
                            alignItems: "center",
                            margin: "auto",
                            border:
                              currentIndex === index ? "3px solid black" : "",
                            padding: currentIndex === index ? "2px" : "0px",
                            backgroundColor: "black",
                          }}
                        />
                      </Grid>
                    ))}
                    <Grid item xs={1}>
                      <IconButton
                        style={{
                          backgroundColor: darkMode ? "white" : "#1976d2",
                          color: "#121212",
                        }}
                        onClick={handleNext}
                      >
                        <ArrowRightIcon className="frIcon" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                  }}
                  item
                  md={5}
                  sm={12}
                  sx={{
                    backgroundColor: darkMode
                      ? darkTheme.palette.background.default
                      : "",
                    backgroundImage: darkMode
                      ? "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))"
                      : "",
                  }}
                >
                  <IconButton onClick={handlePlayPause}>
                    {isPlaying ? (
                      <>
                        <PauseCircleIcon
                          style={{
                            color: darkMode ? "white" : "#121212",
                            fontSize: "120px",
                          }}
                        />
                        Pause
                      </>
                    ) : (
                      <>
                        <PlayCircleFilledWhiteIcon
                          style={{
                            color: darkMode ? "white" : "#121212",
                            fontSize: "120px",
                          }}
                        />
                        Play
                      </>
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </section>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
