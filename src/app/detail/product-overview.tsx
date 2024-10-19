'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import Drawer from "@/components/generic/drawer"
import Side from "@/components/generic/side"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import ProductDetail from "../(detail)/detail"
import ProductTry from "../(detail)/product-detail"

// Mock data for products
const mockProducts = [
    { id: 1, name: 'Classic Black Coat', price: 50, image: '/img_main.avif', tags: ['classic', 'black', 'coat', 'fashion', 'style', 'winterwear'] },
    { id: 2, name: 'Denim Jacket', price: 45, image: '/img_1.avif', tags: ['denim', 'jacket', 'casual', 'fashion', 'style'] },
    { id: 3, name: 'Leather Boots', price: 80, image: '/img_2.avif', tags: ['leather', 'boots', 'shoes', 'fashion', 'winterwear'] },
    { id: 4, name: 'Wool Scarf', price: 25, image: '/img_3.avif', tags: ['wool', 'scarf', 'accessories', 'winterwear'] },
    { id: 5, name: 'Knit Sweater', price: 55, image: '/cloth_1.jpg', tags: ['knit', 'sweater', 'fashion', 'style', 'winterwear'] },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ProductOverview() {
    const [selectedSize, setSelectedSize] = useState('M')
    const [open, setOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(mockProducts)
    const [selectedProduct, setSelectedProduct] = useState(mockProducts[0])

    useEffect(() => {
        if (searchTerm) {
            const filtered = mockProducts.filter(product =>
                product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            )
            setFilteredProducts(filtered)
        } else {
            setFilteredProducts(mockProducts)
        }
    }, [searchTerm])

    const handleProductSelect = (product: typeof mockProducts[0]) => {
        setSelectedProduct(product)
        setSearchOpen(false)
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="container mx-auto px-4 py-8"
        >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Side
                    open={open}
                    setOpen={setOpen}
                    title="Product Information"
                >
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h2>
                        <p className="text-lg mb-4">${selectedProduct.price}</p>
                        <p className="mb-4">This {selectedProduct.name} is a perfect addition to your wardrobe. It features high-quality materials and a stylish design that will keep you looking great.</p>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProduct.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <Button onClick={() => setOpen(false)} className="w-full">Close</Button>
                    </div>
                </Side>

                <motion.div
                    className="aspect-square bg-gray-100 relative rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        width={300}
                        height={300}
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div>
                    <motion.h1
                        className="text-3xl font-semibold mb-4"
                        variants={fadeInUp}
                    >
                        {selectedProduct.name}
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-4"
                        variants={fadeInUp}
                    >
                        ${selectedProduct.price}
                    </motion.p>
                    <motion.div className="mb-4" variants={fadeInUp}>
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
                    </motion.div>
                    <motion.div className="mb-4" variants={fadeInUp}>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                            type="number"
                            id="quantity"
                            defaultValue="1"
                            min="1"
                            className="w-20 mt-2"
                        />
                    </motion.div>
                    <motion.div className="flex space-x-4 mb-4" variants={fadeInUp}>
                        <Button onClick={() => setOpen(true)} className="flex-grow">Add to Cart</Button>
                        <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </motion.div>
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

                    <motion.div className="mt-4" variants={fadeInUp}>
                        <h2 className="text-lg font-semibold mb-2">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {selectedProduct.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-4"
                        variants={fadeInUp}
                    >
                        <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <Search className="mr-2 h-4 w-4" />
                                    Search by Tag
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Search Products by Tag</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="flex items-center gap-4">
                                        <Input
                                            id="tag-search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Enter tag..."
                                            className="col-span-3"
                                        />
                                        {searchTerm && (
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => setSearchTerm('')}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                    <div className="grid gap-2 max-h-[300px] overflow-y-auto">
                                        <AnimatePresence>
                                            {filteredProducts.map((product) => (
                                                <motion.div
                                                    key={product.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full justify-start"
                                                        onClick={() => handleProductSelect(product)}
                                                    >
                                                        <Image
                                                            width={300}
                                                            height={300}
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-12 h-12 object-cover rounded mr-4"
                                                        />
                                                        <div className="text-left">
                                                            <p className="font-semibold">{product.name}</p>
                                                            <p className="text-sm text-gray-500">${product.price}</p>
                                                        </div>
                                                    </Button>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}