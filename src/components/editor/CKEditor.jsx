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
</div>;
