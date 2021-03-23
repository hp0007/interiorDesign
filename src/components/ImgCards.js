import React from "react";
import ImgCard from "./ImgCard";

const ImgCards = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.value2.map((data) => {
          return (
            <>
              <ImgCard
                id={data.id}
                title={data.title}
                subline={data.subtitle}
                img={data.img}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ImgCards;
