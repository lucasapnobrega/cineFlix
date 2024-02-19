import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/"
import Movie from "./pages/Movie/"
import Search from "./pages/Search/"
import TopRated from "./pages/TopRated";
import MovieGenre from "./pages/MovieGenre";
import Favorites from "./pages/Favorites";
import Actor from "./pages/Actor";

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {index: true, element: <Home />},
    {path: "movie/:id", element: <Movie />},
    {path: "search", element: <Search />},
    {path: "favorites", element: <Favorites />},
    {path: "topRated", element: <TopRated />},
    {path: "moviesGenre", element: <MovieGenre />},
    {path: "actor/:id", element: <Actor />}
  ]
}])

export default router
