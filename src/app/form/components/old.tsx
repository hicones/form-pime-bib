import { Button } from "@/components/button";
import { FormContainer } from "@/components/formContainer";
import { useFormState } from "@/contexts/FormContext";
import { Icon } from "@iconify/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type TFormValues = {
  old: string;
};

export const formSchema = yup.object().shape({
  old: yup.string().trim().required("Selecione uma opção"),
});

const Old = () => {
  const { onHandleNext, setFormData, formData, onHandleBack } = useFormState();
  const {
    setValue,
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
        <Button
          variant="noButtonPrimary"
          size="3rem"
          onClick={() => onHandleBack()}
        >
          <Icon icon="ion:chevron-back-outline" width={16} />
        </Button>
      </div>
      <FormContainer>
        <h2 className="subtitle2">
          Legal, {formData.name}! Agora queremos te conhecer melhor, conta pra
          gente
        </h2>
        <h3 className="title2">qual é a sua faixa etária?</h3>
        <RadioGroup.Root
          className="flex flex-col gap-5"
          defaultValue="default"
          aria-label="View density"
          onValueChange={(value) => setValue("old", value)}
        >
          <div className="flex items-center gap-2">
            <RadioGroup.Item
              className="bg-white border border-dark w-4 h-4 rounded-full hover:bg-tertiary focus:bg-tertiary cursor-pointer"
              value="3"
              id="r1"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
            </RadioGroup.Item>
            <label className="text-dark" htmlFor="r1">
              até 18 anos
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item
              className="bg-white border border-dark w-4 h-4 rounded-full hover:bg-tertiary focus:bg-tertiary cursor-pointer"
              value="4"
              id="r2"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
            </RadioGroup.Item>
            <label className="text-dark text-sm" htmlFor="r2">
              entre 19 e 29 anos
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item
              className="bg-white border border-dark w-4 h-4 rounded-full hover:bg-tertiary focus:bg-tertiary cursor-pointer"
              value="5"
              id="r3"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
            </RadioGroup.Item>
            <label className="text-dark text-sm" htmlFor="r3">
              entre 29 e 39 anos
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item
              className="bg-white border border-dark w-4 h-4 rounded-full hover:bg-tertiary focus:bg-tertiary cursor-pointer"
              value="6"
              id="r4"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
            </RadioGroup.Item>
            <label className="text-dark text-sm" htmlFor="r4">
              mais de 40 anos
            </label>
          </div>
          <span className="text-sm text-red-500">{errors.old?.message}</span>
        </RadioGroup.Root>
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
export default Old;
