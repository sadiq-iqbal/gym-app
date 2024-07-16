import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout";
import SearchElement from "../Componenets/SearchElement";
import Home from "../Componenets/Home";
import ExercisePage from "../Pages/ExercisePage";
export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404 page not Found</h1>,
  },
  {
    path: "/",
    element: <HomeLayout> </HomeLayout>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/exercise/:id",
    element: <ExercisePage></ExercisePage>,
  },
]);
