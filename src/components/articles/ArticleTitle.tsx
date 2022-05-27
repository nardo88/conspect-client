import { useContext } from "react"
import styled from "styled-components"
import { ArticleContext } from "../../context/ArticleContext"
import colors from "../ui/colors"

type ArticleTitleProps = {
    title: string
    id: string
}

const ArticleTitle:React.FC<ArticleTitleProps> = ({title, id}) => {
    const {setArticleId, setIsOpen} = useContext(ArticleContext)

    return (
        <Title onClick={() => {
            setArticleId(id)
            setIsOpen(false)
            }}>
            <span>{title}</span>
        </Title>
    )
}

export default ArticleTitle

const Title = styled.li`
    user-select: none;
    padding: 10px 10px 10px 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.grey};
    color: ${colors.white};
    position: relative;

`