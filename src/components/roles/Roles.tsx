import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import api from '../../hooks/axios.hook'
import Loader from '../loader/Loader'
import Pagination from '../pagination/Pagination'
import colors from '../ui/colors'
import { Text } from '../ui/components'
import UserItem from './UserItem'

type User = {
  email: string
  roles: string[]
  id: string
  createdAt: string
}

const Roles = () => {
  const LIMIT = 10
  const [data, setData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [total, seTotal] = useState(0)

  const getData = async () => {
    setIsLoading(true)
    api
      .get(`/user?page=${currentPage}&limit=${LIMIT}`)
      .then((res) => {
        setData(res.data.data)
        seTotal(res.data.total)
      })
      .catch((error: Error) => {
        alert(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const changeRole = useCallback(async (id: string, value: boolean) => {
    api.put(`/user/${id}`, {
      roles: value ? ['user', 'admin'] : ['user'],
    })
  }, [])

  useEffect(() => {
    getData()
  }, [currentPage])

  return (
    <Wrapper>
      <Content>
        <div>Filters</div>
        <div>
          <Titles>
            <ul>
              <li>
                <Text color={colors.grey}>Email</Text>
              </li>
              <li>
                <Text color={colors.grey}>Дата регистрации</Text>
              </li>
              <li className="tac">
                <Text color={colors.grey}>Права администратора</Text>
              </li>
              <li></li>
              <li></li>
            </ul>
          </Titles>
          <DataWrapper>
            {data.length > 0 ? (
              data.map((user: User) => (
                <UserItem key={user.id} {...user} changeRole={changeRole} />
              ))
            ) : (
              <Text>Нет данных для отображения</Text>
            )}
          </DataWrapper>
        </div>
        <div className="mt20">
          <Pagination
            total={total}
            currentPage={currentPage}
            pageCount={LIMIT}
            limit={5}
            onChange={setCurrentPage}
          />
        </div>
      </Content>
      {isLoading && <Loader />}
    </Wrapper>
  )
}

export default Roles

const Wrapper = styled.div`
  padding: 20px;
`

const Content = styled.div`
  padding: 15px;
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`

const Titles = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 15px 0;
  & > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    li {
      width: 25%;
    }
  }
`

const DataWrapper = styled.div`
  padding: 15px 0;
`
