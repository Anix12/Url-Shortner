import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import RedirectPage from "../Pages/RedirectPage.jsx";

export const redirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ":id",
  component: RedirectPage,
});
