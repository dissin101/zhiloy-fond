import { CustomArrowProps } from 'react-slick'
import ChevronLeft from '@/app/components/icons/ChevronLeft'

export enum ArrowType {
    left,
    right,
}

interface ArrowProps extends CustomArrowProps {
    type: ArrowType
}

const Arrow = ({ type, onClick }: ArrowProps) => (
    <div
        className={`
            cursor-pointer z-50 bg-white flex 
            justify-center items-center rounded-[30px] 
            w-[40px] h-[40px] absolute -bottom-[65px]
            lg:bottom-0 lg:top-1/2 
            ${type === ArrowType.left ? 'left-1/2 -ml-15 lg:ml-5 lg:left-0' : 'right-1/2 -mr-15 lg:mr-5 lg:right-0'}`}
        onClick={onClick}
    >
        <ChevronLeft className={type === ArrowType.right ? 'rotate-180' : ''} />
    </div>
)

export default Arrow
