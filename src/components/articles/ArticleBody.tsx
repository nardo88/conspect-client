import { useEffect, useState } from "react"
import styled from "styled-components"
import { ArticleType } from "../../types/articles"
import { H1 } from "../ui/components"
import BodyOutput from "./BodyOutPut"

type ArticleBodyType = {
    article: ArticleType
}

const ArticleBody: React.FC<ArticleBodyType> = ({article}) => {
    console.log(article)
    const {title, body} = article

    return (
        <ArticleWrapper>
            <H1>{title}</H1>
            <BodyWrapper>
                <BodyOutput data={body} />
            </BodyWrapper>
        </ArticleWrapper>
    )
}

export default ArticleBody

const ArticleWrapper = styled.div`
    padding: 20px;
`

const BodyWrapper = styled.div``