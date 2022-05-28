import { useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import breackpoints from '../ui/breackpoints'
import Burger from '../ui/Burger'
import colors from '../ui/colors'
import Body from './Body'
import Settings from './Settings'

/**
 *
 * currentTab - settings | content
 */

const Editor: React.FC = () => {
  const defaultArticle = {
    category: '',
    title: '',
    body: [],
  }

  const [isOpen, setIsOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState<string>('settings')
  const [article, setArticle] = useState<ArticleType>(defaultArticle)

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
            {currentTab === 'settings' && (
              <Settings article={article} setArticle={setArticle} />
            )}
            {currentTab === 'content' && (
              <Body article={article} setArticle={setArticle} />
            )}
          </TabContent>
        </Wrapper>
      </div>
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
