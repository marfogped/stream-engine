import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/dm-sans";
import "./index.css";

import RootLayout from "./layouts/root-layout";

import Homepage from "./routes/homepage/Homepage";
import NotFound from "./components/shared/NotFound";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Homepage /> }],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
