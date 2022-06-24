import React from 'react'
import styled from 'styled-components'
import colors from './colors'

type propsType = {
  value: boolean
  onChange: (val: boolean) => void
  label?: string
}

const CheckBox: React.FC<propsType> = ({ value, onChange, label = '' }) => {
  return (
    <span className="dif aic cup" onClick={() => onChange(!value)}>
      <Box checked={value} />
      {label && <span>{label}</span>}
    </span>
  )
}

export default CheckBox

const Box = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${colors.green};
  margin-right: 5px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 4px;
    background: ${colors.green};
  }
`
