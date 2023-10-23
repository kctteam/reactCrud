import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChapter, patchChapter, postChapter } from "../../utils/api/Chapter";
import { getPart } from "../../utils/api/Part";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Breadcrumbs from "../../components/header/Breadcrumbs";

const EditorСhapter = () => {
    const params = useParams();
    const navigate = useNavigate();

    console.log(params);

    const [data, setData] = useState({ num: "", title: "", text: "" });

    useEffect(() => {
        if (params.chapterId && params.chapterId !== "null") {
            getChapter(params.chapterId)
                .then((res) => {
                    setData(res.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        } else if (params.partId && params.partId) {
            getPart(params.partId)
                .then((res) => {
                    setData({ ...data, part_id: res.data.id, part: res.data, num: "000", title: "Новая глава" });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, []);

    const save = () => {
        if (params.chapterId && params.chapterId !== "null") {
            patchChapter(params.chapterId, data);
            return navigate("/chapter/" + params.chapterId);
        } else {
            postChapter(data)
                .then((res) => {
                    setData(res.data);
                    return navigate("/chapter/" + res.data.id);
                })
                .catch((e) => {});
        }
    };

    return (
        <div className="container py-5">
            <Header />
            <Breadcrumbs
                links={[
                    { link: `/part/${data.part?.id}`, name: "§ " + data.part?.num + " " + data.part?.title },
                    { link: `/chapter/${data.id}`, name: "§ " + data.num + " " + data.title },
                ]}
            />

            <div className="row mt-5">
                <h3 className="mb-5">Глава</h3>
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
                <div className="col-12">
                    <div>
                        <label className="form-label">Текст</label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={data.text}
                            onChange={(event) => {
                                setData({ ...data, text: event.target.value });
                            }}
                        ></textarea>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <button className="btn btn-primary" onClick={save}>
                        {params.chapterId && params.chapterId !== "null" ? "Сохранить" : "Создать"}
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EditorСhapter;
