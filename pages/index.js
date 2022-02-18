import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import Image from "next/image";

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
          <Image
            src="/static/img/Bienvenida.png"
            alt="welcome"
            width={500}
            height={450}
          />
        </Principal>
      </Layout>
    </div>
  );
}
