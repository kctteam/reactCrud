import { Link } from "react-router-dom";

const Breadcrumbs = ({ links }) => {
    if (!links || links.length == 0) {
        return <></>;
    }
    return (
        <div className="row mt-3">
            <div className="col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link className="text-decoration-none text-body" to={`/`}>
                                Оглавление
                            </Link>
                        </li>
                        {links.map((link) => (
                            <li className="breadcrumb-item">
                                <Link className="text-decoration-none text-body" to={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};
export default Breadcrumbs;
