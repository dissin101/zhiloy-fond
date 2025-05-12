import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Image from 'next/image'
import Phone from '@/app/components/icons/Phone'
import { getContent } from '@/app/utils/content'

const Header = () => {
    const { header: content } = getContent()

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
                    src={content.logo.src}
                    alt={content.logo.alt}
                    width={content.logo.width}
                    height={content.logo.height}
                />
                <a
                    className={'self-end hidden lg:block'}
                    href={`tel:${content.phone.trim()}`}
                >
                    <PrimaryButton className={'flex gap-2.5'}>
                        <Phone /> {content.phone}
                    </PrimaryButton>
                </a>
            </header>
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#BC9D65] to-transparent mt-[10px] lg:mt-0"></div>
        </div>
    )
}

export default Header
