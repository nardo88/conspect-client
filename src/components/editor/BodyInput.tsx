import styled from 'styled-components'
import { BodyItem } from '../../types/articles'
import colors from '../ui/colors'
import MarkDownEditor from './MarkDownEditor'

type BodyInputProps = {
  data: BodyItem[]
}

const BodyInput: React.FC<BodyInputProps> = ({ data }) => {
  console.log(data)

  if (!data.length) {
    return null
  }
  return (
    <Wrapper>
      {data.map((item: BodyItem, i: number) => (
        <>
          {
            item.type === 'markdown' &&
            <MarkDownEditor />

          }
          <div key={i}>
            <div>{item.type}</div>
            <div>{item.value}</div>
          </div>
        </>
      ))}
    </Wrapper>
  )
}

export default BodyInput

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid ${colors.lightGrey};
`
