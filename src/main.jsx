import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import FirebaseAuthProvider from "./Context/FirebaseAuthProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffee"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </StrictMode>
);
