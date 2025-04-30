import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Image from 'next/image'

const Header = () => {
    return (
        <header
            className={
                'flex justify-center md:justify-between items-center w-full lg:pb-2.5 pt-[52px] md:pt-2.5'
            }
        >
            <div className={'hidden md:block'} />
            <Image
                className={'self-center'}
                src={'/logo.svg'}
                alt={'Verona logo'}
                width={184}
                height={47}
            />
            <a className={'self-end hidden md:block'} href={'tel:+77077997979'}>
                <PrimaryButton>+7 707 799 7979</PrimaryButton>
            </a>
            {/* TODO: add divider*/}
        </header>
    )
}

export default Header
