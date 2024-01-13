import { BodyItem } from '../../types/articles'
// @ts-ignore
import Editor from 'react-medium-editor'
import styled from 'styled-components'
import MDEditor from '@uiw/react-md-editor'
import colors from '../ui/colors'
import breackpoints from '../ui/breackpoints'
import { useRef } from 'react'
import { CodeViewer } from './CodeViewer'

type BodyOutputProps = {
  data: BodyItem[]
}

type BodyItemProps = {
  elem: BodyItem
}

const BodyElem: React.FC<BodyItemProps> = ({ elem }) => {
  const ref = useRef<HTMLDivElement>(null)

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

      {elem.type === 'code' && (
        <TextWrapper>
          <CodeViewer code={elem.value} />
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

      {elem.type === 'frame' && (
        <div ref={ref} className="mt15">
          <_Iframe
            src={elem.value}
            frameBorder="0"
            customHeight={(ref.current?.offsetTop || 0) + 85}
          />
        </div>
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
  border-radius: 4px;
  border: 1px solid ${colors.lightBrown};

  ${breackpoints.md} {
    width: 100%;
  }
`

const Video = styled.video`
  max-width: 560px;
  width: 100%;
`

const _Iframe = styled.iframe<{ customHeight: number }>`
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-right: -20px;
  height: calc(100vh - ${({ customHeight }) => customHeight + 'px'});

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${colors.grey};
  }

  &::-webkit-scrollbar {
    width: 5px;
    background: ${colors.grey};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.lightBrown};
  }
`
