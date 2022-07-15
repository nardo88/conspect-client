import styled from "styled-components"
import colors from "./colors"

interface DndElementProps {

    setData: (val:any) => void
    data: any[]
}

const DndElement:React.FC<DndElementProps> = ({setData, data}) => {

    return (
        <Dnd draggable={true}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </Dnd>
    )
}

export default DndElement

const Dnd = styled.div`
    width: 40px;
    height: 25px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2px 0;
    cursor: grab;

    &:active{
        cursor: grabbing;
    }


    & > span{
        display: flex;
        width: 8px;
        height: 8px;
        background-color: ${colors.grey};
        border-radius: 50%;
        margin: 0 2px;
    }
`