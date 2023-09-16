import "./scss/bootstrap.scss";
import "./scss/icons_awesome.scss";
import "bootstrap/js/index.esm";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setDefaultTheme } from "./utils/ThemeSwitcher";

import Error from "./pages/Error";
import reportWebVitals from "./reportWebVitals";

import Main from "./pages/main/Main";
import Chapter from "./pages/chapter/Chapter";
import Part from "./pages/part/Part";
import Editor from "./pages/editor/Editor";

setDefaultTheme(); //Определение темная или светлая тема

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        title: ".священный.веб",
    },
    {
        path: "/chapter/:chapterId",
        element: <Chapter />,
        title: "Глава",
    },
    {
        path: "/part/:partId",
        element: <Part />,
        title: "Часть",
    },
    {
        path: "/part/:partId/edit",
        element: <Editor />,
        title: "Редактор",
    },
    {
        path: "/chapter/:chapterId/edit",
        element: <Editor />,
        title: "Редактор",
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
