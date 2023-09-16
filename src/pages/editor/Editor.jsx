import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChapter, patchChapter } from "../../utils/api/Chapter";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Breadcrumbs from "../../components/header/Breadcrumbs";

const Editor = () => {
    const params = useParams();

    const [data, setData] = useState({ num: null, title: null, text: null });

    useEffect(() => {
        getChapter(params.chapterId)
            .then((res) => {
                setData(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const save = () => {
        patchChapter(params.chapterId, data);
    };

    return (
        <div className="container py-5">
            <Header />
            <Breadcrumbs links={[{ link: `/part/${data.part?.id}`, name: "§ " + data.part?.num + " " + data.part?.title }, { link: `/chapter/${data.id}`, name: "§ " + data.num + " " + data.title }]} />
            <div className="row mt-5">
                <div className="col-12 mb-3">
                    <div>
                        <label>Номер</label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.num}
                            onChange={(event) => {
                                setData({ ...data, num: event.target.value });
                            }}
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <div>
                        <label>Заголовок</label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.title}
                            onChange={(event) => {
                                setData({ ...data, title: event.target.value });
                            }}
                        />
                    </div>
                </div>
                <div className="col-12 text-dark">
                    <CKEditor
                        className="rounded-4"
                        editor={ClassicEditor}
                        data={data.text}
                        onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            //console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                            setData({ ...data, text: editor.getData() });
                            //console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            //console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                            //console.log("Focus.", editor);
                        }}
                    />
                </div>
                <div className="col-12 mt-4">
                    <button className="btn btn-primary" onClick={save}>
                        Сохранить
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Editor;
