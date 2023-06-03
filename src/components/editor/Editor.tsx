import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'
import api from '../../hooks/axios.hook'
import { ArticleType } from '../../types/articles'
import Loader from '../loader/Loader'
import breackpoints from '../ui/breackpoints'
import Burger from '../ui/Burger'
import colors from '../ui/colors'
import Body from './Body'
import Settings from './Settings'
import { useNavigate } from 'react-router-dom'

const defaultArticle = {
  category: '',
  title: '',
  body: [],
  description: '',
}

const Editor: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState<string>('settings')
  const [article, setArticle] = useState<ArticleType>(defaultArticle)
  console.log('article: ', article)
  const [isLoading, setIsLoading] = useState(false)
  const { userId } = useContext(AuthContext)

  useEffect(() => {
    if (params.id) {
      setIsLoading(true)
      api
        .get(`/article/${params.id}`)
        .then(({ data }) => {
          setArticle(data)
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }
  }, [params])

  const createArticle = async () => {
    if (!article.title || !article.category) {
      return alert('Заполните все поля!')
    }

    if (!article.body.length) {
      return alert('Пустую стратью сохранить нельзя!')
    }

    setIsLoading(true)
    await api
      .post('/article', {
        userId,
        ...article,
      })
      .then((res) => {
        setIsLoading(false)
        if (res.status === 200) {
          navigate('/articles')
        }
      })
      .catch((error: Error) => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const saveArticle = async () => {
    if (!article.title || !article.category) {
      return alert('Заполните все поля!')
    }

    if (!article.body.length) {
      return alert('Пустую стратью сохранить нельзя!')
    }

    setIsLoading(true)
    await api
      .put(`/article/${article._id}`, {
        ...article,
      })
      .then((res) => {
        setIsLoading(false)
        if (res.status === 200) {
          alert('Статья успешно сохранена')
        }
      })
      .catch((error: Error) => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div>
      <div className="container">
        <Wrapper className="df">
          <TabTop>
            <BurgerWrapper>
              <Burger
                open={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                color={colors.brown}
              />
            </BurgerWrapper>
            <TabList open={isOpen}>
              <TabItem
                active={currentTab === 'settings'}
                onClick={() => {
                  setCurrentTab('settings')
                  setIsOpen(false)
                }}
              >
                Настройки
              </TabItem>
              <TabItem
                active={currentTab === 'content'}
                onClick={() => {
                  setCurrentTab('content')
                  setIsOpen(false)
                }}
              >
                Содержимое
              </TabItem>
            </TabList>
          </TabTop>
          <TabContent>
            <TabTop>
              <div className="top df jcfe">
                <SaveBtn onClick={article?._id ? saveArticle : createArticle} />
              </div>
            </TabTop>
            {currentTab === 'settings' && (
              <Settings article={article} setArticle={setArticle} />
            )}
            {currentTab === 'content' && (
              <Body article={article} setArticle={setArticle} />
            )}
          </TabContent>
        </Wrapper>
      </div>
      {isLoading && <Loader />}
    </div>
  )
}

export default Editor

const Wrapper = styled.div`
  padding: 20px 0;

  ${breackpoints.md} {
    flex-direction: column;
  }
`

const TabList = styled.ul<{ open: boolean }>`
  position: static;
  transform: none;
  list-style-type: none;
  ${breackpoints.md} {
    position: absolute;
    left: 0;
    top: 115%;
    z-index: 200;
    transform: translateX(${({ open }) => (open ? '0' : '-200%')});
    transition: 0.2s;
  }
`

const TabItem = styled.li<{ active?: boolean }>`
  padding: 10px 20px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
  background-color: ${({ active }) => (active ? colors.grey : colors.white)};
`

const TabTop = styled.div`
  flex-shrink: 0;
  position: relative;

  ${breackpoints.md} {
    margin-bottom: 25px;
  }
`

const TabContent = styled.div`
  margin-left: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  flex-grow: 1;
  padding: 30px;
  min-height: 60vh;

  ${breackpoints.md} {
    margin-left: 0;
    padding: 10px;
  }
`

const BurgerWrapper = styled.div`
  display: none;

  ${breackpoints.md} {
    display: block;
  }
`
const SaveBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-image: url('/assets/img/save.svg');
  background-color: transparent;
  background-size: cover;
  outline: none;

  ${breackpoints.md} {
    width: 20px;
    height: 20px;
  }
`
