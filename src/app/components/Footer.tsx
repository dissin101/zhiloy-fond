import Image from 'next/image'
import PrimaryButton from '@/app/components/ui/PrimaryButton'
import { getImagePath } from '@/app/utils/image'
import Phone from '@/app/components/icons/Phone'
import Instagram from '@/app/components/icons/Instagram'
import Whatsapp from '@/app/components/icons/WhatsApp'

const Footer = () => (
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
                src={getImagePath('/logo.svg')}
                alt={'Verona logo'}
                width={184}
                height={47}
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
                <a href={'tel:+77077997979'}>
                    <PrimaryButton className={'flex gap-2.5'}>
                        <Phone /> +7 707 799 7979
                    </PrimaryButton>
                </a>
                <Image
                    src={getImagePath('/zhiloy-fond-logo.png')}
                    alt={'Zhiloy Fond'}
                    width={126}
                    height={105}
                />
            </div>
        </footer>
    </div>
)

export default Footer
