import styled from 'styled-components'
import breackpoints from './breackpoints'

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    
    ${breackpoints.md}{
        padding: 0 20px;

    }
`