import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  left: 30px;
  padding: 20px;
  opacity: 0;

  animation: showOnPage 0.5s linear forwards;
  bottom: -50px;

  border-radius: 16.8px;
  background-color: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  @keyframes showOnPage{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;