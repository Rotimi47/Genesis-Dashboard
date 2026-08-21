import { AppRoutes } from ".";
import type { RouteObject } from "react-router";

const dashboardRoutes : RouteObject = {
  path : AppRoutes.dashboard,
  children: [
    {

    },
  ]
}

export {dashboardRoutes}