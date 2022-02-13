import styled from "@emotion/styled";

export const Tabla = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: 1px solid #e1e1e1;
  th,
  td {
    border: 1px solid #e1e1e1;
    text-align: center;
  }
`;
export const contenedorTabla = styled.div`
  margin: 2rem 1rem 1rem 1rem;
  padding: 1rem;
  background-color: blue;
`;

export const Detalle = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: #98bf11;
  :hover {
    cursor: pointer;
  }
`;
