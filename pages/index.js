import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Principal = styled.div`
  margin-left: 200px;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Principal>
          <h1>Inicio......................</h1>
        </Principal>
      </Layout>
    </div>
  );
}
