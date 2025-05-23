'use client'
import { YMaps, Map as YMap, Placemark } from '@iminside/react-yandex-maps'

interface MapProps {
    coordinates: number[]
}

const Map = ({ coordinates }: MapProps) => {
    return (
        <div
            className={
                'w-full h-full rounded-[30px] aspect-[1/0.8] lg:aspect-[3/1.2] overflow-hidden'
            }
        >
            <YMaps>
                <YMap
                    className={'w-full h-full'}
                    defaultState={{ center: coordinates, zoom: 17 }}
                >
                    <Placemark
                        options={{ preset: 'islands#blueHomeCircleIcon' }}
                        geometry={coordinates}
                    />
                </YMap>
            </YMaps>
        </div>
    )
}

export default Map
