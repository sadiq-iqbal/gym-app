import { Input, Stack, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import fetchData, { options } from "../Utils/fetchData";
import BodyParts from "./BodyParts";

function SearchElement({ bodyPart, setBodyPart, setExercises }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
        options
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    async function getData() {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setBodyParts(["all", ...data]);
      console.log(bodyParts);
    }
    getData();
  }, []);

  return (
    <Stack mt={"50px"} overflow="hidden">
      <div className="overflow-hidden mb-11 m-auto text-center w-[100vh] text-4xl">
        <Typography
          sx={{
            fontSize: {
              lg: "45px",
              xs: "1rem",
            },
          }}
          fontSize="40px"
          fontWeight="400"
        >
          Find your Favourite{" "}
          <span className="inline  font-extrabold text-red-700">Exercises</span>{" "}
          and get into Shape
        </Typography>
      </div>
      <Stack m={"auto"} mb={"70px"} direction="row" justifyContent="flex-end">
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          sx={{
            input: {
              width: {
                lg: "700px",
                xs: "80%",
              },
            },
            width: "80%",
            // height: "30px",
            padding: "0px",
          }}
          variant="outlined"
          placeholder="Search i.e  'Bicep', 'Bench press',  'lower chest'"
        ></TextField>
        <Button
          onClick={handleSearch}
          sx={{
            backgroundColor: "black",
            hover: {
              backgroundColor: "black",
            },
          }}
          variant="contained"
          size="large"
        >
          {" "}
          search
        </Button>
      </Stack>
      <Stack>
        <BodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
          bodyParts={bodyParts}
        ></BodyParts>
      </Stack>
    </Stack>
  );
}

export default SearchElement;
