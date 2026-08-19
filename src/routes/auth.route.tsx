import { AppRoutes } from ".";
import type { RouteObject } from "react-router";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";




const authRoutes: RouteObject = { 
  path: AppRoutes.auth,
  children : [
  {
    path: "login",
    element: <SignIn />
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "resetPassword" ,
    element: <ResetPassword />
  },
  {
    path: "forgotPassword",
    element: <ForgotPassword />
  },
],
};  




export { authRoutes};
