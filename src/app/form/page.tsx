"use client";

import { useFormState } from "@/contexts/FormContext";
import Name from "./components/name";
import ProgressBar from "@/components/progressBar";
import Old from "./components/old";

function ActiveStepFormComponent() {
  const { step, totalSteps } = useFormState();

  switch (step) {
    case 1:
      return <Name />;
    case 2:
      return <Old />;
    case 3:
      return <div>a</div>;
    default:
      return null;
  }
}

const FormPage = () => {
  return (
    <main className="w-full h-screen flex flex-col px-2 pt-14 pb-16 justify-center items-center">
      <ProgressBar progress={5} />
      <ActiveStepFormComponent />
    </main>
  );
};

export default FormPage;
