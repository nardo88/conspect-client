import { FC } from 'react'
import { IArticelCard } from './Catalog'
import styled from 'styled-components'
import colors from '../ui/colors'
import { Link } from 'react-router-dom'
import { Text } from '../ui/components'
import { categories, covers } from '../ui/settings'
import dayjs from 'dayjs'

const ArticleCard: FC<IArticelCard> = (props) => {
  const { category, description, id, image, title, updatedAt } = props
  const cat = categories.find((i) => i.id === category)
  return (
    <CardWrapper>
      <Link to={`/${id}`}>
        <ImageWrapper>
          {covers[category] && <img src={covers[category]} alt="" />}
          {!covers[category] && image && <img src={image} alt="" />}
          {!covers[category] && !image && (
            <EmptyImage>
              <span>DatA</span>
              <span>forDeveloper</span>
            </EmptyImage>
          )}
        </ImageWrapper>
        <InfoWrapper>
          <Top>
            <H3>{title}</H3>
            <Text>{description}</Text>
          </Top>
          <Bottom>
            <span>{cat?.title}</span>
            <span>{dayjs(updatedAt).format('DD.MM.YYYY')}</span>
          </Bottom>
        </InfoWrapper>
      </Link>
    </CardWrapper>
  )
}
export default ArticleCard

const CardWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid ${colors.brown};

  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: 2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`
const EmptyImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${colors.brown};
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  span {
    color: ${colors.red};
    &: first-of-type {
      color: ${colors.white};
    }
    font-size: 20px;
    font-weight: 600;
  }
`

const InfoWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const H3 = styled.h3``
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  span {
    color: ${colors.grey};
    font-size: 12px;
  }
`

const Top = styled.div`
  flex: 1 0 auto;
  p {
    margin-top: 6px;
  }
`
