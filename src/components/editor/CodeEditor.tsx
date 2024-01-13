import { FC } from 'react'
import styled from 'styled-components'
import { variantsTranslate } from '../ui/settings'
import { RemoveBtn } from '../ui/components'
import { ArticleEnum } from '../../types/articles'
import colors from '../ui/colors'
import Editor from '@monaco-editor/react'

interface CodeEditorProps {
  type?: ArticleEnum
  value: string
  label?: string
  onChange: (value: string) => void
  remove?: () => void
}

export const CodeEditor: FC<CodeEditorProps> = (props) => {
  const { type, label, remove, value, onChange } = props

  return (
    <Wrapper>
      {type && <span>{variantsTranslate[type]}</span>}
      {label && <span>{label}</span>}
      <ControlWrapper>
        {remove && <RemoveBtn onClick={remove} title="Удалить" />}
      </ControlWrapper>
      <Editor
        height="500px"
        defaultLanguage="typescript"
        defaultValue={value}
        onChange={(value) => {
          if (value) {
            onChange(value)
          }
        }}
        theme="vs-dark"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid ${colors.grey};
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 4px;
  position: relative;

  & > span {
    background-color: ${colors.white};
    color: ${colors.grey};
    padding: 0 5px;
    position: absolute;
    top: 0;
    left: 8px;
    transform: translateY(-50%);
    font-size: 12px;
    line-height: 1;
  }
`

const ControlWrapper = styled.div`
  border: none !important;
  padding: 0 !important;
  margin-bottom: 15px;
`
