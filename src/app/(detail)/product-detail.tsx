'use client'

import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Facebook, Instagram, Menu, Search, Twitter, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import AnimatedModel from './animated-model'
import TryInput from './try-input'

const navItems = [
    { name: 'Home', href: '/', current: true },
    { name: 'New', href: '/', current: false },
    { name: 'Popular', href: '/', current: false },
    { name: 'Career', href: '/', current: false },
]

const features = [
    { title: 'Fashion Forward', description: 'Stay ahead of the trends with our latest shirt designs. Fashion that speaks volumes.' },
    { title: 'Comfort Redefined', description: 'Our shirts are designed with your comfort in mind. Feel great, look great.' },
]

export default function ProductTry() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
                <nav className="container mx-auto flex items-center justify-between">
                    <Link href="/detail" className="text-2xl font-semibold">
                        Chictech
                    </Link>
                    <ul className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`${item.current
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-500 hover:text-gray-900'
                                        } px-4 py-2 rounded-full transition duration-300`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <button aria-label="Search">
                            <Search className="w-6 h-6" />
                        </button>
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white absolute top-16 inset-x-0 z-50 shadow-md"
                    >
                        <ul className="py-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`block px-4 py-2 ${item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 mb-8 lg:mb-0"
                    >
                        <h1 className="text-4xl md:text-6xl font-thin mb-4 leading-tight">
                            Chictech Shirts: Style and Comfort Combined
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-6">
                            Discover the perfect blend of style and comfort with Chictech shirts. Elevate your wardrobe with our timeless designs.
                        </p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                                    Try It Now
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <TryInput />
                            </DialogContent>
                        </Dialog>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 relative h-[50vh] lg:h-[70vh]"
                    >
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <AnimatedModel />
                            <Environment preset="city" />
                            <OrbitControls enableZoom={false} />
                        </Canvas>
                        <motion.div
                            className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="font-semibold">$45</span>
                        </motion.div>
                        <motion.div
                            className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-md max-w-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h3 className="font-semibold mb-2">Chictech Classic Shirt</h3>
                            <p className="text-sm text-gray-600">
                                Experience the ultimate in comfort and style with our classic shirt. Perfect for any occasion.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="mt-12 space-y-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-400" />
                        </motion.div>
                    ))}
                </div>
            </main>

            <footer className="fixed bottom-6 right-6 flex space-x-4">
                {[
                    { Icon: Facebook, label: 'Facebook' },
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Twitter, label: 'Twitter' },
                ].map(({ Icon, label }) => (
                    <motion.div
                        key={label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="#" aria-label={label}>
                            <Icon className="w-6 h-6 text-gray-600 hover:text-gray-900 transition duration-300" />
                        </Link>
                    </motion.div>
                ))}
            </footer>
        </div>
    )
}