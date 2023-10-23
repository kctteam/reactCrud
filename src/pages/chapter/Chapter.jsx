import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getChapter } from "../../utils/api/Chapter";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from "../../components/header/Breadcrumbs";
import ChapterComponent from "../../components/content/ChapterComponent";
import ChapterContentComponent from "../../components/content/ChapterContentComponent";

import { ConfirmServiceProvider } from "./../../components/content/ConfirmServiceBS";

const Chapter = () => {
    const params = useParams();

    const [chapter, setChapter] = useState({part: {num: "", title: ""}, num: "", title: ""});

    useEffect(() => {
        getChapter(params.chapterId)
            .then((res) => {
                setChapter(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <ConfirmServiceProvider>
            <div className="container py-5">
                <Header chapterId={params.chapterId} />
                <Breadcrumbs links={[{ link: `/part/${chapter.part?.id}`, name: "§ " + chapter.part?.num + " " + chapter.part?.title }, { name: "§ " + chapter.num + " " + chapter.title }]} />
                <div className="mt-5">
                    <ChapterComponent chapter={chapter} />
                </div>
                <div className="mt-4">
                    <ChapterContentComponent content={chapter.text} />
                </div>
                <Footer />
            </div>
        </ConfirmServiceProvider>
    );
};

export default Chapter;
