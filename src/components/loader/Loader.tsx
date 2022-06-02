import { Overlay } from "../ui/components"
import './Loader.modules.css'

const Loader = () => {
    return (
        <Overlay>
            <div className="lds-dual-ring"></div>
        </Overlay>
    )
}

export default Loader

