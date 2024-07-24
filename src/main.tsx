import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource-variable/dm-sans";
import "./index.css";

import RootLayout from "./layouts/root-layout";

import Homepage from "./routes/homepage/Homepage";
import PrivacyPolicy from "./routes/privacy-policy/PrivacyPolicy";
import NotFound from "./components/shared/NotFound";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
