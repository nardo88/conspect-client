import { useEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'
import Input from '../ui/Input'
import styled from 'styled-components'
import api from '../../hooks/axios.hook'
import ArticleCard from './ArticleCard'
import { Text } from '../ui/components'
import breackpoints from '../ui/breackpoints'
import { Categories } from '../ui/settings'

const PAGECOUNT = 12

export interface IArticelCard {
  title: string
  description: string
  category: Categories
  id: string
  image: string
  updatedAt: number
}

const Catalog = ({ id }: { id?: string }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [data, setData] = useState<IArticelCard[]>([])
  const [filter, setFilter] = useState('')
  const [value, setValue] = useState('')
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    setIsLoad(true)
    api
      .get(`/article/catalog?page=${currentPage}&limit=${PAGECOUNT}`)
      .then(({ data }) => {
        setData(data.data)
        setTotal(data.total)
      })
      .catch(() => {})

      .finally(() => setIsLoad(false))
  }, [currentPage, id])

  return (
    <CatalogWrapper>
      <Filter>
        <Input value={value} onChange={setValue} label="Заголовок статьи" />
      </Filter>
      <Cards>
        {data.length ? (
          data.map((article) => <ArticleCard key={article.id} {...article} />)
        ) : (
          <Text>Нет данных для отображения</Text>
        )}
      </Cards>
      <div>
        <Pagination
          currentPage={currentPage}
          onChange={setCurrentPage}
          limit={5}
          total={total}
          pageCount={PAGECOUNT}
        />
      </div>
    </CatalogWrapper>
  )
}

export default Catalog

const CatalogWrapper = styled.div`
  padding: 30px 20px;
`
const Filter = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr;
  gap: 15px;
  margin-bottom: 30px;

  ${breackpoints.xl} {
    grid-template-columns: 4fr 4fr 4fr;
  }

  ${breackpoints.md} {
    grid-template-columns: 4fr 4fr;
  }

  ${breackpoints.sm} {
    grid-template-columns: 4fr;
  }
`
