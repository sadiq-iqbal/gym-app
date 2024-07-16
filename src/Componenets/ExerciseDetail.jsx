import React from "react";
import myExercise from "../assets/exe.png";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import { CiDumbbell } from "react-icons/ci";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CircleIcon from "@mui/icons-material/Circle";
function ExerciseDetail({ exerciseDetail }) {
  const {
    target,
    gifUrl,
    name,
    equipment,
    bodyPart,
    secondaryMuscles,
    instructions,
  } = exerciseDetail;
  // console.log(exerciseDetail);
  return (
    <>
      <div className="p-4 hidden md:block lg:block">
        <div className="flex flex-row  ">
          <div className="border-b-[1px] flex-grow  border-black">
            <img src={gifUrl} alt="" className="w-[90%] " />
          </div>

          <div className="border-2 w-[40%] border-black p-4 rounded-xl  shadow-lg shadow-black  bg-black text-white">
            <div className=" flex items-center justify-center  mb-6">
              <h2 className="font-bold uppercase text-4xl  mb-4">{name}</h2>
            </div>
            <div className="flex mb-4 text-2xl items-center" title="target">
              <DonutSmallIcon
                size=""
                sx={{
                  width: "60px",
                  height: "60px",
                  fontSize: "16px",
                  marginRight: "22px",
                }}
                color="error"
              ></DonutSmallIcon>
              <p>{target}</p>
            </div>
            <div className="flex items-center text-2xl  mb-4 ">
              <CiDumbbell className="text-4xl"></CiDumbbell>
              <p className="ml-[25px]">{equipment}</p>
            </div>
            <div className="bodyPart flex mb-4 text-2xl ">
              <AccessibilityIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  fontSize: "16px",
                  marginRight: "22px",
                }}
                className="mr-5"
              ></AccessibilityIcon>
              <p>{bodyPart}</p>
            </div>
            <div className="m-6 mt-14 ml-2">
              <span className="font-bold text-red-600 uppercase">{name} </span>
              is a perfect exercise to target{" "}
              <strong className="text-red-600"> {target} </strong> and it
              workout secondary muscles like{" "}
              {secondaryMuscles?.map((mus) => (
                <span className=" text-red-600 text-md capitalize font-bold mr-2">
                  {mus}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl  text-center font-semibold mt-12 mb-8  uppercase">
            Instruction
          </h1>
          <ul className="bg-black rounded-lg">
            {instructions?.map((inst, index) => {
              return (
                <div className="flex items-center">
                  <li className="text-white p-8 text-lg w-[97%] ">
                    <span className="mr-3">🔴</span>
                    {inst}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="p-4 block lg:hidden md:hidden">
        <div className=" flex ">
          <div>
            <img
              className=" font-serif w-8 h-auto mr-4 font-bold "
              width={"30px"}
              height={"auto"}
              src={myExercise}
              alt=""
            />
          </div>
          <h2 className="font-bold uppercase text-lg mb-4">{name}</h2>
        </div>
        <div className="flex mb-4" title="target">
          <DonutSmallIcon
            size="small"
            sx={{
              width: "30px",
              height: "30px",
              fontSize: "16px",
              marginRight: "22px",
            }}
            color="error"
          ></DonutSmallIcon>
          <p>{target}</p>
        </div>
        <div className="flex items-center mb-4 ">
          <CiDumbbell className="text-2xl"></CiDumbbell>
          <p className="ml-[25px]">{equipment}</p>
        </div>
        <div className="bodyPart flex mb-4">
          <AccessibilityIcon className="mr-5"></AccessibilityIcon>
          <p>{bodyPart}</p>
        </div>
        <div className="m-6 ml-2">
          <span className="font-bold uppercase">{name} </span>is a perfect
          exercise to target <strong> {target} </strong> and it workout
          secondary muscles like{" "}
          {secondaryMuscles?.map((mus) => (
            <span className=" text-md capitalize font-bold mr-2">{mus}</span>
          ))}
        </div>
        <div className="border-b-[1px]  border-black">
          <img src={gifUrl} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold m-5 ml-4  uppercase">
            Instruction
          </h1>
          <ul>
            {instructions?.map((inst, index) => {
              return (
                <div className="flex items-center ">
                  <li className="bg-black text-white mt-2 mb-2 p-4 text-xs w-[97%] rounded-lg">
                    {inst}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExerciseDetail;
