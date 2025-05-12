import { veronaContent } from '@/app/utils/content/verona'

export enum ProjectEnv {
    verona = 'verona',
}

export const getContent = () => {
    switch (process.env.PROJECT_ENV) {
        case ProjectEnv.verona:
        default:
            return veronaContent
    }
}
