export function getImagePath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/zhiloy-fond' : ''
    return `${basePath}${path}`
}
