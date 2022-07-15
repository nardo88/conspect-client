import styled from 'styled-components'
import { BodyItem } from '../../types/articles'
import MarkDownEditor from './MarkDownEditor'
import MediumEditor from './MediumEditor'
import { ArticleType } from '../../types/articles'
import AddFile from './AddFile'
import Frame from './Frame'
import DndElement from '../ui/DndElement'
import { useState } from 'react'

type BodyInputProps = {
  data: ArticleType
  setData: (value: ArticleType) => void
}

const BodyInput: React.FC<BodyInputProps> = ({ data, setData }) => {
  const [startIndex, setStartIndex] = useState<null | number>(null)
  const [currentItem, setCurrentItem] = useState<any>(null)

  const deleteItem = (index: number) => {
    return function () {
      const newBody = data.body.filter((_, i) => i !== index)
      setData({ ...data, body: newBody })
    }
  }

  if (!data.body.length) {
    return null
  }

  return (
    <Wrapper>
      {data.body.map((item: BodyItem, i: number) => (
        <div key={i}>
          <div className="df jcfe">
            <DndElement
              setData={setData}
              item={item}
              data={data}
              index={i}
              startIndex={startIndex}
              setStartIndex={setStartIndex}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          </div>
          {item.type === 'markdown' && (
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
          )}
          {item.type === 'text' && (
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
          )}
          {item.type === 'frame' && (
            <Frame
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
          )}
          {(item.type === 'image' ||
            item.type === 'file' ||
            item.type === 'video') && (
            <AddFile
              type={item.type}
              remove={deleteItem(i)}
              url={item.value}
              onChange={(text: string) => {
                const newItem = { type: item.type, value: text }
                const newBody = [...data.body]
                newBody[i] = newItem
                setData({ ...data, body: newBody })
              }}
            />
          )}
        </div>
      ))}
    </Wrapper>
  )
}

export default BodyInput

const Wrapper = styled.div``
