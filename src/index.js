import React from "react";
import  ReactDOM  from "react-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Programs from "./components/Programs";
import About from "./components/About";
import Shop from "./components/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { element } from "prop-types";



const router = createBrowserRouter([
    {
        index: true,
        element: <Intro/>
    },
    {
        path:"/Home",
        element:<Home/> 
    },
    {
        path: "/Shop",
        element: <Shop />
    },
    {
        path: "/Programs",
        element: <Programs />
    },
    {
        path: "/About",
        element: <About />
    }
])

ReactDOM.render(<RouterProvider router={router}/>, document.getElementById("app"))