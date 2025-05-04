import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/zhiloy-fond',
    assetPrefix: '/zhiloy-fond',
    images: {
        unoptimized: true,
    },
}

export default nextConfig
