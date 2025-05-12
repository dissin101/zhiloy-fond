import SecondaryCard from '@/app/components/ui/SecondaryCard'
import SectionTitle from '@/app/components/ui/SectionTitle'
import Image from 'next/image'
import Carousel from '@/app/components/ui/Carousel'
import { getContent } from '@/app/utils/content'

const Advantages = () => {
    const { advantages: content } = getContent()

    return (
        <section>
            <SecondaryCard>
                <div className={'grid grid-cols-12 gap-5'}>
                    <div
                        className={'col-span-12 lg:col-span-7 grid grid-cols-1'}
                    >
                        <div
                            className={
                                'col-start-1 col-end-2 justify-self-center w-full my-auto'
                            }
                        >
                            <Carousel>
                                {content.carousel.map(({ src, alt }, index) => (
                                    <figure
                                        key={index}
                                        className={
                                            'relative aspect-[1/1.5] lg:aspect-3/2'
                                        }
                                    >
                                        <Image
                                            className={
                                                'rounded-[30px] object-cover'
                                            }
                                            src={src}
                                            alt={alt}
                                            fill
                                        />
                                    </figure>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div
                        className={
                            'col-span-12 lg:col-span-5 flex flex-col gap-2.5'
                        }
                    >
                        <SectionTitle>Преимущества комплекса</SectionTitle>
                        <div className={'grid grid-cols-2 gap-2.5'}>
                            {content.items.map(({ title, icon }, index) => (
                                <div
                                    className={
                                        'border-[1px] border-primary bg-[#454545] py-2.5 px-2.5 lg:px-5 rounded-[30px] flex flex-col text-center items-center gap-[5px] text-on-background transform transition duration-500 hover:scale-110 hover:shadow-lg hover:bg-[#505050] hover:border-[#D0A760] cursor-pointer'
                                    }
                                    key={index}
                                >
                                    <div className="transition-transform duration-300 hover:scale-125">
                                        {icon}
                                    </div>
                                    <p className="transition-all duration-300 hover:font-semibold">
                                        {title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SecondaryCard>
        </section>
    )
}

export default Advantages
