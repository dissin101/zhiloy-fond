import Image from 'next/image'
import SecondaryCard from '@/app/components/ui/SecondaryCard'
import Form from '@/app/components/Feedback/Form'
import { getContent } from '@/app/utils/content'

const Index = () => {
    const { feedback: content } = getContent()

    return (
        <section className={'grid grid-cols-12 gap-5'}>
            <div className={'col-span-12 lg:col-span-8'}>
                <div
                    className={
                        'relative hidden  rounded-[30px] lg:block lg:aspect-2/1'
                    }
                >
                    <Image src={content.src} alt={content.alt} fill />
                </div>
                <div
                    className={
                        'relative block  rounded-[30px] lg:hidden aspect-[1/1.5]'
                    }
                >
                    <Image src={content.srcMobile} alt={content.alt} fill />
                </div>
            </div>
            <div className={'col-span-12 lg:col-span-4'}>
                <SecondaryCard className={'bitrix-form-container'}>
                    <Form src={content.scriptSrc} data={content.scriptData} />
                </SecondaryCard>
            </div>
        </section>
    )
}

export default Index
