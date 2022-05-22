import { useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
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

  const [currentTab, setCurrentTab] = useState<string>('settings')
  const [article, setArticle] = useState<ArticleType>(defaultArticle)

  return (
    <div>
      <div className="container">
        <Wrapper className="df">
          <TabTop>
            <ul>
              <TabItem
                active={currentTab === 'settings'}
                onClick={() => setCurrentTab('settings')}
              >
                Настройки
              </TabItem>
              <TabItem
                active={currentTab === 'content'}
                onClick={() => setCurrentTab('content')}
              >
                Содержимое
              </TabItem>
            </ul>
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
`

const TabItem = styled.li<{ active?: boolean }>`
  padding: 10px 20px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
  background-color: ${({ active }) => (active ? colors.grey : colors.white)};
`

const TabTop = styled.div`
  flex-shrink: 0;
`

const TabContent = styled.div`
  margin-left: 20px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  flex-grow: 1;
  padding: 30px;
  min-height: 60vh;
`
