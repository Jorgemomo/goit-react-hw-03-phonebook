import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 7px;
  border-radius: 5px;
  border: 1px solid white;

  &:hover {
    border-radius: 5px;
    border: 2px solid blue;
  }
`;
