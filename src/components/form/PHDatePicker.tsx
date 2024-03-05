import {DatePicker, Form} from "antd";
import {Controller} from "react-hook-form";

type TDatePIckerProps = {
  name: string;
  label?: string;
}

const PHDatePicker = ({name, label} : TDatePIckerProps) => {
  return (
    <Controller
      name={name}
      render={({field}) => 
      <Form.Item label={label}>
        <DatePicker {...field} size="large" id={name} style={{width: '100%'}} />
      </Form.Item>
    }
    />
  );
};

export default PHDatePicker;