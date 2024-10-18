import { Button } from "@/components/ui/button"

export default function CallToAction() {
    return (
        <div className="bg-gray-100 p-8 flex items-center justify-between mb-12">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Discover your Perfect Outfit with us!</h2>
                <p className="mb-4">Find the ideal bag to complement your style and meet your needs.</p>
                <Button>Shop now</Button>
            </div>
            <div className="hidden md:block">
                <img src="/outfit.avif" alt="Featured bag" className="w-64 h-64 object-cover" />
            </div>
        </div>
    )
}