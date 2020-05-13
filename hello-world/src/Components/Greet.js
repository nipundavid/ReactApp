import React from "react";

export const Greet = (props) => {
  console.log(props);
  const { name, movieName } = props;
  return (
    <div>
      <h1>
        Hello {name}, movie name {movieName}{" "}
      </h1>{" "}
      {props.children}{" "}
    </div>
  );
};
// export default Greet;
