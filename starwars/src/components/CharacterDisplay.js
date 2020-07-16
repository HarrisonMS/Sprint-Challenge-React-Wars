import React from "react";

const CharacterDisplay = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>weight: {props.mass}</p>
    </>
  );
};

export default CharacterDisplay;
