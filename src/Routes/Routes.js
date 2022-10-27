import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Courses from "../Components/Pages/Courses/Courses";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Home from "../Components/Pages/Home/Home";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/blogs', element: <Blogs></Blogs>},
        {path: '/faq', element: <FAQ></FAQ>},
        {path: '/courses', element: <Courses></Courses>},
    ]},
])