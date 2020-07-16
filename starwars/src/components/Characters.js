import React from "react";
import CharacterDisplay from "./CharacterDisplay";
import styled from "styled-components";

const Characters = (props) => {
  const { chars } = props;

  const CharWrapper = styled.div`
    transition: transform 0.2s ease-in;
    border-radius: 20px;
    background: "#166191";

    width: 40%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    cursor: pointer;
    box-shadow: 0px 6px 10px -2px black;

    &:hover {
      transform: translateY(-5px) scale(1.2);
      background: #5a4e5e;
    }
  `;
  const CharContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  `;

  // const CharacterDisplay = styled.div`
  //   color: black;
  //   border: 1px solid red;
  // `;

  return (
    <CharContainer className="charContainer">
      {chars.map((character) => {
        return (
          <CharWrapper className="cardWrapper">
            <CharacterDisplay
              className="charCard"
              key={character.birth_year}
              name={character.name}
              gender={character.gender}
              height={character.height}
              mass={character.mass}
            />
          </CharWrapper>
        );
      })}
    </CharContainer>
  );
};

export default Characters;
