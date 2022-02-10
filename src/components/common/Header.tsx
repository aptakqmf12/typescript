import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 1rem 0;
  border-bottom: 1px rgba(0, 0, 0, 0.9) solid;

  &.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);

    z-index: 1;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
    }
    nav {
      ul {
        display: flex;
        li {
          margin-left: 1rem;
        }
      }
    }
  }
`;

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollEvent = () => {
    if (document.documentElement.scrollTop > 0) {
      headerRef.current?.classList.add("fixed");
    } else {
      headerRef.current?.classList.remove("fixed");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <StyledHeader ref={headerRef}>
      <div className="wrap">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/todo">TodoList</Link>
            </li>
            <li>
              <Link to="/card">포켓몬도감 </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
