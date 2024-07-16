import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
function ExerciseVideos({ exerciseVideos }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [video, setVideo] = useState(4);

  useEffect(() => {
    // Define the function that updates the state with the new window width
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      // console.log(width);

      // Set the video state based on the window width
      if (width > 800) {
        setVideo(9);
      } else {
        setVideo(4);
      }
    };

    // Add the event listener for resize events
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state is updated with initial window width
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="videos">
      <Box sx={{ marginTop: { lg: "70px", xs: "20px" } }} p="20px">
        <Typography
          textAlign={"center"}
          sx={{ fontSize: { lg: "84px", xs: "25px" } }}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
          Watch{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            {name}
          </span>{" "}
          exercise videos
        </Typography>
        <div className="flex flex-wrap justify-center items-center flex-row  ">
          {exerciseVideos?.slice(0, video)?.map((item, index) => (
            <div className="w-[94%] m-auto md:w-[400px] md:h-[300px]   p-4 h-[270px] ">
              <a
                key={index}
                target="_blank"
                className="exercise-video w-full"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                rel="noreferrer"
              >
                <img
                  className="w-full"
                  style={{ borderTopLeftRadius: "20px" }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <div>
                  <p className="text-xs"> {item.video.title}</p>
                </div>
                <div className="flex mt-2 items-center">
                  <span className="text-xs mr-2">Channel</span>
                  <p className="text-sm">{item.video.channelName}</p>
                </div>
              </a>
            </div>
            // <a
            //
            //   href=
            //
            //
            // >
            //
            //   <Box>
            //     <Typography
            //       sx={{ fontSize: { lg: "28px", xs: "18px" } }}
            //       fontWeight={600}
            //       color="#000"
            //     >
            //
            //     </Typography>
            //     <Typography fontSize="14px" color="#000">
            //
            //     </Typography>
            //   </Box>
            // </a>
          ))}
        </div>
      </Box>
    </section>
  );
}

export default ExerciseVideos;
