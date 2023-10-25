import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { getPart } from "../../utils/api/Part";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from "../../components/header/Breadcrumbs";
import PartComponent from "../../components/content/PartComponent";

import { ConfirmServiceProvider } from "./../../components/content/ConfirmServiceBS";

import { Context } from "../../components/layout/MainLayout";

const Part = () => {
    const params = useParams();
    const { breadcrumbs, current_item } = useContext(Context);
    const [part, setPart] = useState({ num: "", title: "" });

    useEffect(() => {
        getPart(params.partId)
            .then((res) => {
                setPart(res.data);
                breadcrumbs.setLinks([{ link: `/part/${res.data.id}`, name: "§ " + res.data?.num + " " + res.data.title }]);
                current_item.setItem({type: 'Part', data: res.data})
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="row mt-5">
            <PartComponent part={part} />
        </div>
    );
};

export default Part;
