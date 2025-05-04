import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/zhiloy-fond',
    mages: {
        unoptimized: true,
    },
    images: {
        path: '/zhiloy-fond',
    },
}

export default nextConfig
