import { Link } from "react-router-dom";
import ChapterComponent from "./ChapterComponent";

const PartComponent = ({ part }) => {
    return (
        <div className="row mt-1">
            <div className="col-2 col-xl-1">
                <Link className="text-decoration-none text-body" to={`/part/${part.id}`}>
                    <h2 className="text-muted">§ {part.num}</h2>
                </Link>
            </div>
            <div className="col-10">
                <Link className="text-decoration-none text-body" to={`/part/${part.id}`}>
                    <h2>{part.title}</h2>
                    <p className="fst-italic">{part.scribe}</p>
                </Link>
            </div>
            {part.chapters?.map((chapter, i) => (
                <ChapterComponent key={i} chapter={chapter} />
            ))}
        </div>
    );
};

export default PartComponent;
