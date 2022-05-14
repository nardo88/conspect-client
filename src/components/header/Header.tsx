import styled from 'styled-components'
import { Container } from '../ui/components'
import { Link } from 'react-router-dom'
import colors from '../ui/colors'

const Header = () => {

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContainer>
                    <Logo>
                        <Link to="/">
                            <img src="/assets/img/logoMobile.svg" alt="" />
                        </Link>
                    </Logo>

                    <Nav>
                        <ul>
                            <li>
                                <Link to="signin">Войти</Link>
                            </li>
                            <li>
                                <Link to="signup">Зарегистрироваться</Link>
                            </li>
                        </ul>
                    </Nav>
                </HeaderContainer>
            </Container>
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.header`
    background-color: ${colors.brown};
    
`
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.div``

const Nav = styled.nav`
    ul{
        display: flex;
        align-items: center;

        li{
            margin-left: 15px;
            color: ${colors.white};
            position: relative;

            &:after{
                content: '';
                display: block;
                height: 5px;
                background-color: ${colors.white};
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0%;
                transition: width .1s;
            }

            &:hover {
                &:after{

                    width: 100%;
                }

            }

            a{
                display: inline-block;
                min-height: 100%;
            padding: 20px 0;

            }
        }
    }
`