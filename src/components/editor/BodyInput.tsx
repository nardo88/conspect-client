import styled from 'styled-components'
import { BodyItem } from '../../types/articles'
import colors from '../ui/colors'
import MarkDownEditor from './MarkDownEditor'
import MediumEditor from './MediumEditor'
import { ArticleType } from '../../types/articles'


type BodyInputProps = {
  data: ArticleType
  setData: (value: ArticleType) => void
}

const BodyInput: React.FC<BodyInputProps> = ({ data, setData }) => {
  console.log(data)

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
              value={item.value} 
              onChange={(text:string) => {
                const newItem = {type: item.type, value: text}
                const newBody = [...data.body]
                newBody[i] = newItem
                setData({...data, body: newBody})
              }} 
            />
          }
          {
            item.type === 'text' &&
            <MediumEditor 
              value={item.value} 
              onChange={(text:string) => {
                const newItem = {type: item.type, value: text}
                const newBody = [...data.body]
                newBody[i] = newItem
                setData({...data, body: newBody})
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
