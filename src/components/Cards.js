import React from "react";
import Card from "../components/Card";

const Cards = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {props.value.map((data) => {
            return (
              <>
                <Card id={data.id} title={data.title} subline={data.sublines} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
