import { Link } from "react-router-dom";

const Breadcrumbs = ({ links }) => {
    return (
        <div className="row">
            <div className="col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link className="text-decoration-none text-body" to={`/`}>
                                Оглавление
                            </Link>
                        </li>
                        {links.map((link, index) => (
                            <li className="breadcrumb-item" key={index}>
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
