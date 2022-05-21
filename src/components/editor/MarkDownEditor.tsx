import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../ui/colors'

const MarkDownEditor: React.FC = () => {
  const [value, setValue] = useState('') as any

  // <MDEditor.Markdown source={value} />

  return (
    <EditorWrapper>
      <MDEditor
        value={value}
        onChange={(val) => setValue(val)}
        preview="edit"
      />
    </EditorWrapper>
  )
}

export default MarkDownEditor

const EditorWrapper = styled.div`
  border: 1px solid ${colors.grey};
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 4px;

`
