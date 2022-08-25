import styled from 'styled-components';

function generateBars() {
  const amountBars = [...Array(12).keys()]
  let styleSpan: any = []

  amountBars.forEach(item => {
    styleSpan.push( 
      `
      div:nth-child(${item+1}) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        div {
          background-color: #EFF3FE;
          width: 2.1px;
          height: 91px;
          border-radius: 5px;
          display: flex;
          justify-content: flex-end;
          
          span{
            background-color: #5236FF;
            display: block;
            width: 3.5px;
            height: 0px;
            max-height: ${ Math.ceil( Math.random() * 100 )}px;
            border-radius: 5px;
            
            animation: animationHeight 1s linear forwards;
          }
        }
        small {
          color: #BACCFD;
          font-size: 10px;
          margin-top: 8px;
        }
      }
      `
    )
  })
  return styleSpan.join("")
}


export const Container = styled.div`
  margin-top: 28px;
  opacity: 0;
  animation: showOnPage 2s linear forwards;
  /* width: 162.9px;
  height: 105.09px; */
  
  ${generateBars()}
  

  @keyframes animationHeight{
    from {
      height: 0px;
    }
    to {
      height: 91px;
    }
  }
  
`
