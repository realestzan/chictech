"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Camera, Eye, ShoppingBag, Tag } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'

export default function Component() {
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full max-w-6xl mx-auto py-4 px-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2"
                >
                    <span className="text-2xl">Chictech</span>
                </motion.div>
                <Button variant="ghost">Sign in</Button>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-4"
                >
                    Revolutionizing Fashion E-commerce
                    <br />
                    with 3D and AI
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-gray-600 text-center mb-8 max-w-2xl"
                >
                    Experience the future of online shopping with our cutting-edge 3D and AI technologies.
                    Visualize, customize, and shop like never before.
                </motion.p>
                <Link href='/shop'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Button size="lg">Start Shopping</Button>
                    </motion.div>
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 w-full max-w-4xl"
                >
                    <Card className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">Featured / FashionTech 2024</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Introduction</h3>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Goal</h3>
                                <div className="h-4 bg-blue-500 rounded w-full"></div>
                            </div>
                        </div>
                    </Card>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2"
                    >
                        <Card className="bg-white p-4 rounded-lg shadow-lg w-64">
                            <h3 className="font-semibold mb-4">Explore Features</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: ShoppingBag, label: '3D Shopping' },
                                    { icon: Camera, label: 'Virtual Try-On' },
                                    { icon: Eye, label: 'AI Recommendations' },
                                    { icon: Tag, label: 'Personalized Offers' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer ${selectedFeature === item.label ? 'bg-blue-100' : 'bg-gray-100'
                                            }`}
                                        onClick={() => setSelectedFeature(item.label)}
                                    >
                                        <item.icon className="w-6 h-6 mb-2" />
                                        <span className="text-xs text-center">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="mt-16 text-center max-md:hidden"
                >
                    <p className="text-sm text-gray-600 mb-2">Join 100,000+ fashion enthusiasts</p>
                    <div className="flex justify-center -space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-semibold">
                            1234+
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}
