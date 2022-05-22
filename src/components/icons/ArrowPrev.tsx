import colors from '../ui/colors'

type ArrowPrevProps = {
    active: boolean
}

const ArrowPrev: React.FC<ArrowPrevProps> = ({active}) => {
    return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" data-name="Layer 2" id="Layer_2">
                <path fill={active ? colors.green : colors.white} d="M20,25a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,0-1.42l8-8a1,1,0,1,1,1.42,1.42L13.41,16l7.3,7.29a1,1,0,0,1,0,1.42A1,1,0,0,1,20,25Z" />
            </g>
            <g id="frame"><rect fill="none" height="32" width="32" /></g>
        </svg>
    )
}

export default ArrowPrev