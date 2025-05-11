'use client'

import { useState } from "react";
type Option = {
    label: string;
    value: string;
}

function SelectedTab({option, onClick}: {option: Option, onClick: () => void}) {
    return (
        <span className="px-2 py-1 rounded-md bg-gray-800 hover:bg-red-700 mx-1 text-white cursor-pointer" onClick={onClick}>{option.label}</span>
    )    
}

export function MultiSelect({ options }: { options: Option[] }) {
    const [selected, setSelected] = useState<Option[]>([]);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex rounded-md border border-gray-200 p-2 flex-col gap-2">
            <div className="border border-gray-200 rounded-md p-2 cursor-pointer " onClick={() => setIsOpen(true)}>
                {selected?.length > 0 ? selected.map((option) => <SelectedTab option={option} onClick={() => setSelected((prev) => prev.filter((prevOption) => prevOption.value !== option.value))} key={option.value} />) : <p className="font-semibold">Select an option</p>}
            </div>
            {
                isOpen ? (
                    <>
                        <p className="text-sm text-gray-500">Select an option</p>
                        <div className="flex flex-col gap-2">
                            {options.filter((option) => !selected?.map((option) => option.value).includes(option.value)).map((option) => (
                                <div className="border border-gray-400 rounded-md p-2 cursor-pointer hover:bg-gray-800" onClick={() => { setSelected((prev) => [...prev, option]) }} key={option.value}>
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