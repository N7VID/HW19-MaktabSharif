import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import AboutPage from "./pages/about-page/aboutPage.jsx";
import BootCampsPage from "./pages/boot-camps-page/BootCampsPage.jsx";
import ContactPage from "./pages/contact-page/ContactPage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import SinglePage from "./pages/single-page/SinglePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/boot-camps",
        element: <BootCampsPage />,
      },
      {
        path: "/boot-camps/:id",
        element: <SinglePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
