// @ts-ignore
import Editor from 'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import { useEffect } from 'react'
import styled from 'styled-components'
import colors from '../ui/colors'
import { variantsTranslate } from '../ui/settings'
import { RemoveBtn } from '../ui/components'

type EditorProps = {
  type: 'text' | 'image' | 'markdown' | 'video' | 'file'
  value: string
  onChange: (value: string) => void
  remove: () => void
}

const MediumEditor: React.FC<EditorProps> = ({
  value,
  onChange,
  type,
  remove,
}) => {
  useEffect(() => {
    require('medium-editor/dist/css/medium-editor.css')
    require('medium-editor/dist/css/themes/default.css')
  }, [])

  return (
    <EditorWrapper>
      <span>{variantsTranslate[type]}</span>
      <ControlWrapper>
        <RemoveBtn onClick={remove} title="Удалить" />
      </ControlWrapper>
      <Editor
        text={value}
        onChange={(v: any) => onChange(v)}
        options={{
          toolbar: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'anchor',
              'h1',
              'h2',
              'h3',
              'orderedlist',
              'unorderedlist',
            ],
          },
          placeholder: {
            text: ' ',
            hideOnClick: true,
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ['style', 'dir'],
            cleanTags: ['label', 'meta', 'span'],
            unwrapTags: [
              'sub',
              'sup',
              'span',
              'b',
              'h3',
              'h2',
              'h1',
              'p',
              'div',
            ],
          },
        }}
      />
    </EditorWrapper>
  )
}

export default MediumEditor

const EditorWrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.grey};
  width: 100%;
  padding: 16px;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 4px;

  div {
    outline: none;
    border: 1px solid ${colors.grey};
    padding: 5px;
  }

  & > ul {
    padding-left: 5rem;
  }

  ol {
    padding-left: 2rem;
    list-style-type: auto;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }

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
