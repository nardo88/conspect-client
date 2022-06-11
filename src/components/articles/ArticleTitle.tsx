import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ArticleContext } from '../../context/ArticleContext'
import colors from '../ui/colors'

type ArticleTitleProps = {
  title: string
  id: string
}

const ArticleTitle: React.FC<ArticleTitleProps> = ({ title, id }) => {
  const params = useParams()
  const { setIsOpen } = useContext(ArticleContext)

  return (
    <Title
      onClick={() => setIsOpen(false)}
      active={params?.id === id}
    >
      <Link to={`/${id}`}>
        <span>{title}</span>
      </Link>
    </Title>
  )
}

export default ArticleTitle

const Title = styled.li<{ active?: boolean }>`
  & > a {
    user-select: none;
    padding: 10px 10px 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.grey};
    color: ${colors.white};
    position: relative;
    background: ${({ active }) => (active ? colors.green : colors.grey)};
    border-bottom: 1px solid ${colors.lightGrey};
    text-decoration: none;

    &:hover {
      background: ${colors.green};
    }
  }
`
