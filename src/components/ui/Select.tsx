import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import colors from './colors'

type OptionItem = {
  id: string
  title: string
}

type SelectProps = {
  label?: string
  options: OptionItem[]
  value: OptionItem | null
  onChange: (value: OptionItem) => void
}

const Select: React.FC<SelectProps> = ({
  options = [],
  value = null,
  onChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const selectHandler = (value: OptionItem) => {
    onChange(value)
    setIsOpen(false)
  }

  const missClickSelect = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', missClickSelect)
    return () => {
      window.removeEventListener('click', missClickSelect)
    }
  }, [])

  return (
    <SelectWrapper ref={ref}>
      <div>
        {label && <Label>{label}</Label>}
        <SelectTop active={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {value ? value.title : ''}
        </SelectTop>
        {/* <div></div> */}
      </div>
      {isOpen && (
        <DropDown>
          <ul>
            {options.map((item: OptionItem) => (
              <li key={item.id} onClick={() => selectHandler(item)}>
                {item.title}
              </li>
            ))}
          </ul>
        </DropDown>
      )}
    </SelectWrapper>
  )
}

export default Select

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(-50%);
  padding: 0 5px;
  background-color: ${colors.white};
  font-size: 12px;
  color: ${colors.grey};
`
const SelectWrapper = styled.div`
  position: relative;
`

const SelectTop = styled.div<{ active: boolean }>`
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid ${({ active }) => (!active ? colors.grey : colors.green)};
  cursor: pointer;
  user-select: none;
  height: 37px;
`

const DropDown = styled.div`
  position: absolute;
  z-index: 100;
  top: 105%;
  left: 0;
  right: 0;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color:  ${colors.lightGrey};
  }

  &::-webkit-scrollbar{
      width: 5px;
      background: transparent;
  }
  &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: ${colors.grey};
  }

  & > ul {
    li {
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: ${colors.grey};
        color: ${colors.white};
      }
    }
  }
`
