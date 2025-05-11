'use client'

import useMultistepForm from "@/hooks/useMultistepForm";
import FormPage from "./components/FormPage";

export type FormField = { name: string; label: string; type: string; options?: { label: string; value: string }[] };

export type FormData = {
  title: string;
  fields: FormField[];
}

export default function Home() {

  const formData: FormData[] = [
    {
      title: "Step 1", fields: [
        { name: "name", label: "Name", type: "text" },
        { name: "age", label: "Age", type: "number" },
        { name: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }] },
      ]
    },
    {
      title: "Step 2", fields: [
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
      ]
    },
    {
      title: "Step 3", fields: [
        { name: "hobbies", label: "Hobbies", type: "multi-select", options: [{ label: "Reading", value: "reading" }, { label: "Gaming", value: "gaming" }, { label: "Coding", value: "coding" }] },
      ]
    },
  ];

  const { currentStep, next, prev, goTo, canGoNext, currentPageFields, currentPageTitle } = useMultistepForm(formData);

  function submitHandler() {
    alert("Submit");
    goTo(0);
  }


  return (
    <div className="flex w-1/2 mx-auto flex-col gap-4">
      <h1 className="text-2xl font-bold">{currentPageTitle}</h1>
      <FormPage fields={currentPageFields} />
      <div className="flex items-center justify-end gap-4">
        {currentStep > 0 && <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={prev}>Previous</button>}
        {canGoNext() ? <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={next}>Next</button> : <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={submitHandler}>Submit</button>}
      </div>
    </div>
  );
}
