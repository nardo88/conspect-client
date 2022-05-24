import styled from "styled-components"

type BurgerProps = {
    open: boolean
}

const Burger:React.FC<BurgerProps> = ({open}) => {

    return <Btn><span/></Btn>
}

export default Burger

const Btn = styled.button`
    width: 30px;
    height: 30px;
    border:  none;

`