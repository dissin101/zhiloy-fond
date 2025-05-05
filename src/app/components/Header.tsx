import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Image from 'next/image'
import { getImagePath } from '@/app/utils/image'
import Phone from '@/app/components/icons/Phone'

const Header = () => {
    return (
        <div>
            <header
                className={
                    'relative flex justify-center lg:justify-between items-center w-full lg:pb-2.5 pt-[52px] lg:pt-2.5'
                }
            >
                <div className={'hidden lg:block'} />
                <Image
                    className={'self-center lg:absolute lg:left-[40%]'}
                    src={getImagePath('/logo.svg')}
                    alt={'Verona logo'}
                    width={184}
                    height={47}
                />
                <a
                    className={'self-end hidden lg:block'}
                    href={'tel:+77077997979'}
                >
                    <PrimaryButton className={'flex gap-2.5'}>
                        <Phone /> +7 707 799 7979
                    </PrimaryButton>
                </a>
            </header>
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#BC9D65] to-transparent mt-[10px] lg:mt-0"></div>
        </div>
    )
}

export default Header
