import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import styled from "styled-components"
import colors from "../ui/colors"
import { Link } from "react-router-dom"
import breackpoints from "../ui/breackpoints"

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { logout } = useContext(AuthContext)
  const ref = useRef<HTMLDivElement>(null)

  const missClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("click", missClick)
    return () => {
      window.removeEventListener("click", missClick)
    }
  }, [])

  return (
    <Wrapper ref={ref}>
      <IconWrapper onClick={() => setIsOpen(!isOpen)}>
        <img src="/assets/img/profile.svg" alt="" />
      </IconWrapper>
      {isOpen && (
        <Menu>
          <ul>
            <li onClick={() => setIsOpen(false)}>
              <Link to={"/profile"}>Профиль</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link to={"/articles"}>Управление конспектами</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link to={"/roles"}>Роли</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link to={"/editor"}>Создать конспект</Link>
            </li>
            <li onClick={() => logout()}>
              <a href="#!">Выйти</a>
            </li>
          </ul>
        </Menu>
      )}
    </Wrapper>
  )
}

export default ProfileMenu

const IconWrapper = styled.div`
  width: 40px;
  cursor: pointer;
`

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  align-items: center;
`

const Menu = styled.div`
  background-color: ${colors.lightBrown};
  position: absolute;
  top: 100%;
  right: -30px;
  width: 300px;
  z-index: 1000;

  ${breackpoints.md}{
      right: -20px;
  }

  & > ul {
    li {
      & > a {
        font-size: 18px;
        color: ${colors.white};
        padding: 10px 20px;
        border-bottom: 1px solid ${colors.grey};
        display: flex;
      }

      &:hover {
        background-color: ${colors.grey};
        color: ${colors.lightBrown};
      }
    }
  }
`
