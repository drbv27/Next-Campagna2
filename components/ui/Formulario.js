import styled from "@emotion/styled";

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
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
