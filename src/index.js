import React from "react";
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import PersonalInfo from "./pages/PersonalInfo"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <div>
            <h1>Hello world!</h1>
            <Link to="personalinfo">Personal Information</Link>
        </div>
    ),
  },
  {
    path: "personalinfo",
    element: <PersonalInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);