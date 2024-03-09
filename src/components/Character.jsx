import React from "react";

const Character = ({ Character }) => {
  return (
    <div>
      <img src={Character.image} alt={Character.name} />
      <h1>{Character.name}</h1>
      <p>{Character.species}</p>
      <p>{Character.gender}</p>
      <p>{Character.origin.name}</p>
    </div>
  );
};

export default Character;
