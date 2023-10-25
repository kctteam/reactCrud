import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getChapter } from "../../utils/api/Chapter";
import ChapterComponent from "../../components/content/ChapterComponent";
import ChapterContentComponent from "../../components/content/ChapterContentComponent";
import { Context } from "../../components/layout/MainLayout";

const Chapter = () => {
    const params = useParams();
    const { breadcrumbs, current_item } = useContext(Context);
    const [chapter, setChapter] = useState({ part: { num: "", title: "" }, num: "", title: "" });

    useEffect(() => {
        getChapter(params.chapterId)
            .then((res) => {
                setChapter(res.data);
                breadcrumbs.setLinks([{ link: `/part/${res.data.part?.id}`, name: "§ " + res.data.part?.num + " " + res.data.part?.title }, { name: "§ " + res.data.num + " " + res.data.title }]);
                current_item.setItem({type: 'Chapter', data: res.data})
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <div className="mt-5">
                <ChapterComponent chapter={chapter} />
            </div>
            <div className="mt-4">
                <ChapterContentComponent content={chapter.text} />
            </div>
        </>
    );
};

export default Chapter;
