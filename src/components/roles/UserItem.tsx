import dayjs from 'dayjs'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'
import CheckBox from '../ui/CheckBox'
import colors from '../ui/colors'
import { Text } from '../ui/components'

type PropsType = {
  email: string
  roles: string[]
  createdAt: string
  changeRole: (id: string, value: boolean) => void
}

const UserItem: React.FC<PropsType> = ({ email, roles, createdAt, changeRole, id }: any) => {
  const [value, setValue] = useState<boolean>(roles.includes('admin'))

  const chengeRole = (value: boolean) => {
    setValue(value)
    changeRole(id, value)
  }

  return (
    <UserWrapper>
      <li>
        <Text>{email}</Text>
      </li>
      <li>{dayjs(createdAt).format('DD.MM.YYYY hh.mm')}</li>
      <li className='tac'>
        <CheckBox value={value} onChange={chengeRole} />
      </li>
      <li className='tac'>
        <Button onClick={() => null}>Заблокировать</Button>
      </li>
      <li className='tac'>
        <Button onClick={() => null}>Написать</Button>
      </li>
    </UserWrapper>
  )
}

export default UserItem

const UserWrapper = styled.ul`
  border-bottom: 1px solid ${colors.grey};
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  list-style-type: none;

  li {
    width: 25%;
  }
`
