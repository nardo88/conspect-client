import styled from 'styled-components'
import { ArticleType, BodyItem } from '../../types/articles'
import colors from './colors'

interface DndElementProps {
  setData: (val: any) => void
  item: BodyItem
  data: ArticleType
  index: number
  startIndex: null | number
  setStartIndex: (val: null | number) => void
  currentItem: any
  setCurrentItem: (val: any) => void
}

const DndElement: React.FC<DndElementProps> = ({
  setData,
  data,
  item,
  index,
  startIndex,
  setStartIndex,
  currentItem,
  setCurrentItem,
}) => {
  const dragStart = (e: any) => {
    e.target.style.backgroundColor = colors.grey
    setStartIndex(index)
    setCurrentItem(item)
  }
  const dragLeave = (e: any) => {
    e.target.style.backgroundColor = 'transparent'
  }
  const dragEnter = (e: any) => {
    e.target.style.backgroundColor = colors.green
  }
  const dragEnd = (e: any) => {
    e.target.style.backgroundColor = 'transparent'
  }
  const dragOver = (e: any) => {
    e.preventDefault()
  }
  const drop = (e: any) => {
    e.preventDefault()
    e.target.style.backgroundColor = 'transparent'
    if (startIndex === index) {
      return
    }
    if (startIndex !== null) {
      const body = [...data.body]
      body.splice(startIndex, 1)
      body.splice(index, 0, currentItem)
      setData({ ...data, body })
      setStartIndex(null)
      setCurrentItem(null)
    }
  }


  return (
    <Dnd
      draggable={true}
      onDragStart={(e: any) => dragStart(e)}
      onDragEnd={(e: any) => dragEnd(e)}
      onDragEnter={(e: any) => dragEnter(e)}
      onDragLeave={(e: any) => dragLeave(e)}
      onDragOver={(e: any) => dragOver(e)}
      onDrop={(e: any) => drop(e)}
    />
  )
}

export default DndElement

const Dnd = styled.div`
  width: 40px;
  height: 25px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2px 0;
  cursor: grab;
  background-image: url('/assets/img/dnd.svg');
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: center;
  border-radius: 4px;

  &:active {
    cursor: grabbing;
  }
`
