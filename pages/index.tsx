import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <span>여기는</span>
      <span>Home.tsx</span>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color__bgColor);
  color: var(--color__titleColor);
`;
