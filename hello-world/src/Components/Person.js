import React from "react";

function Person(prop) {
  //Deconstructing
  const { person } = prop;
  return (
    <div>
      {" "}
      <h2>
        I am {person.name}, also known as {person.alias}
      </h2>
    </div>
  );
}

export default Person;
