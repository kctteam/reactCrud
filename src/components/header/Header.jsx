import ThemeSwitcher from "./ThemeSwitcher";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { deletePartMethod } from "../../utils/api/Part";
import { deleteChapterMethod } from "../../utils/api/Chapter";
import { useConfirm } from "./../content/ConfirmServiceBS";

const Header = ({ chapterId, partId }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const confirm = useConfirm();

    const deletePart = () => {
        //console.log(partId);
    };

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
                {location.pathname == "/" ? (
                    <div className="d-inline-flex border-end pe-2 me-2">
                        <Link to={"/part/" + null + "/edit"} className="btn btn-link text-body" title="Создать раздел">
                            <i className="fa-light fa-circle-plus fa-fw"></i>
                        </Link>
                    </div>
                ) : null}
                {/^\/part\/([0-9]*)$/.test(location.pathname) ? (
                    <div className="d-inline-flex border-end pe-2 me-2">
                        <Link to={"/chapter/" + partId + "/create/"} className="btn btn-link text-body" title="Создать главу">
                            <i className="fa-light fa-circle-plus fa-fw"></i>
                        </Link>
                        <Link to={"/part/" + partId + "/edit/"} className="btn btn-link text-body" title="Редактировать раздел">
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
                                        deletePartMethod(partId);
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
                {/^\/chapter\/([0-9]*)$/.test(location.pathname) ? (
                    <div className="d-inline-flex border-end pe-2 me-2" title="Редактировать главу">
                        <Link to={"/chapter/" + chapterId + "/edit"} className="btn btn-link text-body">
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
                                        deleteChapterMethod(chapterId);
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
