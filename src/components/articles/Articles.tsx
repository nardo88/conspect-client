import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ArticleContext } from '../../context/ArticleContext'
import { useAuth } from '../../hooks/auth.hook'
import api from '../../hooks/axios.hook'
import Loader from '../loader/Loader'
import Burger from '../ui/Burger'
import colors from '../ui/colors'
import ArticleBody from './ArticleBody'
import Category from './Category'
import Catalog from '../catalog/Catalog'

type Article = {
  id: string
  title: string
}

type DataType = {
  _id: string
  titles: Article[]
}

const Articles: React.FC = () => {
  const { id } = useParams()
  const { logout } = useAuth() as any
  const ref = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [article, setArticle] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    api
      .get('/article/preview')
      .then((res) => {
        setData(res.data)
      })
      .catch((e) => {
        if (e?.response?.data?.message === 'Token expired') {
          logout()
        }
      })
      .finally(() => setIsLoading(false))
  }, [logout])

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      api
        .get(`/article/${id}`)
        .then((response) => setArticle(response.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }
  }, [id])

  useEffect(() => {
    const clickHandler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', clickHandler)

    return () => window.removeEventListener('click', clickHandler)
  }, [])

  return (
    <ArticleContext.Provider value={{ setIsOpen }}>
      <Wrapper>
        <NavWrapper open={isOpen} ref={ref}>
          <NavTop>
            <Burger
              open={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              color={colors.lightGrey}
            />
          </NavTop>
          <NavListWrapper open={isOpen}>
            <ul>
              {data.map((item: DataType) => (
                <Category
                  key={item._id}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                  {...item}
                />
              ))}
            </ul>
          </NavListWrapper>
        </NavWrapper>
        <Content>
          {id && article ? (
            <ArticleBody article={article} />
          ) : (
            <Catalog id={id} />
          )}
        </Content>
        {isLoading && <Loader />}
      </Wrapper>
    </ArticleContext.Provider>
  )
}

export default Articles

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 59px);
  padding-left: 40px;
`
const NavWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  width: 320px;
  transition: 0.3s;
  transform: translateX(${({ open }) => (open ? '0' : '-285px')});
  left: 0;
  background-color: ${colors.lightBrown};
`

const NavTop = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-end;
`
const NavListWrapper = styled.div<{ open: boolean }>`
  border-top: 1px solid ${colors.grey};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  overflow-y: auto;
  height: calc(100vh - 90px);

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${colors.grey};
  }

  &::-webkit-scrollbar {
    width: 5px;
    background: ${colors.grey};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.lightBrown};
  }
`
const Content = styled.div`
  height: calc(100vh - 59px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${colors.grey};
  }

  &::-webkit-scrollbar {
    width: 5px;
    background: ${colors.grey};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.lightBrown};
  }
`
