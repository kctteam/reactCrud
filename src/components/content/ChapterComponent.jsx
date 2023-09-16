import { Link } from "react-router-dom";

const ChapterComponent = ({ chapter }) => {
    return (
        <div className="row mt-1">
            <div className="col-2 col-xl-1">
                <Link className="text-decoration-none text-body" to={`/chapter/${chapter.id}`}>
                    <h3 className="text-muted">§ {chapter.num}</h3>
                </Link>
            </div>
            <div className="col-10">
                <Link className="text-decoration-none text-body" to={`/chapter/${chapter.id}`}>
                    <h3>{chapter.title}</h3>
                </Link>
            </div>
        </div>
    );
};

export default ChapterComponent;
