import styled from 'styled-components'
import breackpoints from './breackpoints'
import colors from './colors'

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
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.3);
    padding: 30px;
`

export const Text = styled.p<{color?: string, styles?: string}>`
  font-size: 16px;
  color: ${({color}) => color || colors.brown};
  ${({styles}) => styles}
`
