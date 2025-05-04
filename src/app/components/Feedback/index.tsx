import Image from 'next/image'
import SecondaryCard from '@/app/components/ui/SecondaryCard'
import Form from '@/app/components/Feedback/Form'
import { getImagePath } from '@/app/utils/image'

const content = {
    srcMobile: '/feedback-mobile.png',
    src: '/feedback.png',
    alt: 'Alt Feedback',
    scriptSrc: 'https://cdn-ru.bitrix24.kz/b15829360/crm/form/loader_61.js',
    scriptData: 'inline/61/0vasu8',
}

const Index = () => {
    return (
        <div className={'grid grid-cols-12 gap-5'}>
            <div className={'col-span-12 lg:col-span-8'}>
                <div
                    className={
                        'relative hidden  rounded-[30px] lg:block lg:aspect-2/1'
                    }
                >
                    <Image
                        src={getImagePath(content.src)}
                        alt={content.alt}
                        fill
                    />
                </div>
                <div
                    className={
                        'relative block  rounded-[30px] lg:hidden aspect-[1/1.5]'
                    }
                >
                    <Image
                        src={getImagePath(content.srcMobile)}
                        alt={content.alt}
                        fill
                    />
                </div>
            </div>
            <div className={'col-span-12 lg:col-span-4'}>
                <SecondaryCard className={'bitrix-form-container'}>
                    <Form src={content.scriptSrc} data={content.scriptData} />
                </SecondaryCard>
            </div>
        </div>
    )
}

export default Index
