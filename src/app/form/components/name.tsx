import { Button } from "@/components/button";
import { FormContainer } from "@/components/formContainer";
import { useFormState } from "@/contexts/FormContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type TFormValues = {
  name: string;
};

export const formSchema = yup.object().shape({
  name: yup.string().trim().required("Digite seu nome"),
});

const Name = () => {
  const { onHandleNext, setFormData, formData } = useFormState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: formData,
    resolver: yupResolver(formSchema),
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="w-full h-full flex py-6 px-3 flex-col justify-between"
    >
      <div className="flex">
        <Link href="/">
          <Button variant="noButtonPrimary" size="3rem">
            <Icon icon="ion:chevron-back-outline" width={16} />
          </Button>
        </Link>
      </div>
      <FormContainer>
        <h2 className="title1">Começa falando pra gente qual é o seu nome:</h2>
        <input
          className="input"
          type="text"
          placeholder="digite seu nome"
          {...register("name")}
        />
        <span className="text-sm text-red-500">{errors.name?.message}</span>
      </FormContainer>
      <div className="w-full flex flex-shrink-0 justify-end">
        <Button variant="continue" size="12.5rem">
          Continuar
          <Icon icon="solar:arrow-right-broken" width={24} />
        </Button>
      </div>
    </form>
  );
};
export default Name;
