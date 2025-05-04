import Image from 'next/image'
import PrimaryButton from '@/app/components/ui/PrimaryButton'

const Footer = () => (
    <div>
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#BC9D65] to-transparent"></div>
        <footer
            className={
                'relative flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full py-[39px]'
            }
        >
            <div className={'hidden md:block'} />
            <Image
                className={'lg:absolute lg:left-[40%]'}
                src={'/logo.svg'}
                alt={'Verona logo'}
                width={184}
                height={47}
            />
            <div
                className={
                    'flex flex-col lg:flex-row gap-5 lg:gap-[50px] items-center lg:self-end mt-5 lg:mt-0'
                }
            >
                <a href={'tel:+77077997979'}>
                    <PrimaryButton>+7 707 799 7979</PrimaryButton>
                </a>
                <Image
                    src={'/zhiloy-fond-logo.png'}
                    alt={'Zhiloy Fond'}
                    width={126}
                    height={105}
                />
            </div>
        </footer>
    </div>
)

export default Footer
