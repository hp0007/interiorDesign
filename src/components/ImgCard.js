import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ImgCard = (props) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
      <div className="card" key={props.id}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.subline}</p>
          <a href="#" className="link">
            View all <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
