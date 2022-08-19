import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50%;
  }

  h1 {
    color: #1E255E;
    font-size: 56px;
    font-weight: bold;
  }

  h6 {
    color: #1E255EB2;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
  }
`;

export const ColumnImage = styled.div`
  text-align: right;
  position: relative;
  img {
    margin-left: 108px;
  }
`;