import React from "react";

const Index = ({ query }) => {
  return <div></div>;
};

export const getServerSideProps = async ({ query }) => {
  return { props: { query } };
};

export default Index;
