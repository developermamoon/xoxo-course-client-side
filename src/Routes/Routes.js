import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Cart from "../Components/Pages/Cart/Cart";
import CourseDetails from "../Components/Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Components/Pages/Courses/Courses";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Page404 from "../Components/Pages/Page404/Page404";
import Register from "../Components/Pages/Register/Register";
import UserProfile from "../Components/Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/blogs', element: <Blogs></Blogs>},
        {path: '/faq', element: <FAQ></FAQ>},
        { path: '/courses', element: <Courses></Courses>, loader: () => fetch('https://xoxo-course-server-side.vercel.app/courses')},

        { path: '/category/:id', element: <Courses></Courses>, loader: ({ params }) => fetch(`https://xoxo-course-server-side.vercel.app/category/${params.id}`)},

        { path: '/course/:id', element: <CourseDetails></CourseDetails>, loader: ({ params }) => fetch(`https://xoxo-course-server-side.vercel.app/course/${params.id}`)},

        { path: '/cart/:id', element: <PrivateRoute><Cart></Cart></PrivateRoute>, loader: ({ params }) => fetch(`https://xoxo-course-server-side.vercel.app/cart/${params.id}`)},

        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},
        {path: '/userProfile', element: <UserProfile></UserProfile>},
        {path: '*', element: <Page404></Page404>},
    ]},
])