import React, { createContext, useContext, useState } from "react";
import SearchElement from "./SearchElement";
import Exercises from "./Exercises";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div>
      <SearchElement
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      ></SearchElement>

      <Exercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </div>
  );
}

export default Home;
