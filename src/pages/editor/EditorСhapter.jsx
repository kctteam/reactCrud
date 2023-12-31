import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getChapter, patchChapter, postChapter } from "../../utils/api/Chapter";
import { getPart } from "../../utils/api/Part";
import { Context } from "../../components/layout/MainLayout";
import HtmlEditorMy from "../../components/editor/HtmlEditorMy";

const EditorChapter = () => {
    const { breadcrumbs, current_item } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({ num: "", title: "", text: "" });

    useEffect(() => {
        breadcrumbs.setLinks([
            { link: `/part/${data.part?.id}`, name: "§ " + data.part?.num + " " + data.part?.title },
            { link: `/chapter/${data.id}`, name: "§ " + data.num + " " + data.title },
        ]);
    }, [data]);

    useEffect(() => {
        current_item.setItem({ type: "EditorСhapter", data: {} });
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

    const updateHtml = (data) => {
        setData({ ...data, text: data });
    };

    return (
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
                <label className="form-label">Текст</label>
                <div className="text-dark">
                    <HtmlEditorMy data={data.text} setData={updateHtml} />
                </div>
            </div>

            <div className="col-12 mt-4">
                <button className="btn btn-lg btn-link text-body text-decoration-none px-0 mx-0" onClick={save}>
                    {params.chapterId && params.chapterId !== "null" ? "Сохранить" : "Создать"}
                </button>
            </div>
        </div>
    );
};

export default EditorChapter;
