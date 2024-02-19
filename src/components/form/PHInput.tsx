import {Input} from "antd";
import {Controller} from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
}

const PHInput = ({type, name} : TInputProps) => {
  return (
    <>
    <Controller
      name={name}
      render={({field}) => <Input {...field} type={type} id={name} />}
    />
      
    </>
  );
};

export default PHInput;