import ReactDOM from 'react-dom'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"
import './index.css'
import PersonalInfo from './pages/PersonalInfo'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "personalinfo",
        element: <PersonalInfo/>,
    },
]);

ReactDOM.render(<RouterProvider router={router}/>, document.querySelector("#root"))