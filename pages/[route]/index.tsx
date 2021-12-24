import { Container } from "components/common/Container";
import React from "react";

import ReactVac from "components/react-vac";
import { Section, Wrap, Title, Contents } from "components/common/motion";

const Index = ({ query, route }) => {
  const COMPONENTS = {
    reactVac: <ReactVac />,
  };
  return (
    <Container>
      <Section>
        <Wrap>
          <Title>
            <h1>{route.toPascalWithDash()}</h1>
          </Title>
          <Contents>{COMPONENTS[route.toCamelCase()]}</Contents>
        </Wrap>
      </Section>
    </Container>
  );
};

export const getServerSideProps = async ({ query }) => {
  return { props: { query, route: query.route } };
};

export default Index;
