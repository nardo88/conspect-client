import styled from 'styled-components'
import colors from './colors'

type InputProps = {
    value: string
    onChange: (value: string) => void
    type?: string
    placeholder?: string
    label?: string
}

const Input = ({ value, onChange, type = 'text', placeholder = '', label = '' }: InputProps) => {

    const changeHandler = (value: string) => {
        onChange(value)
    }

    return (
        <InputWrapper>
            {label && <span>{label}</span>}
            <CustomInput
                type={type}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
                placeholder={placeholder}
            />
        </InputWrapper>
    )
}

export default Input

const CustomInput = styled.input`
    outline: none;
    border: 1px solid ${colors.grey};
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1;
    padding: 8px;

    &:focus{
        border: 1px solid ${colors.green};
    }
`

const InputWrapper = styled.div`
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