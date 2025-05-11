import { SingleSelect } from "./SingleSelect";
import type { FormField } from "../page";
import { MultiSelect } from "./MultiSelect";

export default function FormPage({ fields }: { fields: FormField[] }) {
    return (
        <div className="flex flex-col gap-4">
            {fields.map((field) => (
                <div className="flex flex-col gap-2" key={field.name}>
                    {field.type === "select" && <SingleSelect options={field.options || []} />}
                    {field.type === "multi-select" && <MultiSelect options={field.options || []} />}
                    {(field.type === "text" || field.type === "number" || field.type === "email" || field.type === "password") && <label className="text-sm font-medium text-gray-200" htmlFor={field.name}>{field.label}</label>}
                    {(field.type === "text" || field.type === "number" || field.type === "email" || field.type === "password") && <input className="border border-gray-200 rounded-md p-2" type={field.type} id={field.name} name={field.name} />}
                </div>
            ))}
        </div>
    );
}