import React from "react";
import BodyPart from "./BodyPart";

function BodyParts({ bodyParts, bodyPart, setBodyPart, setExercises }) {
  return (
    <div className="overflow-auto w-[95%] m-auto">
      <ul className="flex  overflow-auto">
        {bodyParts.map((item) => {
          console.log();
          return (
            <BodyPart
              setExercises={setExercises}
              key={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default BodyParts;
