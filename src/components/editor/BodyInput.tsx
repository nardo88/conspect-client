import styled from 'styled-components'
import { BodyItem } from '../../types/articles'
import colors from '../ui/colors'
import MarkDownEditor from './MarkDownEditor'
import MediumEditor from './MediumEditor'
import { ArticleType } from '../../types/articles'
import AddFile from './AddFile'


type BodyInputProps = {
  data: ArticleType
  setData: (value: ArticleType) => void
}

const BodyInput: React.FC<BodyInputProps> = ({ data, setData }) => {
  console.log(data)

  const deleteItem = (index: number) => {
    return function(){
      const newBody = data.body.filter((_, i) => i !== index)
      setData({...data, body: newBody})
    }
  }

  if (!data.body.length) {
    return null
  }
  return (
    <Wrapper>
      {data.body.map((item: BodyItem, i: number) => (
        <div key={i}>
          {
            item.type === 'markdown' &&
            <MarkDownEditor
              type={item.type}
              value={item.value}
              remove={deleteItem(i)}
              onChange={(text: string) => {
                const newItem = { type: item.type, value: text }
                const newBody = [...data.body]
                newBody[i] = newItem
                setData({ ...data, body: newBody })
              }}
            />
          }
          {
            item.type === 'text' &&
            <MediumEditor
              type={item.type}
              value={item.value}
              remove={deleteItem(i)}
              onChange={(text: string) => {
                const newItem = { type: item.type, value: text }
                const newBody = [...data.body]
                newBody[i] = newItem
                setData({ ...data, body: newBody })
              }}
            />
          }
          {
            (item.type === 'image' || item.type === 'video' || item.type === 'file') &&
            <AddFile
              type={item.type}
              value={item.value}
              remove={deleteItem(i)}
              onChange={(text: string) => {
                const newItem = { type: item.type, value: text }
                const newBody = [...data.body]
                newBody[i] = newItem
                setData({ ...data, body: newBody })
              }}
            />
          }
        </div>
      ))}
    </Wrapper>
  )
}

export default BodyInput

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${colors.lightGrey};
`
