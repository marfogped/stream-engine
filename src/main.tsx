import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource-variable/dm-sans";
import "./index.css";

import RootLayout from "./layouts/root-layout";
import PrivacyPolicy from "./routes/privacy-policy/PrivacyPolicy";
import { NotFound, Loader } from "./components/shared";

import Homepage from "./routes/homepage/Homepage";
const CareersPage = lazy(() => import("./routes/careers/CareersPage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/careers",
        element: (
          <Suspense fallback={<Loader />}>
            <CareersPage />
          </Suspense>
        ),
      },
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
