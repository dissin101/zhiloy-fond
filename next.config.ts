import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/zhiloy-fond',
    images: {
        unoptimized: true,
    },
}

export default nextConfig
