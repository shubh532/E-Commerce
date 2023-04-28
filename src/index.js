import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Header from "./Components/Header";
import HomePage from "./Pages/Home";
import Music from "./Pages/Music";
import ProductsGallary from "./Components/ProductsGallary";
import ContactUs from "./Pages/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        children: [{ path: "/", element: <Music></Music> }],
      },
      {
        path: "/aboutus",
        element: <Header></Header>,
        children: [{ path: "/aboutus", element: <AboutUs /> }],
      },
      {
        path: "/store",
        element: <Header></Header>,
        children: [{ path: "/store", element: <ProductsGallary/> }],
      },
      {
        path: "/contactus",
        element: <Header></Header>,
        children: [{ path: "/contactus", element: <ContactUs></ContactUs> }],
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
