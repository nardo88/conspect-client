import MDEditor from '@uiw/react-md-editor'
import styled from 'styled-components'
import colors from '../ui/colors'
import { RemoveBtn } from '../ui/components'
import { variantsTranslate } from '../ui/settings'
import { ArticleEnum } from '../../types/articles'

type MerkDownPRops = {
  value: string
  type: ArticleEnum
  onChange: (text: string) => void
  remove: () => void
}

const MarkDownEditor: React.FC<MerkDownPRops> = ({
  value,
  onChange,
  type,
  remove,
}) => {
  return (
    <EditorWrapper>
      <span>{variantsTranslate[type]}</span>
      <BtnWrap>
        <RemoveBtn onClick={remove} title="Удалить" />
      </BtnWrap>
      <MDEditor
        hideToolbar={true}
        value={value}
        onChange={(val: any) => onChange(val)}
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

const BtnWrap = styled.div`
  margin-bottom: 15px;
`
