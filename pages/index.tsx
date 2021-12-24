import { useState } from "react";
import type { NextPage } from "next";

import { Container } from "components/common/Container";
import { Article, Title } from "components/common/motion";

const Home: NextPage = () => {
  return (
    <Container>
      <Article>
        <Title>
          <h1>Hi</h1>
        </Title>
      </Article>
    </Container>
  );
};

export default Home;
