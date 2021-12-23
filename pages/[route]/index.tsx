import { Container } from "components/common/Container";
import React from "react";

import ReactVac from "components/react-vac";

import { toCamelCase } from "utils/util";

const Index = ({ route }) => {
  const COMPONENTS = {
    reactVac: <ReactVac />,
  };

  return <Container>{COMPONENTS[route]}</Container>;
};

export const getServerSideProps = async ({ query }) => {
  return { props: { route: toCamelCase(query.route) } };
};

export default Index;
