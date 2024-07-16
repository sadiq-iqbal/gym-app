import React, { useEffect } from "react";
// import React from "react";
import backImage from "../assets/back.jpeg";
import cardioImage from "../assets/cardio.jpeg"; // Assuming 'bg.jpg' is meant for 'cardio'
import chestImage from "../assets/chest.jpeg";
import lowerArmsImage from "../assets/lower arms.jpeg";
import lowerLegsImage from "../assets/lower legs.jpeg";
import neckImage from "../assets/neck.jpeg";
import shouldersImage from "../assets/shoulder.jpeg";
import upperArmsImage from "../assets/upper arms.jpeg";
import upperLegsImage from "../assets/lower legs.jpeg";
// import waistImage from "../assets/waist.jpeg";
import tricepsImage from "../assets/triceps.jpeg";
import fetchData, { options } from "../Utils/fetchData";
function BodyPart({ item, bodyPart, setBodyPart, setExercises }) {
  const bodyPartImages = {
    all: "all",
    back: backImage,
    cardio: cardioImage,
    chest: chestImage,
    "lower arms": lowerArmsImage,
    "lower legs": lowerLegsImage,
    neck: neckImage,
    shoulders: shouldersImage,
    "upper arms": upperArmsImage,
    "upper legs": upperLegsImage,
    // waist: waistImage,
    triceps: tricepsImage, // If needed
  };

  useEffect(() => {
    async function setMyBodypart() {
      let data = [];
      if (bodyPart === "all") {
        data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
          options
        );
        setExercises(data);
      } else {
        data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1300`,
          options
        );
        setExercises(data);
      }
    }
    setMyBodypart();
  }, [bodyPart]);

  return (
    <li
      className={`${
        item === bodyPart ? "border-2 border-black" : ""
      }  border-2 m-2 rounded-lg hover:-translate-y-2 transition-all hover:shadow-lg hover:shadow-black  flex justify-center items-center flex-col w-[300px] p-10 flex-none h-[300px]`}
      key={item}
      onClick={(e) => {
        setBodyPart(item);
        window.scrollTo({ top: 1300, left: 100, behavior: "smooth" });
      }}
    >
      {bodyPartImages[item] === "all" ? (
        <h1 className="text-4xl p-8 border-black border-2 rounded-full">All</h1>
      ) : (
        <img
          src={bodyPartImages[item]}
          alt={item}
          className="w-[80%] m-auto h-3/4 object-cover"
        />
      )}
      <div
        className={`text-center ${
          bodyPartImages[item] === "all" ? "hidden" : ""
        }`}
      >
        {item}
      </div>
    </li>
  );
}

export default BodyPart;
