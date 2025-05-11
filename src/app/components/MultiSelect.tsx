

export function MultiSelect({ options }: { options: { label: string; value: string }[] }) {
    return (
        <select className="border border-gray-300 rounded-md p-2" multiple>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}