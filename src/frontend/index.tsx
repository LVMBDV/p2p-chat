// Apparently Material UI's default typography configuration relies only on the
// 300, 400, 500, and 700 font weights.
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "normalize.css";

import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./views/app";

const router = createBrowserRouter([{ path: "/", element: App() }]);

const appDomElement = document.createElement("div");
appDomElement.id = "app";
appDomElement.style.height = "100vh";
document.body.append(appDomElement);

createRoot(appDomElement).render(<RouterProvider router={router} />);
