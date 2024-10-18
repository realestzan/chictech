// image-wrapper.tsx

import React, { useState } from 'react';

interface ImageWrapperProps {
    children: React.ReactElement<{ className?: string }>;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [lastClientX, setLastClientX] = useState(0);
    const [lastClientY, setLastClientY] = useState(0);

    const handleImageClick = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setScale(1);
        setTranslateX(0);
        setTranslateY(0);
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY;
        let newScale = scale - delta * 0.01;
        newScale = Math.min(Math.max(newScale, 1), 5); // Limit scale between 1 and 5
        setScale(newScale);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setLastClientX(e.clientX);
        setLastClientY(e.clientY);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastClientX;
        const deltaY = e.clientY - lastClientY;
        setTranslateX(translateX + deltaX);
        setTranslateY(translateY + deltaY);
        setLastClientX(e.clientX);
        setLastClientY(e.clientY);
    };

    // Clone the child to add Tailwind classes
    const clonedChild = React.isValidElement(children) ? React.cloneElement(children, {
        className: `${(children.props as React.HTMLAttributes<HTMLElement>).className || ''} max-w-full max-h-full`.trim(),
    }) : children;

    return (
        <>
            <div onClick={handleImageClick}>{children}</div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="select-none right-0 left-0 bg-white/10 rounded-xl flex justify-center"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        style={{
                            cursor: isDragging ? 'grabbing' : 'grab',
                            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                        }}
                    >
                        {clonedChild}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageWrapper;
