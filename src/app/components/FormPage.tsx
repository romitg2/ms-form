export default function FormPage({ fields }: { fields: { name: string; label: string; type: string }[] }) {
    return (
        <div className="flex flex-col gap-4">
            {fields.map((field) => (
                <div className="flex flex-col gap-2" key={field.name}>
                    <label className="text-sm font-medium text-gray-200" htmlFor={field.name}>{field.label}</label>
                    <input className="border border-gray-300 rounded-md p-2" type={field.type} id={field.name} name={field.name} />
                </div>
            ))}
        </div>
    );
}