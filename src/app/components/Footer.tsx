import Image from 'next/image'
import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Phone from '@/app/components/icons/Phone'
import Instagram from '@/app/components/icons/Instagram'
import Whatsapp from '@/app/components/icons/WhatsApp'
import { getContent } from '@/app/utils/content'

const Footer = () => {
    const { footer: content } = getContent()

    return (
        <div>
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#BC9D65] to-transparent"></div>
            <footer
                className={
                    'relative flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full pt-[39px]'
                }
            >
                <div className={'hidden md:block'} />
                <Image
                    className={'lg:absolute lg:left-[40%]'}
                    src={content.logo.src}
                    alt={content.logo.alt}
                    width={content.logo.width}
                    height={content.logo.height}
                />
                <div
                    className={
                        'flex flex-col lg:flex-row gap-5 lg:gap-[50px] items-center lg:self-end mt-5 lg:mt-0'
                    }
                >
                    <div className={'flex gap-5'}>
                        <a
                            target={'_blank'}
                            href={
                                'https://api.whatsapp.com/send/?phone=%2B77077997979&text&type=phone_number&app_absent=0'
                            }
                        >
                            <Whatsapp />
                        </a>
                        <a
                            target={'_blank'}
                            href={
                                'https://www.instagram.com/zhiloyfond_krg?igsh=MTJ2YnhwOW1jMWYzcw=='
                            }
                        >
                            <Instagram />
                        </a>
                    </div>
                    <a href={`tel:${content.phone.trim()}`}>
                        <PrimaryButton className={'flex gap-2.5'}>
                            <Phone /> {content.phone}
                        </PrimaryButton>
                    </a>
                    <Image
                        src={content.zhiloyFondLogo.src}
                        alt={content.zhiloyFondLogo.alt}
                        width={content.zhiloyFondLogo.width}
                        height={content.zhiloyFondLogo.height}
                    />
                </div>
            </footer>
        </div>
    )
}

export default Footer
