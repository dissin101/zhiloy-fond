import React from 'react'

const PrimaryButton = (
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return (
        <button
            {...props}
            className={`${props.className ?? ''} bg-primary text-on-primary rounded-[100px] py-2.5 px-7.5 font-bold text-[15px] min-w-[200px] min-h-[44px]`}
        />
    )
}

export default PrimaryButton
