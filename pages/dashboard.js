import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import Image from "next/image";
import LineChart from "../components/layout/LineChart";

const Principal = styled.div`
  margin-left: 200px;
  text-align: center;
  background-color: #e1e1e1;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Principal>
          <h1>Dashboard</h1>
          <LineChart/>
        </Principal>
      </Layout>
    </div>
  );
}
