import { useEffect, useState } from "react"
import styled from "styled-components"
import api from "../../hooks/axios.hook"
import Loader from "../loader/Loader"
import Burger from "../ui/Burger"
import colors from "../ui/colors"

type Article = {
  id: string
  title: string
}

type DataType = {
  _id: string
  titles: Article[]
}

const Articles: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    setIsLoading(true)
    api.get('/article/preview')
      .then(res => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Wrapper>
      <NavWrapper>
        <NavTop>
          <Burger open={isOpen} />
        </NavTop>
      </NavWrapper>
      <Content></Content>
      {isLoading && <Loader />}
    </Wrapper>
  )
}

export default Articles

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 59px);
`
const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 350px;
  left: 0;
  background-color: ${colors.grey};
`

const NavTop = styled.div``
const Content = styled.div``
