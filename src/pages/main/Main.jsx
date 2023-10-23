import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
//import data from "../../data/testData.json";

import Part from "../../components/content/PartComponent";
import Breadcrumbs from "../../components/header/Breadcrumbs";

import { getParts } from "../../utils/api/Part";
import { useEffect, useState } from "react";

const Main = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        getParts().then((res) => {
            setParts(res.data);
        }).catch((e) => {
            console.log(e);
        })
    }, []);

    return (
        <div className="container py-5">
            <Header />
            <Breadcrumbs />
            <div className="row justify-content-end mt-5">
                <div className="col-6 text-end lead fst-italic">
                    <blockquote>Все написанное здесь наработано опытом команды... Отступление карается болячками ан@льными для отступника и команды оной...</blockquote>
                    <figcaption className="blockquote-footer mt-2">От авторов</figcaption>
                </div>
            </div>
            <div className="row">
                {parts.map((part, i) => (
                    <div className="col-12 mt-5" key={part.id}>
                        <Part part={part} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Main;
