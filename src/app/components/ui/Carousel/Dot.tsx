import { useEffect, useRef, useState } from 'react'

interface DotProps {
    index: number
    goToSlide: (index: number) => void
}

const Dot = ({ goToSlide, index }: DotProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (!ref.current) return

        const parentElement = ref.current.parentElement
        if (!parentElement) return

        setIsActive(parentElement.classList.contains('slick-active'))

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsActive(
                        parentElement.classList.contains('slick-active')
                    )
                }
            })
        })

        observer.observe(parentElement, { attributes: true })

        return () => observer.disconnect()
    }, [])

    return (
        <div
            onClick={() => goToSlide(index)}
            className={`cursor-pointer flex w-[12px] h-[12px] rounded-[12px] border-[1px] border-primary ${isActive ? 'bg-primary' : 'bg-transparent'}`}
            ref={ref}
        />
    )
}

export default Dot
