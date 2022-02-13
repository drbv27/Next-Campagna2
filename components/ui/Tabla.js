import styled from "@emotion/styled";

export const Tabla = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: 1px solid;
  th,
  td {
    border: 1px solid;
    text-align: center;
  }
`;
export const contenedorTabla = styled.div`
  margin: 2rem 1rem 1rem 1rem;
  padding: 1rem;
  background-color: blue;
`;

export const Campo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1.5rem;
  }
  input {
    flex: 1;
    padding: 1rem;
  }
`;
export const Campo2 = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1rem;
  }
  input {
    flex: 1;
    padding: 0.5rem;
  }
`;

export const InputSubmit = styled.input`
  background-color: #1097d5;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export const Error = styled.p`
  background-color: #98bf11;
  padding: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0;
  border-radius: 15px;
`;
