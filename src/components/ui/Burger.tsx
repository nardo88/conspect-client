import styled from "styled-components"
import colors from "./colors"

type BurgerProps = {
    open: boolean
    onClick: () => void
    color: string
}

const Burger: React.FC<BurgerProps> = ({ open, onClick, color }) => {

    return <Btn open={open} color={color} onClick={onClick}><span /></Btn>
}

export default Burger

const Btn = styled.button<{ open: boolean, color:string }>`
    position: relative;
    width: 25px;
    height: 20px;
    border:  none;
    display: flex;
    align-items: center;
    background-color: transparent;

    &:after{
        content: '';
        position: absolute;
        transition: 0.2s;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: ${({color}) => color};
        transform: rotate(${({open}) => open ? '-45deg' : '0' });
        transform-origin: left;

    }
    &:before{
        content: '';
        position: absolute;
        transition: 0.2s;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: ${({color}) => color};
        transform: rotate(${({open}) => open ? '45deg' : '0' });
        transform-origin: left;
    }

    & > span{
        width: 100%;
        height: 3px;
        background-color: ${({color}) => color};
        display: ${({ open }) => open ? 'none' : 'block'};
    }
`