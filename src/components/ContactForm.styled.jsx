import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 250px;
  border-radius: 5px;
  padding: 15px;
  border-style: dotted;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;
  border-radius: 5px;
  border: 1px solid white;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
