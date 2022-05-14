import styled from 'styled-components'
import colors from '../ui/colors'

type ButtonProps = {
    children: any
    onClick: () => void
}

const Button = ({children, onClick}:ButtonProps) => {

    return (
        <CustomButton onClick={onClick}>{children}</CustomButton>
    )
}

export default Button

const CustomButton = styled.button`
    color: ${colors.white};
    background-color: ${colors.green};
    font-size: 16px;
    line-height: 20px;
    padding: 8px;
    border: none;
    border-radius: 4px;
`