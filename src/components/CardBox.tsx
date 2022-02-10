import React from "react";
import styled from "styled-components";
import { pokeData } from "../types/types";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(33% - 9px);
  height: 300px;
  margin: 5px;
  border: 2px black solid;
  background-color: ${(props) => props.theme.MainColor.snow};
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;

  @media ${(props) => props.theme.Device.tablet} {
    width: calc(49% - 9px);
  }
  @media ${(props) => props.theme.Device.mobile} {
    width: calc(100% - 9px);
  }

  &:hover {
    background-color: ${(props) => props.theme.MainColor.kobi};
    transform: translate(0.1rem, 0.1rem);
  }
  &:nth-child(10n) {
    color: #d60e43;
  }
`;

interface Props extends pokeData {
  id: number;
  setTarget: React.Dispatch<React.SetStateAction<HTMLDivElement | null | undefined>>;
}

const CardBox: React.FC<Props> = ({ id, name, setTarget }) => {
  return (
    <StyledCard ref={setTarget}>
      <p>{id}</p>
      <p>{name}</p>
      <p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`}
          alt="pokemon"
        />
      </p>
    </StyledCard>
  );
};

export default CardBox;
