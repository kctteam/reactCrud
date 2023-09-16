import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

const Header = ({ chapterId, partId }) => {
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
                {chapterId ? (
                    <Link to={"/chapter/" + chapterId + "/edit"} className="btn btn-link text-body">
                        <i className="fa-light fa-pen-nib"></i>
                    </Link>
                ) : null}
                {partId ? (
                    <Link to={"/part/" + partId + "/edit/"} className="btn btn-link text-body">
                        <i className="fa-light fa-pen-nib"></i>
                    </Link>
                ) : null}

                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Header;
