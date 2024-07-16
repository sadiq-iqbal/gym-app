import { Button, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";

function Exercises({ exercises, setExercises, loading }) {
  console.log("works");
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(12);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  return (
    <section id="exercises">
      <div className=" w-[95%] m-auto  border-black mt-10">
        <h1 className="text-3xl text-center mb-8 font-bold  ">
          Showing Results
        </h1>
        <ul className="flex flex-row justify-center items-center gap-3 flex-wrap m-auto">
          {currentExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              setExercises={setExercises}
              exercise={exercise}
            ></ExerciseCard>
          ))}
        </ul>
      </div>
      <Stack mt={"100px"} mb={"100px"} alignItems="center">
        {exercises.length > 9 && (
          <div className="border-2 rounded-md border-gray-700">
            <Pagination
              color="primary"
              count={Math.ceil(exercises.length / 9)}
              shape="rounded"
              defaultPage={1}
              page={currentPage}
              size="large"
              onChange={paginate}
            ></Pagination>
          </div>
        )}
      </Stack>
    </section>
  );
}

export default Exercises;
