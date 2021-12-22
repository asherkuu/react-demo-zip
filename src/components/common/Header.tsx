import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header = ({ theme, handleTheme }) => {
  const MENU_LIST = [{ id: 0, name: "React-vac", href: "/react-vac" }];

  return (
    <Container>
      <ul>
        {MENU_LIST.map((item) => {
          const { id, name, href } = item;
          return (
            <Link key={id} href={href}>
              <a>{name}</a>
            </Link>
          );
        })}
      </ul>
      <button onClick={handleTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>
      <span>Header.tsx</span>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
`;
