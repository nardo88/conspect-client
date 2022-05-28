import styled from 'styled-components'
import breackpoints from './breackpoints'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  ${breackpoints.md} {
    padding: 0 20px;
  }
`

export const H1 = styled.h1``

export const RemoveBtn = styled.button`
    width: 30px;
    height: 30px;
    background-image: url('/assets/img/remove.svg');
    background-color: transparent;
    outline: none;
    border: none;

    ${breackpoints.md}{
        width: 20px;
        height: 20px;
    }

`

