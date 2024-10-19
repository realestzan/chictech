import { Button } from "@/components/ui/button"

export default function ProductDescription() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Classic Oxford Shirt</h2>
            <p className="mb-4">
                Our Classic Oxford Shirt is a timeless wardrobe staple, crafted from premium cotton for ultimate comfort and durability. Perfect for both casual and formal occasions, this shirt features a button-down collar and a tailored fit that ensures you look sharp and stylish.
            </p>
            <div className="flex space-x-4">
                <Button variant="link">View all key features</Button>
                <Button variant="link">View full product details</Button>
            </div>
        </div>
    )
}