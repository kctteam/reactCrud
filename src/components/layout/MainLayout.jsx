import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Breadcrumbs from "../../components/header/Breadcrumbs";

import { ConfirmServiceProvider } from "./../../components/content/ConfirmServiceBS";
import { createContext, useState } from "react";

const HeaderContext = createContext({ breadcrunbs: { links: [] } });

const MainLayout = ({ children }) => {
    

    return (
        <ConfirmServiceProvider>
            <HeaderContext>
            <div className="container py-5">
                <Header />
                <Breadcrumbs links={[]} />
                {children}
                <Footer />
            </div>
            </HeaderContext>
        </ConfirmServiceProvider>
    );
};

export default MainLayout;
