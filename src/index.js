import "./scss/bootstrap.scss";
import "./scss/icons_awesome.scss";
import "bootstrap/js/index.esm";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import { setDefaultTheme } from "./utils/ThemeSwitcher";

import Error from "./pages/Error";
import reportWebVitals from "./reportWebVitals";

import Main from "./pages/main/Main";
import Chapter from "./pages/chapter/Chapter";
import Part from "./pages/part/Part";
import EditorPart from "./pages/editor/EditorPart";
import EditorСhapter from "./pages/editor/EditorСhapter";

import MainLayout from "./components/layout/MainLayout";

setDefaultTheme(); //Определение темная или светлая тема

const router = [
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
        element: <EditorPart />,
        title: "Редактор",
    },
    {
        path: "/chapter/:partId/create",
        element: <EditorСhapter />,
        title: "Редактор",
    },
    {
        path: "/chapter/:chapterId/edit",
        element: <EditorСhapter />,
        title: "Редактор",
    },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    {router.map((route) => (
                        <Route key={route.key} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </MainLayout>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
