'use client'

import { motion, useAnimation } from 'framer-motion'
import { ArrowDownCircle, RefreshCw } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

interface ReloadProps {
    onReload: () => Promise<void>
    threshold?: number
}

export default function Reload({ onReload, threshold = 100 }: ReloadProps) {
    const [scrollY, setScrollY] = useState(0)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const controls = useAnimation()

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    useEffect(() => {
        if (scrollY < -threshold && !isRefreshing) {
            setIsRefreshing(true)
            controls.start({ y: 0, opacity: 1, transition: { duration: 0.3 } })
            onReload().then(() => {
                setIsRefreshing(false)
                controls.start({ y: -50, opacity: 0, transition: { duration: 0.3 } })
            })
        } else if (scrollY < 0 && !isRefreshing) {
            controls.start({ y: Math.min(-scrollY / 2, threshold / 2), opacity: Math.min(-scrollY / threshold, 1) })
        } else {
            controls.start({ y: -50, opacity: 0, transition: { duration: 0.3 } })
        }
    }, [scrollY, threshold, isRefreshing, onReload, controls])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 flex justify-center items-center h-16 bg-gradient-to-b from-gray-100 to-transparent z-50 pointer-events-none"
            initial={{ y: -50, opacity: 0 }}
            animate={controls}
        >
            {isRefreshing ? (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                    <RefreshCw className="w-8 h-8 text-blue-500" />
                </motion.div>
            ) : (
                <ArrowDownCircle className="w-8 h-8 text-blue-500" />
            )}
        </motion.div>
    )
}