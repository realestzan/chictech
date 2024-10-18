'use client'

import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { ChevronRight, Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const products = [
    { id: 1, name: "Les Deux® Scott Sunglasses Brown Turtle", category: "Sunglasses", image: "/placeholder.avif" },
    { id: 2, name: "Nike® Sportswear Therma FIT Legacy", category: "Hooded Jacket", image: "/placeholder.avif" },
    { id: 3, name: "SEEN® Curly Creme Fragrance Free", category: "Skin and Hair", image: "/placeholder.avif" },
    { id: 4, name: "Nike Universa Women's Medium-Support Mid-Rise", category: "Gym Leggings", image: "/placeholder.avif" },
]

const brands = ['POLICE', 'Ray-Ban', 'GUCCI']

export default function ProductDetail() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const slideVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }

    return (
        <div className="min-h-screen bg-white">
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                            ☰
                        </button>
                        <Link href="/" className="text-2xl font-semibold">Promax™</Link>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/man" className="hover:text-gray-600">Man</Link>
                        <Link href="/woman" className="hover:text-gray-600">Woman</Link>
                        <Link href="/tech" className="hover:text-gray-600">Tech</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button aria-label="Search">
                            <Search className="w-6 h-6" />
                        </button>
                        <button aria-label="Shopping cart" className="relative">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                7
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg"
                    >
                        <div className="p-4">
                            <button onClick={() => setIsMenuOpen(false)} className="mb-4">✕ Close</button>
                            <nav className="flex flex-col space-y-4">
                                <Link href="/man" className="hover:text-gray-600">Man</Link>
                                <Link href="/woman" className="hover:text-gray-600">Woman</Link>
                                <Link href="/tech" className="hover:text-gray-600">Tech</Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <section className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
                                }}
                            >
                                <div className="bg-gray-100 aspect-square mb-4">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <motion.section
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={slideVariants}
                    className="bg-gray-100 py-16"
                >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-8 md:mb-0">
                                <h2 className="text-6xl font-semibold mb-4">
                                    NEW PROMAX
                                    <br />
                                    EYEWEAR
                                    <br />
                                    COLLECTION
                                </h2>
                                <p className="text-gray-600 mb-4 max-w-md">
                                    An iconic collection inspired by the past and reinvented for
                                    the future: discover the new sunglasses for him and her.
                                </p>
                                <Link
                                    href="/collection"
                                    className="inline-flex items-center text-black hover:text-gray-600"
                                >
                                    DISCOVER THE COLLECTION <ChevronRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end gap-8">
                                {brands.map((brand, index) => (
                                    <motion.img
                                        key={brand}
                                        src={`/placeholder.svg`}
                                        alt={brand}
                                        className="h-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>

            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="hover:text-gray-300">Our Story</Link></li>
                                <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                                <li><Link href="/press" className="hover:text-gray-300">Press</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                            <ul className="space-y-2">
                                <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                                <li><Link href="/shipping" className="hover:text-gray-300">Shipping</Link></li>
                                <li><Link href="/returns" className="hover:text-gray-300">Returns</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0  01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        <p>&copy; 2023 Promax™. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}