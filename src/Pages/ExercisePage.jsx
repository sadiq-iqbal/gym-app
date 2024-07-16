import React, { useEffect, useState } from "react";
import ExerciseDetail from "../Componenets/ExerciseDetail";
import ExerciseVideos from "../Componenets/ExerciseVideos";
import SimilarExercise from "../Componenets/SimilarExercise";
import { CiDumbbell, CiHome } from "react-icons/ci";
import { NavLink, useParams } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import fetchData, { options, youtubeOptions } from "../Utils/fetchData";
// import { FitnessCenterIcon } from "@mui/icons-material";
function ExercisePage() {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  console.log("it is exercise page", id);
  useEffect(() => {
    async function getIndiviualItem() {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        options
      );
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetail);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      console.log(exerciseVideosData.contents);
      setExerciseVideos(exerciseVideosData.contents);
    }

    getIndiviualItem();
  }, [id]);

  return (
    <div>
      <div className="flex  border-2 bg-black text-white border-black bg-[#ffffff70] p-6 overflow-hidden">
        <nav className="w-[100%]   ">
          <ul className="flex justify-between items-center">
            <li className="flex ">
              <NavLink to={"/"} className="flex items-center">
                {/* <FitnessCenterIcon fontSize="large"></FitnessCenterIcon> */}

                <Typography
                  fontSize={"20px"}
                  fontFamily="sans-serif"
                  ml="4px"
                  fontWeight="700"
                >
                  Coal's gym
                </Typography>
              </NavLink>
            </li>
            <div className="flex justify-around md:w-[500px] md:ml-60">
              <li className="ml-4">
                <NavLink to={"/"}>
                  <CiHome className="md:hidden lg:hidden text-3xl"></CiHome>
                  <p className="hidden md:block lg:block">Home</p>
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <ExerciseDetail exerciseDetail={exerciseDetail}></ExerciseDetail>
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      ></ExerciseVideos>
      <SimilarExercise></SimilarExercise>
    </div>
  );
}

export default ExercisePage;
