import { ArrowLeftCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-md text-center">
                <h1 className="text-8xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className=" mb-6">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 border shadow rounded-md text-sm font-medium transition-colors"
                >
                    <ArrowLeftCircle className="h-4 w-4 mr-2" />
                    Go back home
                </Link>
            </div>
        </div>
    )
}
