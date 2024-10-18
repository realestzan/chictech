import React, { useRef } from 'react';

export default function ImageUpload({ trigger, onImageUpload }: { trigger: React.ReactNode, onImageUpload: (image: string) => void }) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files?.[0];
                if (file) {
                    console.log("File selected:", file);
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        console.log("File read as:", reader.result);
                        onImageUpload(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                }
            };

            handleFileSelect(event);
        }
    }

    return (
        <div
            onClick={() => {
                console.log("File input triggered");
                fileInputRef.current?.click();
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                ref={fileInputRef}
            />
            {trigger}
        </div>
    );

}
