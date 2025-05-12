import { getImagePath } from '@/app/utils/image'
import Star from '@/app/components/icons/Star'
import Education from '@/app/components/icons/Education'
import Mall from '@/app/components/icons/Mall'
import Health from '@/app/components/icons/Health'
import Parking from '@/app/components/icons/Parking'
import Apartment from '@/app/components/icons/Apartment'
import Key from '@/app/components/icons/Key'
import Architecture from '@/app/components/icons/Architecture'
import Lift from '@/app/components/icons/Lift'
import Door from '@/app/components/icons/Door'
import Design from '@/app/components/icons/Design'
import Snow from '@/app/components/icons/Snow'
import Phone from '@/app/components/icons/Phone'
import Location from '@/app/components/icons/Location'
import Clock from '@/app/components/icons/Clock'

const publicPath = (string: string) => getImagePath(`/verona/${string}`)

const PHONE = '+7 707 799 7979'

const LOGO = {
    src: publicPath('logo.svg'),
    alt: 'Verona logo',
    width: 184,
    height: 47,
}

export const veronaContent = {
    seo: {
        title: 'Verona | Жилой фонд',
        description:
            'Жилой комплекс Верона предлагает комфортные квартиры с современной инфраструктурой. Выбирайте идеальное жилье для вашей семьи в удобном районе города.',
        keywords:
            'жилой комплекс, недвижимость, квартиры, новостройка, Верона, жилье, апартаменты, ипотека, Verona, квартиры Караганда',
        robots: 'index, follow',
        openGraph: {
            title: 'Verona | Жилой фонд',
            description:
                'Жилой комплекс Верона предлагает комфортные квартиры с современной инфраструктурой. Выбирайте идеальное жилье для вашей семьи в удобном районе города.',
            type: 'website',
            locale: 'ru_RU',
            siteName: 'Verona | Жилой фонд',
            images: [
                {
                    url: publicPath('hero.png'),
                    alt: 'Жилой комплекс Verona',
                    width: 1320,
                    height: 499,
                },
            ],
        },
    },
    header: {
        logo: LOGO,
        phone: PHONE,
    },
    hero: {
        image: {
            src: publicPath('hero.png'),
            alt: 'Жилой комплекс Verona',
            width: 1320,
            height: 499,
        },
        title: 'VERONA',
        description: 'Гармония городской жизни на вершине комфорта',
        comissionated: 'Сдан в эксплуатацию  в 1 кв 2025 г',
        location: 'Казахстан, Караганда, ул. Касыма Аманжолова, 100',
        tags: [
            'Авторская архитектура',
            'Ландшафтный дизайн двора',
            'Зимняя детская игровая комната',
            'Подземный паркинг',
        ],
    },
    about: {
        title: '<b>Verona</b> — ваш личный остров тишины возле парка.',
        description: `
        <span>
            Verona — это камерный клубный дом в одном из самых престижных и тихих районов Михайловки, где сочетаются уют, приватность и городская динамика.
            Всего 2 минуты пешком до Центрального парка, пара минут на автомобиле — 
            и вы уже в самом сердце города.
        </span>
        </br>
        </br>
        <span>
            Пространство двора организовано с заботой о каждой детали:
            Современная детская площадка — для безопасного и весёлого досуга малышей.
            Игровая комната на первом этаже — в каждом доме, чтобы дети могли наслаждаться активностями даже в непогоду.
        </span>`,
        cards: [
            {
                text: '<span>Комплекс расположен на границе с парковой зоной, что позволяет вам наслаждаться природой и свежим воздухом, не покидая черты города.</span>',
                alt: '',
                image: {
                    src: publicPath('about-card-1.png'),
                },
            },
            {
                text: '<span>В комплексе предусмотрен подземный паркинг, который обеспечивает безопасность вашего автомобиля и сохраняет эстетичность двора.</span>',
                alt: '',
                image: {
                    src: publicPath('about-card-1.png'),
                },
            },
            {
                text: `<span>Verona — это не просто жильё.</span><br/><span>Это стиль жизни для тех, кто ценит спокойствие, природу и близость к центру.</span>`,
                alt: '',
                image: {
                    src: publicPath('about-card-1.png'),
                },
            },
        ],
        carousel: [
            {
                src: publicPath('about-carousel-1.png'),
                alt: 'About Carousel 1',
            },
            {
                src: publicPath('about-carousel-2.png'),
                alt: 'About Carousel 2',
            },
            {
                src: publicPath('about-carousel-3.png'),
                alt: 'About Carousel 3',
            },
            {
                src: publicPath('about-carousel-4.png'),
                alt: 'About Carousel 4',
            },
            {
                src: publicPath('about-carousel-5.png'),
                alt: 'About Carousel 5',
            },
            {
                src: publicPath('about-carousel-6.png'),
                alt: 'About Carousel 6',
            },
            {
                src: publicPath('about-carousel-7.png'),
                alt: 'About Carousel 7',
            },
            {
                src: publicPath('about-carousel-8.png'),
                alt: 'About Carousel 8',
            },
            {
                src: publicPath('about-carousel-9.png'),
                alt: 'About Carousel 9',
            },
            {
                src: publicPath('about-carousel-10.png'),
                alt: 'About Carousel 10',
            },
            {
                src: publicPath('about-carousel-11.png'),
                alt: 'About Carousel 11',
            },
        ],
    },
    infrastructure: {
        image: {
            srcMobile: publicPath('infrastructure-mobile.png'),
            src: publicPath('infrastructure.png'),
            alt: 'Infrastructure',
        },
        items: [
            {
                title: 'Отдых и спорт',
                description: 'Парки, скверы и спортивные площадки',
                icon: <Star />,
            },
            {
                title: 'Образование',
                description: 'Школы, ясли-сады и разные центры.',
                icon: <Education />,
            },
            {
                title: 'Магазины и кофейни',
                description: 'Магазины, экомаркеты, кофейни и рестораны',
                icon: <Mall />,
            },
            {
                title: 'Здоровье',
                description: 'Центры здоровья и аптеки',
                icon: <Health />,
            },
        ],
    },
    hall: {
        image: {
            srcMobile: publicPath('hall-mobile.png'),
            src: publicPath('hall.png'),
            alt: 'Hall',
        },
        title: 'Уютные холлы клубных домов Verona с двумя входными группами –  создают дополнительный комфорт для жильцов',
        description: `
        <span>Холлы Verona – торжественная увертюра к вашей резиденции. Авторская интерпретация модерна, изящный рисунок мрамора на полу, витражные окна, раздвигающие пространство и наполняющие его солнечным светом, завораживающая красота пейзажа за окном погружают в домашнюю атмосферу с первых мгновений пребывания в Verona.</span>
        <br/>
        <br/>
        <span>Дизайнерский лифт обеспечивает плавное движение на ваш этаж, в холл и паркинг.</span>
    `,
        carousel: [
            {
                src: publicPath('hall-carousel-1.png'),
                alt: 'Hall Carousel 1',
            },
            {
                src: publicPath('hall-carousel-2.png'),
                alt: 'Hall Carousel 2',
            },
            {
                src: publicPath('hall-carousel-3.png'),
                alt: 'Hall Carousel 3',
            },
        ],
    },
    additional: {
        title: `
        <span>
            В Verona каждое утро начинается с тишины, наполненной смыслом.
        </span>
        </br>
        <span>
            Здесь время словно замедляется, чтобы 
            вы могли проживать день неспешно, 
            с удовольствием, в гармонии с собой 
            и пространством.
        </span>
    `,
        description: `
        <span>
            Философия уютной и размеренной жизни заложена в каждый элемент этого камерного комплекса.
            Особое внимание уделено пространствам, где можно остановиться и насладиться моментом:
            Уютные беседки, утопающие в зелени двора, приглашают на неторопливые разговоры с близкими, чашку утреннего кофе или вечернее спокойствие под мягким светом фонарей.
        </span>
        <br/>
        <br/>
        <span>
            Для самых юных жителей создана современная детская площадка — безопасная, интерактивная 
            и вдохновляющая на игру.
            А продуманные зоны отдыха позволяют родителям расслабиться и наблюдать, как растёт их счастье.
        </span>
        <br/>
        <br/>
        <span>
            Verona — это не просто жильё.
        </span>
        <br/>
        <br/>
        <span>
            Это место, где возвращается вкус к жизни. Где каждый день — это ваш личный уютный ритуал.
        </span>
    `,
        images: [
            {
                srcMobile: publicPath('additional-mobile-1.png'),
                src: publicPath('additional-1.png'),
                alt: 'Additional image 1',
            },
            {
                srcMobile: publicPath('additional-mobile-2.png'),
                src: publicPath('additional-2.png'),
                alt: 'Additional image 2',
            },
            {
                srcMobile: publicPath('additional-mobile-3.png'),
                src: publicPath('additional-3.png'),
                alt: 'Additional image 3',
            },
        ],
    },
    advantages: {
        carousel: [
            {
                src: publicPath('advantages-carousel-1.png'),
                alt: 'Advantages Carousel 1',
            },
            // TODO: fix
            {
                src: publicPath('about-carousel-1.png'),
                alt: 'Advantages Carousel 1',
            },
        ],
        items: [
            {
                title: 'Подземный паркинг',
                icon: <Parking height={20} width={20} />,
            },
            {
                title: 'Просторные квартиры',
                icon: <Apartment height={20} width={20} />,
            },
            {
                title: '90 квартир',
                icon: <Key height={20} width={20} />,
            },
            {
                title: 'Авторская архитектура',
                icon: <Architecture height={20} width={20} />,
            },
            {
                title: '6 этажные клубные дома с лифтами',
                icon: <Lift height={20} width={20} />,
            },
            {
                title: '2 дома по 3 подъезда в каждом',
                icon: <Door height={20} width={20} />,
            },
            {
                title: 'Ландшафтный дизайн двора',
                icon: <Design height={20} width={20} />,
            },
            {
                title: 'Зимняя детская игровая комната',
                icon: <Snow height={20} width={20} />,
            },
        ],
    },
    environment: {
        items: [
            {
                time: '2 минуты',
                description: 'Центральный Парк',
            },
            {
                time: '4 минуты',
                description: 'Детские сады & Центры',
            },
            {
                time: '5 минут',
                description: 'Гостиница / Fitness Центр Cosmonaut',
            },
            {
                time: '6 минут',
                description: 'Супер маркет Южный & Аян',
            },
            {
                time: '7 минут',
                description: 'Гостиница Чайка',
            },
            {
                time: '8 минут',
                description: 'Ресторан / Банкетный зал Villa Borghese',
            },
            {
                time: '9 минут',
                description: 'Зоопарк',
            },
            {
                time: '10 минут',
                description: 'ТРЦ Азия / ЦУМ & Сity Mall',
            },
        ],
    },
    address: {
        coordinates: [49.797976, 73.066012],
        items: [
            {
                icon: <Phone />,
                text: PHONE,
            },
            {
                icon: <Location />,
                text: 'Казахстан, Караганда, ул. Касыма Аманжолова, 100',
            },
            {
                icon: <Clock />,
                text: '10:00 – 19:00 (без выходных и без перерывов)',
            },
        ],
    },
    feedback: {
        srcMobile: publicPath('feedback-mobile.png'),
        src: publicPath('feedback.png'),
        alt: 'Alt Feedback',
        scriptSrc: 'https://cdn-ru.bitrix24.kz/b15829360/crm/form/loader_61.js',
        scriptData: 'inline/61/0vasu8',
    },
    footer: {
        phone: PHONE,
        logo: LOGO,
        zhiloyFondLogo: {
            src: getImagePath('/zhiloy-fond-logo.png'),
            alt: 'Zhiloy Fond',
            width: 126,
            height: 105,
        },
    },
}
