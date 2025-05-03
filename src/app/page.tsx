import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Infrastructure from '@/app/components/Infrastructure'
import Hall from './components/Hall'
import Additional from '@/app/components/Additional'
import Advantages from '@/app/components/Advantages'

const Index = () => {
    return (
        <div
            className={
                'flex flex-col m-auto gap-5 lg:gap-[30px] px-4 md:px-[60px] max-w-[1320px]'
            }
        >
            <Header />
            <Hero />
            <About />
            <Infrastructure />
            <Hall />
            <Additional />
            <Advantages />
        </div>
    )
}

export default Index
