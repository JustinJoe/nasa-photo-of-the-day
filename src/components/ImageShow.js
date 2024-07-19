const ImageShow = ({data}) => {
    return (
        <div className="card">
        <div className="card-image">
            <figure className="image">
            <img
                src={data.url}
                alt={data.title}
            />
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
            <p>Title: {data.title}</p>
            <p>{data.explanation}</p> 
            <br />
            <time dateTime={data.date}>{data.date}</time>
            <br />
            {data.copyright && <small>Copyright: {data.copyright}</small>}
            </div>
        </div>
        </div>
    )
}

export default ImageShow;