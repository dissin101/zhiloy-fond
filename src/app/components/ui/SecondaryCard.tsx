import React from 'react'

interface SecondaryCardProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
}

const SecondaryCard = ({ children, className = '' }: SecondaryCardProps) => (
    <div
        className={` ${className} flex flex-col gap-2.5 lg:gap-5 bg-secondary text-on-secondary rounded-[30px] px-4 lg:px-10 py-10`}
    >
        {children}
    </div>
)

export default SecondaryCard
