import React from "react";

const information = (props) => {
  return (
    <div>
      <h2>{props.fullName}</h2>
      <h2>{props.bio}</h2>
      <h2>{props.profession}</h2>
      <img src={props.imgSrc} alt="profile" width="400px" />
    </div>
  );
};

export default information;
