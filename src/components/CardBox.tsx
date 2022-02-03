import React, { SetStateAction } from "react";
import styled from "styled-components";
import { pokeData } from "../types/types";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;

  .wrap {
    width: 200px;
    height: 200px;
    border: 2px black solid;
    background-color: ${(props) => props.theme.MainColor.snow};
    color: black;
    font-weight: bold;
    text-align: center;
    &.active {
      background-color: ${(props) => props.theme.MainColor.kobi};
    }
    &:nth-child(5n) {
      color: yellow;
    }
  }
`;
interface Props {
  name: string;
  id: number;
  setTarget: React.Dispatch<React.SetStateAction<HTMLDivElement | null | undefined>>;
}

const CardBox: React.FC<Props> = ({ id, name, setTarget }) => {
  return (
    <StyledCard ref={setTarget}>
      <div className="wrap">
        <p>{id}</p>
        <p>{name}</p>
        <p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`}
            alt="pokemon"
          />
        </p>
      </div>
    </StyledCard>
  );
};

export default CardBox;
