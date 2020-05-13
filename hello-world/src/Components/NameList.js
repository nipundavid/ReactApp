import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Batman", "SuperMan", "Wonder Woman"];

  //   return (
  //     <div>
  //       {names.map((name) => (
  //         <h2> {name}</h2>
  //       ))}
  //     </div>
  //   );

  //   const nameList = names.map((n) => <h2> {n} </h2>);
  //   return <div>{nameList}</div>;

  const PersonData = [
    {
      id: 1,
      name: "Bruce Wayne",
      alias: "Batman",
    },
    {
      id: 2,
      name: "Clark Kent",
      alias: "Superman",
    },
  ];

  //   const personList = PersonData.map((person) => (
  //     <h2>
  //       I am {person.name}, also known as {person.alias}
  //     </h2>
  //   ));

  // passed to different
  const personList = PersonData.map((person) => (
    <h2>
      <Person key={person.id} person={person}></Person>
    </h2>
  ));

  return <div>{personList}</div>;
}

export default NameList;
