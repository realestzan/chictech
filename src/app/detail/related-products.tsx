import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function RelatedProducts() {
    const products = [
        { name: 'Slim Bag', price: '$1,750', image: '/img_1.avif' },
        { name: 'Flapover Sling', price: '$1,100', image: '/img_2.avif' },
        { name: 'Aero International', price: '$2,950', image: '/img_3.avif' },
    ]

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Customer also viewed</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <Card key={index}>
                        <CardContent className="p-4">
                            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover mb-4" />
                            <h3 className="font-semibold">{product.name}</h3>
                        </CardContent>
                        <CardFooter>
                            <p>{product.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}