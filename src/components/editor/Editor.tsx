import { useState } from "react"
import styled from "styled-components"
import { ArticleType } from "../../types/articles"
import colors from "../ui/colors"
import Settings from "./Settings"

/**
 *
 * currentTab - settings | content
 */

const Editor: React.FC = () => {
  const defaultArticle = {
    category: "",
    theme: "",
    title: "",
    body: [],
  }

  const [currentTab, setCurrentTab] = useState<string>("settings")
  const [acticle, setArticle] = useState<ArticleType>(defaultArticle)
  return (
    <div>
      <div className="container">
        <Wrapper className="df">
          <div>
            <ul>
              <TabItem
                active={currentTab === "settings"}
                onClick={() => setCurrentTab("settings")}
              >
                Настройки
              </TabItem>
              <TabItem
                active={currentTab === "content"}
                onClick={() => setCurrentTab("content")}
              >
                Содержимое
              </TabItem>
            </ul>
          </div>
          <div>
              {currentTab === 'settings' && <Settings value={acticle} setValue={setArticle} />}
          </div>
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
