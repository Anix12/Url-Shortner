import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./Homepage.js"
import { authRoute } from "./auth.route"
import { dasboardRoute } from "./dashboard.js"
import { redirectRoute } from "./redirect.route.js"
import App from "../App"

export const rootRoute = createRootRoute({
    component: App
})

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dasboardRoute
])