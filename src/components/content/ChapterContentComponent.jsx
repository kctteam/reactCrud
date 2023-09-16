const ChapterContentComponent = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default ChapterContentComponent;