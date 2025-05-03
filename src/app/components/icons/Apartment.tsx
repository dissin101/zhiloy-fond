import React from 'react'

const Apartment = (props: React.ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M3 17.5V5.83333H6.33333V2.5H14.6667V9.16667H18V17.5H11.3333V14.1667H9.66667V17.5H3ZM4.66667 15.8333H6.33333V14.1667H4.66667V15.8333ZM4.66667 12.5H6.33333V10.8333H4.66667V12.5ZM4.66667 9.16667H6.33333V7.5H4.66667V9.16667ZM8 12.5H9.66667V10.8333H8V12.5ZM8 9.16667H9.66667V7.5H8V9.16667ZM8 5.83333H9.66667V4.16667H8V5.83333ZM11.3333 12.5H13V10.8333H11.3333V12.5ZM11.3333 9.16667H13V7.5H11.3333V9.16667ZM11.3333 5.83333H13V4.16667H11.3333V5.83333ZM14.6667 15.8333H16.3333V14.1667H14.6667V15.8333ZM14.6667 12.5H16.3333V10.8333H14.6667V12.5Z"
                fill="#BC9D65"
            />
        </svg>
    )
}

export default Apartment
