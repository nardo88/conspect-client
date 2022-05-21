// @ts-ignore
import Editor from 'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import { useEffect } from 'react'
import styled from 'styled-components'
import colors from '../ui/colors'

type EditorProps = {
    value: string
    onChange: (value: string) => void
}

const MediumEditor:React.FC<EditorProps> = ({value, onChange}) => {

    useEffect(() => {
        require('medium-editor/dist/css/medium-editor.css')
        require('medium-editor/dist/css/themes/default.css')
    }, [])

    return (
        <EditorWrapper>
            <ControlWrapper>
                <button className='mr20'>Удалить</button>
            </ControlWrapper>
            <Editor
                text={value}
                onChange={(v: any) => onChange(v)}
                //   required={p.optional !== true}
                options={
                    {
                        toolbar: {
                            buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'orderedlist', 'unorderedlist']
                        },
                        placeholder: {
                            text: ' ',
                            hideOnClick: true
                        },
                        paste: {
                            cleanPastedHTML: true,
                            cleanAttrs: ['style', 'dir'],
                            cleanTags: ['label', 'meta', 'span'],
                            unwrapTags: ['sub', 'sup', 'span', 'b', 'h3', 'h2', 'h1', 'p', 'div']
                        },
                    }
                }
            />
        </EditorWrapper>
    )
}


export default MediumEditor

const EditorWrapper = styled.div`
  border: 1px solid ${colors.grey};
  width: 100%;
  padding: 16px;
  margin-bottom: 20px;
  
  font-size: var(--fb-size-small);
  background-color: transparent;
  border-radius: 4px;
  /* outline: none; */

  :focus {
    border: var(--fb-input-outline);
  }

  div {
    outline: none;
    border: 1px solid ${colors.grey};
    padding: 5px;

  }

  ul {
    padding-left: 2rem;
    list-style-type: disc;
  }

  ol {
    padding-left: 2rem;
    list-style-type: auto;

  }

  a{
      text-decoration: underline;
      color: inherit;
  }

    `

const ControlWrapper = styled.div`
    border: none !important;
    padding: 0 !important;
    margin-bottom: 15px;
`