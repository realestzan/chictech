export default function ProductVideo() {
    return (
        <div className="aspect-video bg-gray-100 mb-12 relative">
            <img
                src="/placeholder.avif"
                alt="Product video placeholder"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}