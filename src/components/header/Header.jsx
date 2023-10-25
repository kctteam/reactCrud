import ThemeSwitcher from "./ThemeSwitcher";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { deletePartMethod } from "../../utils/api/Part";
import { deleteChapterMethod } from "../../utils/api/Chapter";
import { useConfirm } from "./../content/ConfirmServiceBS";

import { Context } from "../../components/layout/MainLayout";
import { useEffect, useContext } from "react";

const Header = ({ chapterId, partId }) => {
    const navigate = useNavigate();
    const { current_item } = useContext(Context);
    const confirm = useConfirm();
    const location = useLocation();

    useEffect(() => {
        console.log(current_item.item);
    }, [current_item.item])

    return (
        <div className="row">
            <div className="col">
                <h1>
                    <Link to={"/"} className="text-decoration-none text-body">
                        священный.веб.
                    </Link>
                </h1>
            </div>
            <div className="col text-end">
                {current_item.item.type == "Main" ? (
                    <div className="d-inline-flex border-end pe-2 me-2">
                        <Link to={"/part/" + null + "/edit"} className="btn btn-link text-body" title="Создать раздел">
                            <i className="fa-light fa-circle-plus fa-fw"></i>
                        </Link>
                    </div>
                ) : null}
                {current_item.item.type == "Part" ? (
                    <div className="d-inline-flex border-end pe-2 me-2">
                        <Link to={"/chapter/" + current_item.item.data.id + "/create/"} className="btn btn-link text-body" title="Создать главу">
                            <i className="fa-light fa-circle-plus fa-fw"></i>
                        </Link>
                        <Link to={"/part/" + current_item.item.data.id + "/edit/"} className="btn btn-link text-body" title="Редактировать раздел">
                            <i className="fa-light fa-pen-circle fa-fw"></i>
                        </Link>
                        <button
                            className="btn btn-link text-body"
                            title="Удалить раздел"
                            onClick={() => {
                                confirm({
                                    title: "Удаляем раздел?",
                                    text: "Удаляем раздел и все его содержимое?",
                                })
                                    .then(() => {
                                        deletePartMethod(current_item.item.data.id);
                                        return navigate("/");
                                        console.log("confirmed");
                                    })
                                    .catch(() => {
                                        console.log("cancel");
                                    });
                            }}
                        >
                            <i className="fa-light fa-circle-xmark fa-fw"></i>
                        </button>
                    </div>
                ) : null}
                {current_item.item.type == "Chapter" ? (
                    <div className="d-inline-flex border-end pe-2 me-2" title="Редактировать главу">
                        <Link to={"/chapter/" + current_item.item.data.id + "/edit"} className="btn btn-link text-body">
                            <i className="fa-light fa-pen-circle"></i>
                        </Link>
                        <button
                            className="btn btn-link text-body"
                            title="Удалить раздел"
                            onClick={() => {
                                confirm({
                                    title: "Удаляем главу?",
                                    text: "Удаляем главу и все её содержимое?",
                                })
                                    .then(() => {
                                        deleteChapterMethod(current_item.item.data.id);
                                        return navigate("/");
                                        console.log("confirmed");
                                    })
                                    .catch(() => {
                                        console.log("cancel");
                                    });
                            }}
                        >
                            <i className="fa-light fa-circle-xmark fa-fw"></i>
                        </button>
                    </div>
                ) : null}
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Header;
