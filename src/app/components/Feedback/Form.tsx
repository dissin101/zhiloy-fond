'use client'
import { useEffect } from 'react'

interface FormProps {
    src: string
    data: string
}

const Form = ({ src, data }: FormProps) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = src + '?' + ((Date.now() / 180000) | 0)
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return <script data-b24-form={data} data-skip-moving="true"></script>
}

export default Form
