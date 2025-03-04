import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Index() {
    const router = useRouter()

    useEffect(() => {
        router.replace('/en')
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
            </div>
        </div>
    )
} 