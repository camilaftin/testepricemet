import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import AdicionarProduto from "./Routes/AdicionarProduto";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/useTheme"
import { redirect } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: '',
        loader: () => redirect('/home')
      },
      {
        path: '*',
        loader: () => redirect('https://http.cat/404')
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/produto/:id",
        element: <Detail />,
      },
      {
        path: "/addproduto",
        element: <AdicionarProduto />,
      }

    ]
  }
])



root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);