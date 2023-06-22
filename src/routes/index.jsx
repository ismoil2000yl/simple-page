import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Page = lazy(() => import("pages/page"))
const authRoutes = [];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page",
    element: <Page />,
  },
];

export { authRoutes, privateRoutes };
