import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";
import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/actors", element: <Actors /> },
      { path: "/directors", element: <Directors /> },
      { path: "/movies/:id", element: <Movie /> },
    ]
  }
];

export default routes;
