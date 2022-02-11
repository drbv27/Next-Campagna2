import React, { useContext } from "react";
import { FirebaseContext } from "../../firebase";
import styled from "@emotion/styled/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCog,
  faHeart,
  faRocket,
  faSignOutAlt,
  faTachometerAlt,
  faMapMarked,
  faUserEdit,
  faSearch,
  faChartArea,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: #fff;
  box-shadow: 3px 0px 6px 0px rgba(246, 246, 246, 0.75);
`;
const Logo = styled.div`
  padding: 10px;
  padding-left: 20px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  padding: 10px;
  z-index: 1;
  ul {
    margin-top: 20px;
    text-align: left;
    padding-left: 10px;
    display: flex;
    gap: 25px;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;
    li {
      list-style: none;
      font-size: 20px;
      text-decoration: none;
      opacity: 0.6;
      &:active {
        color: #000;
      }
      a:hover {
        color: #98bf11;
        font-size: 22px;
        transition: 0.2s;
      }
    }
  }
`;

const LeftNavbar = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  return (
    <NavContainer>
      <Logo>
        <h2>MiCampaña</h2>
      </Logo>
      <Wrapper>
        {usuario ? (
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faChartArea}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a href="/">Dashboard</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a href="/prueba">Explorar</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faUserEdit}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a href="/registro">Registar</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMapMarked}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a href="#">Mapa</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCog}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a href="#"> Configuracion</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a onClick={() => firebase.cerrarSesion()}>Salir</a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
              <a href="/login">Ingresar</a>
            </li>
          </ul>
        )}
      </Wrapper>
    </NavContainer>
  );
};

export default LeftNavbar;
