import React from 'react'

interface SectionTitleProps {
    children: React.ReactNode | React.ReactNode[] | string
}

const SectionTitle = ({ children }: SectionTitleProps) => (
    <p
        style={{ fontWeight: 500 }}
        className={
            'text-on-background text-[32px]/10 font-[var(--font-cormorant-sc)]'
        }
    >
        {children}
    </p>
)

export default SectionTitle
