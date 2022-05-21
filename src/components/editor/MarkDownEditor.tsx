import MDEditor from '@uiw/react-md-editor'
import styled from 'styled-components'
import colors from '../ui/colors'

type MerkDownPRops = {
  value: string
  onChange: (text:string) => void
}

const MarkDownEditor: React.FC<MerkDownPRops> = ({value, onChange}) => {

  // <MDEditor.Markdown source={value} />

  return (
    <EditorWrapper>
      <BtnWrap>
        <button>Удалить</button>
      </BtnWrap>
      <MDEditor
        value={value}
        onChange={(val:any) => onChange(val)}
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

const BtnWrap = styled.div`
  margin-bottom: 15px;
`
