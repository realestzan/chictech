export default function ProductImages() {
    return (
        <div className="grid grid-cols-3 gap-4 mb-12">
            <img src="/cloth_1.jpg" alt="Product in use 1" className="w-full aspect-square object-cover" />
            <img src="/cloth_2.jpg" alt="Product in use 2" className="w-full aspect-square object-cover" />
            <img src="/cloth_3.jpg" alt="Product in use 3" className="w-full aspect-square object-cover" />
        </div>
    )
}