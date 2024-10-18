'use client'
import { ChatBubbleOvalLeftIcon, CogIcon, HashtagIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const currentPath = usePathname();

    const links = [
        { href: '/home', icon: HomeIcon, emoji: '🏠' },
        { href: '/match', icon: UsersIcon, emoji: '💞' },
        { href: '/feed', icon: HashtagIcon, emoji: '#️⃣' },
        { href: '/chat', icon: ChatBubbleOvalLeftIcon, emoji: '💬' },
        { href: '/settings', icon: CogIcon, emoji: '🎛️' },
    ];

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (/^\/chat(\/.+)?$/.test(currentPath) && currentPath !== '/chat') {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    }, [currentPath]);

    return (
        <main className={`px-4 fixed bottom-0 left-0 right-0 pb-8 z-20 bg-black ${isHidden && 'hidden'}`}>
            <motion.nav
                className={`transform -translate-x-1/2 p-4 rounded-xl bg-black 
                    ${isHidden ? '' : 'translate-y-0'
                    } transition-transform duration-300 ease-in-out z-50`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <motion.div
                    className="flex justify-around items-center gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                when: "beforeChildren",
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {links.map(({ href, icon: Icon }) => (
                        <motion.div
                            key={href}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1 },
                            }}
                        >
                            <Link href={href}>
                                <motion.div
                                    className={`px-4 py-2 rounded-full text-xl font-medium transition-colors duration-200 ${currentPath === href
                                        ? 'bg-gray-500/50 shadow-xl shadow-gray-500/40'
                                        : 'text-white hover:bg-white/10'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="h-6 w-6" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.nav>
        </main>
    )
}