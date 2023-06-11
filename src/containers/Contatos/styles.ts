import { styled } from "styled-components";


export const ContainerContatos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 670px;
  width: 100%;
  margin: 10px 5px 0px 5px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.12);
    height: 30px;

    li {
      color: #5f6368;
      font-weight: 500;
      font-size: 14px;
      margin: 0px 8px;
    }
  }


`

export const HeaderContatos = styled.div`
  max-width: 670px;
  width: 100%;
  margin: 10px 5px 0px 5px;
`

export const QuantidadeContatos = styled.div`
    text-transform: uppercase;
    color: #5f6368;
    font-size: 11px;
    padding: 14px 0 14px 14px;

    span {
      margin-left: 5px;
    }
`


