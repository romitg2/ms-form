'use client'

import { useState } from "react";
import type { FormData } from "@/app/page";


export default function useMultistepForm(formData: FormData[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const currentPageFields = formData[currentStep].fields;
  const currentPageTitle = formData[currentStep].title;

  function next() {
    if (canGoNext()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }

  function prev() {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  }

  function goTo(step: number) {
    setCurrentStep(step);
  }

  function canGoNext() {
    return currentStep < formData.length - 1;
  }

  return {
    currentStep,
    next,
    prev,
    goTo,
    canGoNext,
    currentPageFields,
    currentPageTitle,
  };
}
