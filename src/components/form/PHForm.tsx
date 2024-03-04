import {Form} from "antd";
import {ReactNode} from "react";
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";

type TFormConfig = {
  resolver? : any;
}

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig


const PHForm = ({children, onSubmit, resolver} : TFormProps) => {
  const submit : SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  }
  const formConfig : TFormConfig = {}

  if(resolver){
    formConfig['resolver'] = resolver
  }
  
  const methods = useForm(formConfig)
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>

  );
};

export default PHForm;