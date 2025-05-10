import React from 'react'

interface SectionTitleProps {
    children: React.ReactNode | React.ReactNode[] | string
    className?: string
}

const SectionTitle = ({ children, className = '' }: SectionTitleProps) => (
    <h2
        style={{ fontWeight: 500 }}
        className={`${className} text-on-background text-[32px]/10 font-[var(--font-cormorant-sc)]`}
    >
        {children}
    </h2>
)

export default SectionTitle
