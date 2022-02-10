import React, { useState, MouseEventHandler, MouseEvent, ChangeEvent, FormEvent, FormEventHandler } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  h2 {
    font-family: "Bebas Neue", cursive;
  }
`;

const MainSection = () => {
  const [text, setText] = useState<string>("");
  const onClickH2 = (e: MouseEvent<HTMLHeadingElement>) => {
    alert(e.target);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(e.target);
  };

  return (
    <StyledBox>
      <div className="wrap">
        <h2 onClick={onClickH2}>title</h2>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} value={text} />
        </form>
      </div>
    </StyledBox>
  );
};

export default MainSection;
