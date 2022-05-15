import styled from "styled-components"
import './Loader.modules.css'

const Loader = () => {
    return (
        <Overlay>
            <div className="lds-dual-ring"></div>
        </Overlay>
    )
}

export default Loader

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.3);
`