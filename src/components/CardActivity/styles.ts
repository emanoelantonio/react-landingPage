import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 154px;
  height: 77px;
  top: 110px;
  left: 70px;
  border-radius: 12px;
  padding: 11px;
  text-align: left;
  overflow: hidden;

  background: linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%);
  color: #FFF;

  small {
    font-size: 15px;
  }

  strong {
    display: block;
    font-size: 25px;
    font-weight: 400;
  }

  i {
    position: absolute;
    width: 154px;
    height: 77px;
    

    border-radius: 50px;

    &.circle-1 {
      left: 93.17px;
      top: -16.17px;
      background: rgba(255, 255, 255, 0.3);
    }

    &.circle-3 {
      width: 154px;
      height: 77px;
      left: 81px;
      top: 64px;
      bottom: -50px;
      border: none;
      background: #DAAAFF;
      transform: rotate(45deg);
    }
    
    &.circle-2 {
      left: 47px;
      top: -54px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(-72deg);
    }

    
  }
`;
