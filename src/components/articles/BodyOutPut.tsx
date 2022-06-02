import { BodyItem } from '../../types/articles'
// @ts-ignore
import Editor from 'react-medium-editor'
import styled from 'styled-components'
import MDEditor from '@uiw/react-md-editor'
import colors from '../ui/colors'

type BodyOutputProps = {
  data: BodyItem[]
}

type BodyItemProps = {
  elem: BodyItem
}

const BodyElem: React.FC<BodyItemProps> = ({ elem }) => {
  if (elem.type === 'image') {
    console.log(elem.value)
  }

  return (
    <div>
      {elem.type === 'text' && (
        <TextWrapper>
          <Editor
            text={elem.value}
            options={{ disableEditing: true, toolbar: false }}
          />
        </TextWrapper>
      )}

      {elem.type === 'markdown' && (
        <TextWrapper>
          <MDEditor.Markdown source={elem.value} />
        </TextWrapper>
      )}

      {elem.type === 'image' && (
        <TextWrapper>
          <Image src={elem.value} alt="" />
        </TextWrapper>
      )}

      {elem.type === 'file' && (
        <TextWrapper>
          <a
            download={elem.value}
            href={elem.value}
            target="_blank"
            rel="noreferrer"
          >
            Скачать файл
          </a>
        </TextWrapper>
      )}

      {elem.type === 'video' && (
        <TextWrapper>
          <Video controls={true} src={elem.value} />
        </TextWrapper>
      )}
    </div>
  )
}

const BodyOutput: React.FC<BodyOutputProps> = ({ data }) => {
  return (
    <div>
      {data.map((item: BodyItem) => (
        <BodyElem key={item._id} elem={item} />
      ))}
    </div>
  )
}

export default BodyOutput

const TextWrapper = styled.div`
  margin: 15px 0;
`

const Image = styled.img`
  max-width: 860px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.lightBrown};
`

const Video = styled.video`
  max-width: 560px;
  width: 100%;
`
