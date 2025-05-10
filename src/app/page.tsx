import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Infrastructure from '@/app/components/Infrastructure'
import Hall from './components/Hall'
import Additional from '@/app/components/Additional'
import Advantages from '@/app/components/Advantages'
import Environment from '@/app/components/Environment'
import Address from '@/app/components/Address'
import Feedback from '@/app/components/Feedback'
import Footer from '@/app/components/Footer'

const Index = () => {
    return (
        <>
            <Header />
            <main className={'flex flex-col gap-5 lg:gap-[30px]'}>
                <Hero />
                <About />
                <Infrastructure />
                <Hall />
                <Additional />
                <Advantages />
                <Environment />
                <Address />
                <Feedback />
            </main>
            <Footer />
        </>
    )
}

export default Index
