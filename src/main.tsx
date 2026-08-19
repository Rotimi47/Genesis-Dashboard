import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { AppRoutes } from "./routes";
import {authRoutes} from "./routes/auth.route"
import {dashboardRoutes} from "./routes/dashboard.route"
import "./App.css"
import { Dashboard } from "./pages/dashboard/Dashboard";

document.documentElement.classList.add("dark");

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});

const router = createBrowserRouter([
  {

    path: AppRoutes.dashboard,
    children : [
      { 
      children: [authRoutes],
      },
      { 
      children: [dashboardRoutes],
      element:<Dashboard/>
      }
    ]
  
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
