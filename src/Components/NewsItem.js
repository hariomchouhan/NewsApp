import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, Source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: "1", left: "90%"}}>
                {Source}
              </span>
          <img
            src={
              !imageUrl
                ? "https://img.etimg.com/thumb/msid-100684682,width-1070,height-580,imgsize-88221,overlay-etmarkets/photo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "12rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title + "..."}
             
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By <strong>{author}</strong> on{" "}
                <strong>{new Date(date).toGMTString()}</strong>
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
