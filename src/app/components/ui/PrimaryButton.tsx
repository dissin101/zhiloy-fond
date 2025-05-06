import React from 'react'

const PrimaryButton = (
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return (
        <button
            {...props}
            className={`${props.className ?? ''} group cursor-pointer transition duration-300 ease-in-out bg-primary hover:bg-on-background text-on-primary hover:fill-primary hover:text-primary rounded-[100px] py-2.5 px-7.5 font-bold min-w-[200px] min-h-[44px]`}
        />
    )
}

export default PrimaryButton
