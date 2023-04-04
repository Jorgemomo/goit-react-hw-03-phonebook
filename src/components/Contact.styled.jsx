import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 12px;
`;

export const Button = styled.button`
  margin-left: 20px;
  cursor: pointer;
  font-size: 10px;
  border-radius: 5px;
  border: 1px solid black;

  &:hover {
    background-color: red;
    color: white;
  }
`;
