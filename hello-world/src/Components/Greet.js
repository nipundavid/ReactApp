import React from "react";

export const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name}, movie name {props.movieName}{" "}
      </h1>
      {props.children}
    </div>
  );
};
// export default Greet;
