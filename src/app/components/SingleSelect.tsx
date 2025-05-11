'use client'

import { useState } from "react";

type Option = {
    label: string;
    value: string;
}

export function SingleSelect({ options }: { options: Option[] }) {
    const [selected, setSelected] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex rounded-md border border-gray-200 p-2 flex-col gap-2">
            <div className="border border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-800" onClick={() => setIsOpen(true)}>
                <p className="font-semibold">{selected?.label}</p>
            </div>
            {
                isOpen ? (
                    <>
                        <p className="text-sm text-gray-500">Select an option</p>
                        <div className="flex flex-col gap-2">
                            {options.filter((option) => option.value !== selected?.value).map((option) => (
                                <div className="border border-gray-400 rounded-md p-2 cursor-pointer hover:bg-gray-800" onClick={() => {setSelected(option); setIsOpen(false)}} key={option.value}>
                                    <p className="text-gray-300">{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : 
                (
                    <div className="cursor-pointer p-2" onClick={() => setIsOpen(true)}>
                        <p className="text-sm underline text-gray-200">Show Options</p>
                    </div>
                )
            }
        </div>
    );
}