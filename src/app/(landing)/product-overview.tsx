import Drawer from "@/components/generic/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart } from 'lucide-react'
import { useState } from 'react'
import ProductDetail from "../(detail)/detail"
import ProductTry from "../(detail)/product-detail"

export default function ProductOverview() {
    const [selectedSize, setSelectedSize] = useState('M')

    return (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="aspect-square bg-gray-100 relative">
                <img
                    src="/img_main.avif"
                    alt="Classic White Shirt"
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h1 className="text-3xl font-semibold mb-4">Classic Black Coat</h1>
                <p className="text-xl mb-4">$50</p>
                <div className="mb-4">
                    <Label htmlFor="size">Size</Label>
                    <RadioGroup
                        defaultValue="M"
                        onValueChange={setSelectedSize}
                        className="flex space-x-2 mt-2"
                    >
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <div key={size} className="flex items-center space-x-2">
                                <RadioGroupItem value={size} id={size} />
                                <Label htmlFor={size}>{size}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <div className="mb-4">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                        type="number"
                        id="quantity"
                        defaultValue="1"
                        min="1"
                        className="w-20 mt-2"
                    />
                </div>
                <div className="flex space-x-4 mb-4">
                    <Button className="flex-grow">Add to Cart</Button>
                    <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
                <Drawer
                    trigger={
                        <Button variant={'ghost'} className="flex-grow w-full">See how it fits you</Button>
                    }
                    content={
                        <main className="overflow-scroll max-h-screen w-screen">
                            <ProductTry />
                        </main>
                    }
                />
                <Drawer
                    trigger={
                        <Button variant={'ghost'} className="flex-grow w-full">More Detail</Button>
                    }
                    content={
                        <ProductDetail />
                    }
                />
            </div>
        </div>
    )
}