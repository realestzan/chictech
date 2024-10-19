'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { ArrowRight, Facebook, Instagram, Search, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import AnimatedModel from './animated-model'
import TryInput from './try-input'

export default function ProductTry() {

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white py-4 px-6">
                <nav className="container mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-semibold">Chictech</Link>
                    <ul className="hidden md:flex space-x-6">
                        <li><Link href="/" className="bg-gray-100 px-4 py-2 rounded-full">Home</Link></li>
                        <li><Link href="/" className="hover:text-gray-600">New</Link></li>
                        <li><Link href="/" className="hover:text-gray-600">Popular</Link></li>
                        <li><Link href="/" className="hover:text-gray-600">Career</Link></li>
                    </ul>
                    <button aria-label="Search">
                        <Search className="w-6 h-6" />
                    </button>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2 mb-8 md:mb-0"
                    >
                        <h1 className="text-6xl font-thin mb-4 leading-relaxed">
                            Chictech Shirts: Style and Comfort Combined
                        </h1>
                        <p className="text-xl text-gray-600 mb-6">
                            Discover the perfect blend of style and comfort with Chictech shirts. Elevate your wardrobe with our timeless designs.
                        </p>
                        <Dialog>
                            <DialogTrigger>
                                <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 z-20">Try It Now</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <TryInput />
                            </DialogContent>
                        </Dialog>
                    </motion.div>

                    <div className="h-screen w-[50vw] absolute right-0 top-[20vh] bg-transparent rounded-lg overflow-hidden">
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <Suspense fallback={null}>
                                <AnimatedModel />
                                <Environment preset="city" />
                            </Suspense>
                            <OrbitControls />
                        </Canvas>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2 relative"
                    >
                        {/* <img
                            src="/placeholder.avif"
                            alt="Man wearing Chictech Shirt"
                            className="w-full h-auto"
                        /> */}
                        <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md">
                            <span className="font-semibold">$45</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-md max-w-xs">
                            <h3 className="font-semibold mb-2">Chictech Classic Shirt</h3>
                            <p className="text-sm text-gray-600">
                                Experience the ultimate in comfort and style with our classic shirt. Perfect for any occasion.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">Fashion Forward</h3>
                            <p className="text-gray-600">
                                Stay ahead of the trends with our latest shirt designs. Fashion that speaks volumes.
                            </p>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">Comfort Redefined</h3>
                            <p className="text-gray-600">
                                Our shirts are designed with your comfort in mind. Feel great, look great.
                            </p>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                    </motion.div>
                </div>
            </main>

            <footer className="fixed bottom-6 right-6 flex space-x-4">
                <Link href="#" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                </Link>
            </footer>
        </div>
    )
}