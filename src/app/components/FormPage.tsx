import { SingleSelect } from "./SingleSelect";
import type { FormField } from "../page";

export default function FormPage({ fields }: { fields: FormField[] }) {
    return (
        <div className="flex flex-col gap-4">
            {fields.map((field) => (
                <div className="flex flex-col gap-2" key={field.name}>
                    {field.type === "select" && <SingleSelect options={field.options || []} />}
                    {field.type !== "select" && <label className="text-sm font-medium text-gray-200" htmlFor={field.name}>{field.label}</label>}
                    {field.type !== "select" && <input className="border border-gray-200 rounded-md p-2" type={field.type} id={field.name} name={field.name} />}
                </div>
            ))}
        </div>
    );
}