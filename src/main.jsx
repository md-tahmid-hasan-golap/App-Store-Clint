import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Login from "./Components/Login.jsx";
import Registation from "./Components/Registation.jsx";
import FirebaseAuthProvider from "./firebase/FirebaseAuthProvider.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registation",
        Component: Registation,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>
);
