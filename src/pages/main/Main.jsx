import Part from "../../components/content/PartComponent";
import { getParts } from "../../utils/api/Part";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../components/layout/MainLayout";

const Main = () => {
    const { breadcrumbs, current_item } = useContext(Context);

    const [parts, setParts] = useState([]);

    useEffect(() => {
        getParts()
            .then((res) => {
                setParts(res.data);
                breadcrumbs.setLinks([]);
                current_item.setItem({type: "Main", data: {}});
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
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
        </>
    );
};

export default Main;
