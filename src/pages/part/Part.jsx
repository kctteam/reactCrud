import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getPart } from "../../utils/api/Part";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from "../../components/header/Breadcrumbs";
import PartComponent from "../../components/content/PartComponent";

const Part = () => {
    const params = useParams();
    const [part, setPart] = useState([]);

    useEffect(() => {
        getPart(params.partId)
            .then((res) => {
                setPart(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="container py-5">
            <Header partId={params.partId} />
            <Breadcrumbs links={[{ link: `/part/${part.id}`, name: "§ " + part?.num + " " + part.title }]} />
            <div className="row mt-5">
                <PartComponent part={part} />
            </div>
            <Footer />
        </div>
    );
};

export default Part;
