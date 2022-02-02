import React, { SetStateAction } from "react";
import styled from "styled-components";
import { pokeData } from "../types/types";

const StyledCard = styled.div`
  width: 500px;
  height: 300px;
  border: 2px ${(props) => props.theme.MainColor.kobi} solid;
  background-color: ${(props) => props.theme.MainColor.purple};
  color: ${(props) => props.theme.MainColor.snow};
  &.active {
    background-color: ${(props) => props.theme.MainColor.kobi};
  }
  &:nth-child(5n) {
    color: yellow;
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
      <div>
        <p>{id + 1}</p>
        <p>{name}</p>
      </div>
    </StyledCard>
  );
};

export default CardBox;
