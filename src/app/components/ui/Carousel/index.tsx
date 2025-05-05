'use client'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useRef } from 'react'
import Arrow, { ArrowType } from './Arrow'
import Dot from './Dot'

interface CarouselProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
}

const Carousel = ({ children, className = '' }: CarouselProps) => {
    const sliderRef = useRef<SlickSlider>(null)

    const goToSlide = (index: number) => {
        sliderRef.current?.slickGoTo(index)
    }

    const settings = {
        swipeToSlide: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow type={ArrowType.left} />,
        nextArrow: <Arrow type={ArrowType.right} />,
        customPaging: (index: number) => (
            <Dot index={index} goToSlide={goToSlide} />
        ),
        dotsClass:
            '!flex flex-row justify-center items-center gap-2.5 mt-[25px] mb-[65px] lg:mt-2 lg:mb-2',
        className: `${className} rounded-[30px] overflow-hidden`,
    }

    return (
        <SlickSlider {...settings} ref={sliderRef}>
            {children}
        </SlickSlider>
    )
}

export default Carousel
