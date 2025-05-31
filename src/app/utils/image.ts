export function getImagePath(path: string): string {
    //const basePath = process.env.NODE_ENV === 'production' ? '/zhiloy-fond' : ''

    const basePath = ''

    return `${basePath}${path}`
}
