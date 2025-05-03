import React from 'react'

interface PrimaryCardProps {
    children: React.ReactNode | React.ReactNode[] | string
    className?: string
}

const PrimaryCard = ({ children, className = '' }: PrimaryCardProps) => (
    <div
        className={`${className} rounded-[30px] bg-primary text-on-primary p-5`}
    >
        {children}
    </div>
)

export default PrimaryCard
