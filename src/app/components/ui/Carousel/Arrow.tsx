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
            ${type === ArrowType.left ? 'ml-[40%] lg:ml-5 left-0' : 'mr-[40%] lg:mr-5 right-0'}`}
        onClick={onClick}
    >
        <ChevronLeft className={type === ArrowType.right ? 'rotate-180' : ''} />
    </div>
)

export default Arrow
