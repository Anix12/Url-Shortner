import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import HomePage from "../Pages/HomePage.jsx"

export const homePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
  })