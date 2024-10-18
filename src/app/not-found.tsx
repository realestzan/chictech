
export default function page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-[20vh] font-bold">404</h1>
            <p className="text-[3vh] text-gray-700 mb-4">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="text-gray-500 underline text-[2.5vh] hover:text-blue-700 transition duration-300 ease-in-out">
                Go back to Home
            </a>
        </div>
    )
}
