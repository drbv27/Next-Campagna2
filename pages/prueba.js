import React from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Principal = styled.div`
  margin-left: 200px;
`;

const Prueba = () => {
  return (
    <div>
      <Layout>
        <Principal>
          <h1>Explorar......................</h1>
        </Principal>
      </Layout>
    </div>
  );
};

export default Prueba;
