import SecondaryCard from '@/app/components/ui/SecondaryCard'
import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Image from 'next/image'
import { getContent } from '@/app/utils/content'

const Additional = () => {
    const { additional: content } = getContent()

    return (
        <section>
            <SecondaryCard>
                <div className={'grid grid-cols-12 gap-5'}>
                    <div className={'col-span-12 lg:col-span-4'}>
                        <PrimaryCard className={'flex h-full items-center'}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: content.title,
                                }}
                            />
                        </PrimaryCard>
                    </div>
                    <p
                        className={'col-span-12 lg:col-span-8'}
                        dangerouslySetInnerHTML={{
                            __html: content.description,
                        }}
                    />
                    <div
                        className={
                            'hidden lg:grid lg:grid-cols-12 lg:col-span-12 lg:gap-5'
                        }
                    >
                        {content.images.map(({ src, alt }, index) => (
                            <div
                                className={'col-span-4 aspect-[2/1.5] relative'}
                                key={index}
                            >
                                <Image src={src} alt={alt} fill />
                            </div>
                        ))}
                    </div>
                    <div className={'grid col-span-12 lg:hidden gap-2.5'}>
                        {content.images.map(({ srcMobile, alt }, index) => (
                            <div
                                className={'aspect-[2/1.2] relative'}
                                key={index}
                            >
                                <Image
                                    className={'object-cover'}
                                    src={srcMobile}
                                    alt={alt}
                                    fill
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </SecondaryCard>
        </section>
    )
}

export default Additional
