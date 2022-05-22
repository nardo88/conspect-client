import colors from '../ui/colors'

type ArrowPrevProps = {
    active: boolean
}

const ArrowNext: React.FC<ArrowPrevProps> = ({ active }) => {
    return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2" id="Layer_2">
                <path fill={active ? colors.green : colors.white} d="M12,25a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L18.59,16l-7.3-7.29a1,1,0,1,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42l-8,8A1,1,0,0,1,12,25Z" />
            </g>
        </svg>
    )
}

export default ArrowNext