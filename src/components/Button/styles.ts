import styled from 'styled-components';

export const Container = styled.button`
  width: 130px;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 25px;
  border-radius: 4px;
  border: 1px solid #17A4D0;
  color: #17A4D0;
  box-shadow: 0px 0px 17px -8px transparent;
  transition: all 0.25s ease-out;

  &:hover {
    color: #FFF;
    background-color: #17A4D0;
    box-shadow: 0px 0px 17px -5px #17A4D0;
  }
`;
