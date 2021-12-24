import { Container } from "components/common/Container";
import React from "react";

import ReactVac from "components/react-vac";
import { Section, Wrap, Title, Contents } from "components/common/motion";

import { toCamelCase } from "utils/util";

const Index = ({ route }) => {
  const COMPONENTS = {
    reactVac: <ReactVac />,
  };

  return (
    <Container>
      <Section>
        <Wrap>
          <Title>
            <h1>React-Vac</h1>
          </Title>
          <Contents>{COMPONENTS[route]}</Contents>
        </Wrap>
      </Section>
    </Container>
  );
};

export const getServerSideProps = async ({ query }) => {
  return { props: { route: toCamelCase(query.route) } };
};

export default Index;
