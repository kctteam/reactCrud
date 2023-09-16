import "../scss/bootstrap.scss";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    document.title = error.status + " - Уупс!";
    console.error(error);
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <div id="error-page">
                        <h1 className="mb-3 fw-bold">{error.status} &nbsp;Уупс!</h1>
                        <p>Простите, что-то пошло не так</p>
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                        <Link to={"/"} className="btn btn-outline-secondary mt-4"><i className="fa-light fa-arrow-left fa-fw me-2"></i> Вернутся на главную</Link>
                        <a className="btn btn-outline-secondary mt-4 ms-2" href="mailto:suport@24-ok.ru" target="_blank">@Поддержка</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Error;
