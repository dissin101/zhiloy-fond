import SecondaryCard from '@/app/components/ui/SecondaryCard'
import Image from 'next/image'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getContent } from '@/app/utils/content'

const Infrastructure = () => {
    const { infrastructure: content } = getContent()

    return (
        <section>
            <SecondaryCard>
                <SectionTitle>Инфраструктура</SectionTitle>
                <div className={'flex flex-col lg:grid lg:grid-cols-3 gap-5'}>
                    <div
                        className={
                            'col-span-2 relative block lg:hidden aspect-3/4'
                        }
                    >
                        <Image
                            className={'object-cover rounded-[30px]'}
                            src={content.image.srcMobile}
                            alt={content.image.alt}
                            fill
                        />
                    </div>
                    <div
                        className={
                            'col-span-2 relative hidden lg:table-cell lg:aspect-2/1'
                        }
                    >
                        <Image
                            className={'object-cover rounded-[30px]'}
                            src={content.image.src}
                            alt={content.image.alt}
                            fill
                        />
                    </div>
                    <ol className="col-span-1 relative">
                        {content.items.length > 1 && (
                            <div
                                className="absolute left-[18px] w-[1px] h-[calc(100%-50px)] lg:h-[calc(100%-62px)] border-l border-dashed border-on-secondary"
                                aria-hidden="true"
                            />
                        )}

                        {content.items.map(
                            ({ title, description, icon }, index) => (
                                <li
                                    key={index}
                                    className={`flex gap-2.5 ${
                                        index < content.items.length - 1
                                            ? 'mb-[30px]'
                                            : ''
                                    }`}
                                >
                                    <div className="flex justify-center items-center rounded-3xl bg-[#8F7546] w-[36px] h-[36px] shrink-0 relative z-10">
                                        {icon}
                                    </div>
                                    <div className="text-on-secondary flex flex-col gap-[5px]">
                                        <p className="uppercase font-bold text-[16px]">
                                            {title}
                                        </p>
                                        <p className="text-[16px]">
                                            {description}
                                        </p>
                                    </div>
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </SecondaryCard>
        </section>
    )
}

export default Infrastructure
