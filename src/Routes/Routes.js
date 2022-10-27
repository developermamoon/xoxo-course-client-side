import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Home from "../Components/Pages/Home/Home";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/blogs', element: <Blogs></Blogs>},
    ]},
])