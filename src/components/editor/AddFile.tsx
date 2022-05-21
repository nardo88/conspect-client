import styled from "styled-components"
import colors from "../ui/colors"
import Input from "../ui/Input"
import { variantsTranslate } from "../ui/settings"

type PropsType = {
    type: 'text' | 'image' | 'markdown' | 'video' | 'file'
    value:string
    onChange: (value: string) => void
    remove: () => void
}

const AddFile: React.FC<PropsType> = ({type, value, onChange, remove}) => {

    return (
        <Wrapper>
            <span>{variantsTranslate[type]}</span>
            <Control>
                <button onClick={remove}>Удалить</button>
            </Control>
            <Input value={value} onChange={(text: string) => onChange(text)} />
        </Wrapper>
    )
}

export default AddFile

const Wrapper = styled.div`
    margin-bottom: 20px;
    padding: 16px;
    border: 1px solid ${colors.grey};
    border-radius: 4px;
    position: relative;

    & > span {
        background-color: ${colors.white};
        color: ${colors.grey};
        padding: 0 5px;
        position: absolute;
        top: 0;
        left: 8px;
        transform: translateY(-50%);
        font-size: 12px;
        line-height: 1;
    }
`
const Control = styled.div`
    margin-bottom: 15px;
`