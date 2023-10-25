import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const HtmlEditorMy = ({data, setData}) => {
    return (
        <CKEditor
            className="rounded-4"
            editor={ClassicEditor}
            data={data}
            onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                //console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
                setData(editor.getData());
                //console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
                //console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
                //console.log("Focus.", editor);
            }}
        />
    );
};
export default HtmlEditorMy;