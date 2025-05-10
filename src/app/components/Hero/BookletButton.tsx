'use client'
import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Download from '@/app/components/icons/Download'
import Modal from 'react-modal'
import { useState } from 'react'
import { BASE_BUTTON } from '@/app/constants/button'

type RoomType = {
    title: string
    id: number
}

const content: { rooms: RoomType[] } = {
    rooms: [
        {
            title: '1-комн.',
            id: 1,
        },
        {
            title: '2-комн.',
            id: 2,
        },
        {
            title: '3-комн.',
            id: 3,
        },
        {
            title: '4-комн',
            id: 4,
        },
        {
            title: '5-комн',
            id: 5,
        },
        {
            title: '6-комн',
            id: 6,
        },
    ],
}

const BookletButton = () => {
    const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    Modal.setAppElement('#App')

    const closeModalHandler = () => {
        setIsOpen(false)
    }

    const downloadClickHandler = () => {
        if (!selectedRoom) return

        const link = document.createElement('a')
        link.href = `/download/booklet-${selectedRoom.id}.pdf`
        link.download = `${selectedRoom.id} комнатные.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        closeModalHandler()
        setSelectedRoom(null)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                className="absolute top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 rounded-[20px] border border-primary  bg-secondary min-w-[90%] lg:min-w-[500px] max-w-[420px] p-5 outline-none"
                overlayClassName="fixed inset-0 bg-black-50 z-[1000]"
                portalClassName="z-50"
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModalHandler}
            >
                <>
                    <span
                        className={
                            'text-on-primary font-[var(--font-cormorant-sc)]'
                        }
                    >
                        Комнатность
                    </span>
                    <ul className={'flex flex-wrap gap-2'}>
                        {content.rooms.map((room) => (
                            <li key={room.id}>
                                <button
                                    onClick={() => setSelectedRoom(room)}
                                    className={`${BASE_BUTTON} !min-w-[50px] !min-h-[31px] !px-5 !py-[8px] hover:opacity-90 ${selectedRoom?.id === room.id ? 'bg-primary text-on-primary' : 'bg-on-secondary text-on-primary'}`}
                                >
                                    {room.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={'flex w-full justify-between gap-2'}>
                        <button
                            onClick={closeModalHandler}
                            className={`${BASE_BUTTON} !min-w-auto !w-[50%] bg-secondary hover:opacity-70 border border-on-secondary text-on-secondary`}
                        >
                            Отмена
                        </button>
                        <PrimaryButton
                            onClick={downloadClickHandler}
                            className={'!min-w-auto !w-[50%]'}
                        >
                            Скачать
                        </PrimaryButton>
                    </div>
                </>
            </Modal>
            <PrimaryButton
                onClick={() => setIsOpen(true)}
                className={'flex gap-2.5'}
            >
                <Download />
                Скачать буклет
            </PrimaryButton>
        </>
    )
}

export default BookletButton
