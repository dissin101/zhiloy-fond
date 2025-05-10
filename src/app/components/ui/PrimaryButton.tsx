import React from 'react'
import { BASE_BUTTON } from '@/app/constants/button'

const PrimaryButton = (
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return (
        <button
            {...props}
            className={`${props.className ?? ''} ${BASE_BUTTON} bg-primary hover:bg-on-background text-on-primary hover:fill-primary hover:text-primary`}
        />
    )
}

export default PrimaryButton
