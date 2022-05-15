import styled from 'styled-components'
import { Container } from '../ui/components'
import { Link } from 'react-router-dom'
import colors from '../ui/colors'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ProfileMenu from '../profile/ProfileMenu'

const Header = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <HeaderWrapper>
            <Container>
                <HeaderContainer>
                    <Logo>
                        <Link to="/">
                            <img src="/assets/img/logoMobile.svg" alt="" />
                        </Link>
                    </Logo>
                    {isAuthenticated ?

                        <ProfileMenu />
                        :
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
                    }

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
    height: 59px;

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
                background-color: ${colors.green};
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0%;
            }

            &:hover {
                color: ${colors.green};
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