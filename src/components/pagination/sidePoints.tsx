import styled from "styled-components"
import colors from "../ui/colors"

type PageIncrementProps = {
    goToLastPage: (val:number) => void
    lastPage: number
    total: number
    maxPageNumberLimit: number
}

type PageDecrementProps = {
    minPageNumberLimit: number
    goToFirstPage: (val:number) => void
}

export const PageIncrement:React.FC<PageIncrementProps> = ({
    goToLastPage, // функция перехода к последнему значению пагинации
    lastPage, // номер последней кнопки пагинации (число)
    total, // общее колтичество кнопок
    maxPageNumberLimit, // значение правой крайней кнопки пагинации
}) => {
    return (
        <>
            {total > maxPageNumberLimit && (
                <>
                    <li className='point'> &hellip; </li>
                    <Increment
                        onClick={() => goToLastPage(lastPage)}
                        style={{margin: '0 4px'}}
                    >
                        {lastPage}
                    </Increment>
                </>
            )}
        </>
    )
}

// отображение кнопки первого элемента пагинации. отображаются кнопка и три точки если 
// значение кнопки пагинации с лева больше либо равно 1
export const PageDecrement:React.FC<PageDecrementProps> = ({
    minPageNumberLimit, // номер кнопки пагинации в левой границы
    goToFirstPage, // функция перехода к первой страницы пагинации
}) => {
    return (
        <>
            {minPageNumberLimit >= 1 && (
                <>
                    <Increment
                        className="aic jcc mr4 side"
                        onClick={() => goToFirstPage(1)}
                    >
                        {'1'}
                    </Increment>
                    <li style={{margin: '0 4px'}} className='point'> &hellip; </li>
                </>
            )}
        </>
    )
}

const Increment = styled.li`
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.green};
    background-color: ${colors.white};
    color: ${colors.green};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: ${colors.green};
        color: ${colors.white};
    }
`