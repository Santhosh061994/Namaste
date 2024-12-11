import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ABout from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";



const Applayout = () => {

    return(
        <div className="Apps">
            <Header />
            <Body />
        </div>

    );
    

};

const appRouter = createBrowserRouter([
{
    path: "/",
    element: <Applayout/>,
    errorElement: <Error />,
},
{
    path: "/About",
    element: <ABout/>
},
{
    path: "/contact",
    element: <Contact/>
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);