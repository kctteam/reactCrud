import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Breadcrumbs from "../../components/header/Breadcrumbs";

import { Routes, Route } from "react-router-dom";
import { ConfirmServiceProvider } from "./../../components/content/ConfirmServiceBS";
import { createContext, useState } from "react";

const HeaderContext = createContext({ breadcrunbs: { links: [] } });

export const Context = createContext({});

const MainLayout = ({ children }) => {
    const [links, setLinks] = useState([]);
    const [item, setItem] = useState({type: null, data: {}});

    const contextOptions = {
        current_item: {
            item: item,
            setItem: setItem,
        },
        breadcrumbs: {
            link: links,
            setLinks: setLinks,
        },
    };

    return (
        <Context.Provider value={contextOptions}>
            <ConfirmServiceProvider>
                <div className="container py-5">
                    <Header />
                    <Breadcrumbs links={links} />
                    {children}
                    <Footer />
                </div>
            </ConfirmServiceProvider>
        </Context.Provider>
    );
};

export default MainLayout;
