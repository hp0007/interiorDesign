import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card" key={props.id}>
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
            <BsArrowRight style={{ float: "right" }} />
          </h5>
          <p className="card-text">{props.subline}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
