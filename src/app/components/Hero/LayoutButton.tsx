'use client'

import Download from '@/app/components/icons/Download'
import PrimaryButton from '@/app/components/ui/PrimaryButton'

const LayoutButton = () => {
    const buttonClickHandler = () => {
        const link = document.createElement('a')
        link.href = '/download/Verona.pdf'
        link.download = 'Verona.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <PrimaryButton onClick={buttonClickHandler} className={'flex gap-2.5'}>
            <Download />
            Скачать планировку
        </PrimaryButton>
    )
}

export default LayoutButton
