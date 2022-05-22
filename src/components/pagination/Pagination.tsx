import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import scrollTo from '../../utils/scrollTo'
import ArrowNext from '../icons/ArrowNext'
import ArrowPrev from '../icons/ArrowPrev'
import breackpoints from '../ui/breackpoints'
import colors from '../ui/colors'
import { PageIncrement, PageDecrement } from './sidePoints'

type PaginationProps = {
    total: number
    currentPage: number
    pageCount: number
    limit: number
    onChange: (val: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
    total,
    currentPage,
    onChange,
    pageCount,
    limit,
}) => {
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
    const [pages, setPages] = useState<number[]>([])

    useEffect(() => {
        setPages(Array.apply(null, Array(Math.ceil(total / pageCount))).map((_, index) => index + 1))
    }, [total, pageCount])

    const lastPage = pages[pages.length - 1]

    const checkNumberLimit = (value: number) => {
        if (
            Math.floor(limit / 2) + value > maxPageNumberLimit &&
            maxPageNumberLimit <= lastPage
        ) {
            const nextValue =
                value + Math.floor(limit / 2) < lastPage
                    ? value + Math.floor(limit / 2)
                    : lastPage
            setmaxPageNumberLimit(nextValue)
            setminPageNumberLimit(nextValue - limit)
        }
        if (
            value - Math.floor(limit / 2) <= minPageNumberLimit &&
            minPageNumberLimit > 0
        ) {
            const prevValue =
                value - Math.ceil(limit / 2) >= 0 ? value - Math.ceil(limit / 2) : 0
            setminPageNumberLimit(prevValue)
            setmaxPageNumberLimit(prevValue + limit)
        }
    }

    const handleClick = (value: number) => {
        onChange(value)
        checkNumberLimit(value)
        scrollTo()
    }

    if (total <= pageCount) {
        return null
    }

    return (
        <div className="mt32">
            <ul className="df">
                <li>
                    <PrevBtn
                        disabled={currentPage === 1 ? true : false}
                        onClick={() => handleClick(currentPage - 1)}
                    >
                        <ArrowPrev active={false} />
                    </PrevBtn>
                </li>
                <PageDecrement
                    minPageNumberLimit={minPageNumberLimit}
                    goToFirstPage={handleClick}
                />
                {pages.map((item) => {
                    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
                        return (
                            <li key={item} style={{marginRight: '4px'}}>
                                <PaginationBtn
                                    onClick={() => handleClick(item)}
                                    current={item === currentPage}
                                >
                                    {item}
                                </PaginationBtn>
                            </li>
                        )
                    } else return null
                })}
                <PageIncrement
                    goToLastPage={handleClick}
                    lastPage={lastPage}
                    total={pages.length}
                    maxPageNumberLimit={maxPageNumberLimit}
                />
                <li>
                    <NextBtn
                        disabled={
                            currentPage === Math.ceil(total / pageCount) ? true : false
                        }
                        onClick={() => handleClick(currentPage + 1)}
                        className="cup prev"
                    ><ArrowNext active={false} /></NextBtn>
                </li>
            </ul>
        </div>
    )
}

export default Pagination

const PrevBtn = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.green};
    background-color: ${colors.green};
    border-radius: 4px;
    margin-right: 4px;
`
const NextBtn = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.green};
    background-color: ${colors.green};
    border-radius: 4px;
`

const PaginationBtn = styled.button<{current:boolean}>`
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.green};
    background-color: ${({current}) => current ? colors.green : colors.white};
    color: ${({current}) => current ? colors.white : colors.green};
    border-radius: 4px;

    &:hover{
        background-color: ${colors.green};
        color: ${colors.white};
    }

    ${breackpoints.md}{
        display: none;
    }
`