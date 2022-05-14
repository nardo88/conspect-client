import styled from 'styled-components'

type InputProps = {
    value: string
    onChange: (value: string) => void
}

const Input = ({value, onChange}: InputProps) => {

    const changeHandler = (value:string) => {
        onChange(value)
    }

    return (
        <CustomInput value={value} onChange={(e) => changeHandler(e.target.value)} />
    )
}

export default Input

const CustomInput = styled.input``