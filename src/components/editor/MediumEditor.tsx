// @ts-ignore
import Editor from 'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const MediumEditor = ({p}: any) => {
   const [value, setValue] = useState('')

   useEffect(() => {
       require('medium-editor/dist/css/medium-editor.css')
       require('medium-editor/dist/css/themes/default.css')
   }, [])
  
    return (
    <EditorWrapper>
      <Editor
          text={value}
          onChange={(v: any) => setValue(v)}
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
  border: 1px solid gray;
    width: 100%;
  padding: .5rem 1rem;
  
  font-size: var(--fb-size-small);
  background-color: transparent;
  border-radius: .25rem;
  /* outline: none; */

  :focus {
    border: var(--fb-input-outline);
  }

  div {
    outline: none;
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