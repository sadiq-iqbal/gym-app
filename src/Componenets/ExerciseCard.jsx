import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import myExercise from "../assets/exe.png";
import { CiDumbbell } from "react-icons/ci";

function ExerciseCard({ exercise, setExercises }) {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className=" -xl m-2 p-4  hover:border-2 hover:shadow-2xl hover:shadow-black border-black border-[1px] hover:scale-105 transition-transform  rounded-xl border-gray-500 min-h-48 md:min-h-[500px] shadow-lg shadow-gray-500"
    >
      <li className=" w-52 md:w-64 h-auto  ">
        <div className="flex flex-col justify-between  items-start ">
          <figure className="m-auto">
            <img
              className="w-52 h-auto"
              src={exercise.gifUrl}
              alt=""
              loading="lazy"
            />
          </figure>
          <div className="flex mb-2 mt-4 justify-center items-center">
            <span className="mr-2 rounded-full border-[1px] p-1 border-black">
              <CiDumbbell></CiDumbbell>{" "}
            </span>
            <p>{exercise.equipment}</p>
          </div>
          <div className="w-full   ">
            <Button
              variant="outlined"
              color="primary"
              sx={{
                border: "1px solid black",
                borderRadius: "50px",
                margin: "2px",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50px",
                },
              }}
            >
              {exercise.target.slice(0, 8)}
            </Button>

            <Button
              variant="oulined"
              color="primary"
              sx={{
                border: "1px solid black",
                borderRadius: "50px",
                marginLeft: "6px",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              {exercise.bodyPart}
            </Button>
          </div>
          <div className="mt-4 flex items-start justify-center">
            <img
              className="border-1 border-black"
              width={"30px"}
              height={"auto"}
              src={myExercise}
              alt=""
            />
            :{" "}
            <Typography
              sx={{
                textDecoration: "underline",
                padding: "3px",
                textTransform: "capitalize",
              }}
            >
              {exercise.name}
            </Typography>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ExerciseCard;
