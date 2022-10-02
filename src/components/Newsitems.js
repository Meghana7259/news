import React from "react";

// export class Newsitems extends Component 
const Newsitems = (props) =>{
  // render() {
    let { title, imageUrl, description, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",
        justifyContent:"flex-end",
        position:"obsolute",
        right:"0"}}>
          <span className=" badge rounded-pill bg-secondary" >
            {source}
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://c.ndtvimg.com/2022-09/cj3eokm4_russia-ukraine-war_625x300_13_September_22.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "unknow"} on{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a href={newsUrl} target="__blank" className="btn btn-sm btn-dark">
              get more details
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default Newsitems;
