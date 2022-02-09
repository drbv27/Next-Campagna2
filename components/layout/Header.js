import React from "react";
import Image from "next/image";
import styled from "@emotion/styled/";
import Link from "next/link";
import PerfilPic from "../../img/watermark.png";

const HeadContainer = styled.div`
  /*   display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  height: 100px;
  background-color: rgb(255, 255, 255);
  margin-left: 200px;
  /* z-index: -1; */
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 40px;
  h2 {
    color: rgb(0, 0, 0);
    span {
      color: rgb(9, 112, 72);
    }
  }
  p {
    color: rgb(0, 0, 0);
  }
`;
const Profile = styled.div`
  margin-right: 1rem;
  /*  position: absolute;
  right: 20px; */
`;

const Imagen = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Admin = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <HeadContainer>
      <HeadWrapper>
        <Title>
          <h2>
            Hola, <span>Diego</span>
          </h2>
          <div>
            <p>Bienvenido al Panel.</p>
          </div>
        </Title>
        {/*         <Admin>
          <div>
            <button type="button">Cerrar Sesion</button>
            <Link href="/">Login</Link>
          </div>
        </Admin> */}
        <Profile>
          <Image
            src="/img/watermark.png"
            alt="profile"
            width={50}
            height={50}
          />
        </Profile>
      </HeadWrapper>
    </HeadContainer>
  );
};

export default Header;
