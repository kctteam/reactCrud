import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getPart, patchPart, postPart } from "../../utils/api/Part";
import { Context } from "../../components/layout/MainLayout";

const EditorPart = () => {
    const { breadcrumbs, current_item } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({ num: "", title: "", scribe: "" });

    useEffect(() => {
        breadcrumbs.setLinks([{ name: "§ " + data.num + " " + data.title }]);
    }, [data]);

    useEffect(() => {
        current_item.setItem({ type: "EditorPart", data: {} });
        if (params.partId !== "null") {
            getPart(params.partId)
                .then((res) => {
                    setData(res.data);
                })
                .catch((e) => {});
        } else {
            setData({ ...data, num: "000", title: "Новый раздел" });
        }
    }, []);

    const save = () => {
        if (params.partId !== "null") {
            patchPart(params.partId, data);
            return navigate("/part/" + params.partId);
        } else {
            postPart(data)
                .then((res) => {
                    setData(res.data);
                    return navigate("/part/" + res.data.id);
                })
                .catch((e) => {});
        }
    };

    return (
        <div className="row mt-5">
            <h3 className="mb-5">Раздел</h3>
            <div className="col-12 mb-3">
                <div>
                    <label className="form-label">Номер</label>
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
            <div className="col-12 mb-3">
                <div>
                    <label className="form-label">Заголовок</label>
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
                    <label className="form-label">Описание</label>
                    <textarea
                        type="text"
                        className="form-control"
                        value={data.scribe}
                        onChange={(event) => {
                            setData({ ...data, scribe: event.target.value });
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="col-12 mt-4">
                <button className="btn btn-lg btn-link text-body text-decoration-none px-0 mx-0" onClick={save}>
                    {params.partId !== "null" ? "Сохранить" : "Создать"}
                </button>
            </div>
        </div>
    );
};

export default EditorPart;
