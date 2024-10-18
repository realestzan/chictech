import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    isInView: boolean;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({ children, isInView }, ref) => {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 200, damping: 40, duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;


export const AnimatedView = forwardRef<HTMLDivElement, { children: React.ReactNode, delay?: number }>(({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', delay: delay, stiffness: 200, damping: 40 }}
        >
            {children}
        </motion.div>
    )
});

AnimatedView.displayName = 'AnimatedView';


export const AnimatedUpView = forwardRef<HTMLDivElement, { children: React.ReactNode, delay?: number }>(({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: delay, stiffness: 200, damping: 40 }}
        >
            {children}
        </motion.div>
    )
});

AnimatedUpView.displayName = 'AnimatedUpView';