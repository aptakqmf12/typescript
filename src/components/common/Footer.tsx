import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.GrayScale.l1};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrap">
        <div>footer</div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
