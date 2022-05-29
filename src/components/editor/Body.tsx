import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import { DefaultOptions } from '../../types/default.options'
import colors from '../ui/colors'
import { bodyVariants } from '../ui/settings'
import BodyInput from './BodyInput'
import Loader from '../loader/Loader'
import api from '../../hooks/axios.hook'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import breackpoints from '../ui/breackpoints'

type SettingsType = {
  article: ArticleType
  setArticle: (value: ArticleType) => void
}

const Body: React.FC<SettingsType> = ({ article, setArticle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [down, setDown] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const { userId } = useContext(AuthContext)

  const addBlock = (type: any) => {
    setIsOpen(false)
    setArticle({
      ...article,
      body: [...article.body, { type, value: '' }],
    })
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

  useEffect(() => {
    if(listRef.current && ref.current){
      setDown(window.innerHeight < Number(Math.floor(ref.current?.getBoundingClientRect()?.top) + listRef.current?.offsetHeight));
    }
  }, [isOpen])

  const createArticle = async () => {
    if (!article.title || !article.category) {
      return alert('Заполните все поля!')
    }

    if (!article.body.length) {
      return alert('Пустую стратью сохранить нельзя!')
    }

    setIsLoading(true)
    await api
      .post('/article', {
        userId,
        ...article,
      })
      .then((res) => {
        setIsLoading(false)
        if (res.status === 200) {
          alert('Статья успешно сохранена')
        }
      })
      .catch((error: Error) => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <BodyWrapper>
      <div className="top df jcfe">
        <SaveBtn onClick={createArticle} />
      </div>
      <div className="content mt20">
        <BodyInput data={article} setData={setArticle} />
      </div>
      <div className="df mt20">
        <AddWrap ref={ref}>
          <AddBtn onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <AddList ref={listRef} down={down}>
              <ul>
                {bodyVariants.map((item: DefaultOptions) => (
                  <li key={item.id} onClick={() => addBlock(item.id)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </AddList>
          )}
        </AddWrap>
      </div>
      {isLoading && <Loader />}
    </BodyWrapper>
  )
}

export default Body

const BodyWrapper = styled.div``

const AddWrap = styled.div`
  width: fit-content;
  position: relative;
`

const AddBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-image: url('/assets/img/add.svg');
  background-color: transparent;
  border-radius: 50%;
  outline: none;

  ${breackpoints.md} {
    width: 20px;
    height: 20px;
  }
`

const AddList = styled.div<{down?: boolean}>`
  position: absolute;
  z-index: 50;
  border-radius: 5px;
  left: 0;
  top: 103%;
  transition: .1s;
  background-color: ${colors.lightBrown};
  transform: translateY(${({down}) => down ? '-125%' : '0'});

  ${breackpoints.md}{
    transform: translateY(${({down}) => down ? '-118%' : '0'});
  }

  & > ul {
    li {
      font-size: 16px;
      padding: 6px 10px;
      border-bottom: 1px solid ${colors.white};
      cursor: pointer;
      color: ${colors.white};

      &:hover {
        color: ${colors.lightBrown};
        background-color: ${colors.grey};
      }
    }
  }
`

const SaveBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-image: url('/assets/img/save.svg');
  background-color: transparent;
  background-size: cover;
  outline: none;

  ${breackpoints.md} {
    width: 20px;
    height: 20px;
  }
`
