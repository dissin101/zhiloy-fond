import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'

const Index = () => {
    return (
        <div className={'flex flex-col gap-[30px] px-4 md:px-[60px]'}>
            <Header />
            <Hero />
        </div>
    )
}

export default Index
