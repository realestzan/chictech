import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { DrawerClose } from '../ui/drawer';

interface ComboboxProps<T> {
    data: T[];
    searchKeys: (keyof T)[];
    onSelect: (item: T) => void;
    selectedItem: T | null;
    placeholder?: string;
    renderItem?: (item: T) => React.ReactNode;
    itemKey: (item: T) => string;
}

export function Combobox<T>({
    data,
    searchKeys,
    onSelect,
    selectedItem,
    placeholder = 'Search...',
    renderItem,
    itemKey,
}: ComboboxProps<T>) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) =>
        searchKeys.some((key) =>
            String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className='overflow-scroll p-4 min-h-[70vh]'>
            <input
                type='text'
                placeholder={placeholder}
                className='w-full p-4 rounded-md bg-white/20'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredData.map((item, index) => (
                <DrawerClose
                    key={itemKey(item)}
                    className='w-full'
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className={`flex items-start text-left justify-start space-x-4 p-4 border-b rounded-xl ${selectedItem && itemKey(selectedItem) === itemKey(item)
                            ? 'bg-white/10 '
                            : ''
                            }`}
                        onClick={() => onSelect(item)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {renderItem ? (
                            renderItem(item)
                        ) : (
                            <>
                                <span>{itemKey(item)}</span>
                                <span>{JSON.stringify(item)}</span>
                            </>
                        )}
                    </motion.div>
                </DrawerClose>
            ))}
        </div>
    );
}
