import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../ui/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <h1>About</h1>,
            },
            {
                path: "contact",
                element: <h1>Contact</h1>,
            },
        ],
    },
]);

export default router;
