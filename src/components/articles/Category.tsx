import { useRef } from "react"
import styled from "styled-components"
import CategoryArrow from "../icons/CategoryArrow"
import colors from "../ui/colors"
import ArticleTitle from "./ArticleTitle"

type CategoryProps = {
    _id: string
    titles: Array<{ id: string, title: string }>
    currentCategory: string
    setCurrentCategory: (value: string) => void
}

const Category: React.FC<CategoryProps> = ({ _id, titles, currentCategory, setCurrentCategory }) => {
    const ref = useRef<HTMLDivElement>(null)
    const clickHandler = (value: string) => {
        value === currentCategory ? setCurrentCategory('') : setCurrentCategory(value)
    }
    return (
        <li>
            <ul>
                <CategoryTitle onClick={() => clickHandler(_id)} >
                    {_id}
                    <div style={{
                        transform: `rotate(${_id === currentCategory ? '-90deg' : '0'})`
                    }}>
                        <CategoryArrow />
                    </div>
                </CategoryTitle>
                <ArticleTitles open={_id === currentCategory} height={ref.current?.offsetHeight}>
                    <div ref={ref}>
                        <ul style={{ background: colors.lowBrown }}>
                            {titles.map((item: { id: string, title: string }) =>
                                <ArticleTitle key={item.id} {...item} />)}
                        </ul>
                    </div>
                </ArticleTitles>
            </ul>
        </li>
    )
}

export default Category

const CategoryTitle = styled.li`
    text-transform: uppercase;
    user-select: none;
    padding: 10px 10px 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.grey};
    color: ${colors.white};
    position: relative;

    & > div {
        transition: .2s;
        svg {
            height: 9px;
        }
    } 

`

const ArticleTitles = styled.li<{ open: boolean, height?:number }>`
    overflow: hidden;
    transition: .2s;
    max-height: ${({ open, height }) => (open && height) ? height + 'px' : '0px'};
`