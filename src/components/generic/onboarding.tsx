import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import { useState } from 'react';

interface Section {
    title: string;
    description: string;
    img: string;
    icon: JSX.Element;
}

interface OnboardingProps {
    trigger: React.ReactNode;
    sections: Section[];
}

const Onboarding: React.FC<OnboardingProps> = ({ trigger, sections }) => {
    const [currentSection, setCurrentSection] = useState(0);

    const nextSection = () => {
        setCurrentSection((prev) => (prev + 1) % sections.length);
    };

    const prevSection = () => {
        setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
    };

    return (
        <Drawer>
            <DrawerTrigger>{trigger}</DrawerTrigger>
            <DrawerContent className="bg-black">
                <main className="flex flex-col my-12">
                    <section className="w-full h-full flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSection}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col items-center text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                                        >
                                            <Image width={100} height={100} src={sections[currentSection].img} alt="Illustration" className="w-fit object-contain rounded-xl" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                                        >
                                            <h2 className="text-xl font-semibold flex items-center gap-4 mt-4">{sections[currentSection].title} {sections[currentSection].icon}</h2>
                                        </motion.div>
                                        <p className="mt-2 text-sm text-zinc-300">
                                            {sections[currentSection].description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="flex justify-between items-center px-4 py-3">
                                <Button
                                    onClick={prevSection}
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-500 hover:text-gray-900"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <div className="flex space-x-2">
                                    {sections.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            className={`h-2 w-2 rounded-full ${index === currentSection ? 'bg-gray-500 scale-200' : 'bg-gray-300'
                                                }`}
                                            animate={{
                                                scale: index === currentSection ? 1.2 : 1,
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    ))}
                                </div>
                                <Button
                                    onClick={nextSection}
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-500 hover:text-gray-900"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-8 mx-auto"
                        >
                            <button onClick={() => {
                                if (currentSection !== sections.length - 1) {
                                    nextSection()
                                }
                            }}
                                className="bg-foreground text-background px-6 py-2 rounded-full hover:bg-foreground/70 transition-colors"
                            >
                                {currentSection === sections.length - 1 ? (
                                    <DrawerClose>Đóng</DrawerClose>
                                ) : 'Tiếp'}
                            </button>
                        </motion.div>
                    </section>
                </main>

            </DrawerContent>

        </Drawer>


    );
};

export default Onboarding;






