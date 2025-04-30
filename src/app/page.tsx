import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'

const Index = () => {
    return (
        <div className={'flex flex-col gap-5 lg:gap-[30px] px-4 md:px-[60px]'}>
            <Header />
            <Hero />
            <About />
        </div>
    )
}

export default Index
