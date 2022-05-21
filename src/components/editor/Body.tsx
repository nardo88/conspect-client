import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ArticleType } from '../../types/articles'
import { DefaultOptions } from '../../types/default.options'
import colors from '../ui/colors'
import { bodyVariants } from '../ui/settings'
import BodyInput from './BodyInput'

type SettingsType = {
  acticle: ArticleType
  setArticle: (value: ArticleType) => void
}

const Body: React.FC<SettingsType> = ({ acticle, setArticle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const addBlock = (type: string) => {
    setIsOpen(false)
    setArticle({
      ...acticle,
      body: [...acticle.body, { type, value: '' }],
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

  console.log(acticle)
  return (
    <BodyWrapper>
      <div className="top df jcsb" >
        <AddWrap ref={ref}>
          <AddBtn onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <AddList>
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
        <SaveBtn />
      </div>
      <div className="content mt20">
        <BodyInput data={acticle.body} />
      </div>
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
  width: 40px;
  height: 40px;
  border: none;
  background-image: url('/assets/img/add.svg');
  background-color: transparent;
  border-radius: 50%;
  outline: none;
`

const AddList = styled.div`
  position: absolute;
  z-index: 50;
  border-radius: 5px;
  left: 0;
  top: 103%;
  background-color: ${colors.lightBrown};

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
     width: 40px;
  height: 40px;
  border: none;
  background-image: url('/assets/img/save.svg');
  background-color: transparent;
  background-size: cover;
  outline: none;

`
