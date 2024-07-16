import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/bg.jpg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Typography, Stack, Button } from "@mui/material";
import { CiDumbbell } from "react-icons/ci";

function Navbar() {
  return (
    <div
      className="max-w-full relative h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundOrigin: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex    bg-[#ffffff70] p-6 overflow-hidden">
        <nav className="w-[100%]   ">
          <ul className="flex justify-between items-center">
            <li className="flex ">
              <NavLink to={"/"} className="flex items-center">
                <FitnessCenterIcon fontSize="large"></FitnessCenterIcon>
                <Typography
                  fontSize={"30px"}
                  fontFamily="sans-serif"
                  ml="30px"
                  fontWeight="700"
                >
                  Coal's gym
                </Typography>
              </NavLink>
            </li>
            <div className="flex justify-around md:w-[500px] md:ml-60">
              <li className="ml-8">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="ml-8">
                <a href="#exercises">Exercise</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className=" border-white text-center p-20">
        <div>
          <h2
            className="text-xl text-nowrap sm:font-extrabold mb-8 md:text-4xl md:mb-16"
            variant="h2"
          >
            {" "}
            <b> “Get Fit, Stay Strong"</b>
          </h2>
          <p className="md:text-xl"> – Your Ultimate Exercise Companion”</p>
          <div className="mt-16">
            <a
              className="w-28 h-6 hover:bg-[#ffffff70] hover:shadow-md hover:shadow-black hover:text-black rounded-lg bg-black text-white p-2  pl-4 pr-4"
              href="#exercises"
            >
              Exercises
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
