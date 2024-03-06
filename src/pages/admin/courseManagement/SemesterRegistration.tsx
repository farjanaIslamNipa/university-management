import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.types";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import {useAddRegisteredSemesterMutation} from "../../../redux/features/admin/courseManagementApi";

const SemesterRegistration = () => {
  const [ addRegisteredSemester ] = useAddRegisteredSemesterMutation()
  const { data: academicSemester } =
    useGetAllSemestersQuery([{ name: "sort", value: "year" }]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item?._id,
    label: `${item?.name} - ${item?.year}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data?.minCredit),
      maxCredit: Number(data?.maxCredit)
    };

    try {
      const res = (await addRegisteredSemester(
        semesterData
      )) as TResponse<any>;
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center">
      <Col span={8}>
        <PHForm
          onSubmit={onSubmit}
        >
          <div>
            <PHSelect
              label="Academic Semester"
              name="academicSemester"
              options={academicSemesterOptions}
            />
            <PHSelect
              label="Status"
              name="status"
              options={semesterStatusOptions}
            />
            <PHDatePicker name="startDate" label="Start Date" />
            <PHDatePicker name="endDate" label="End Date" />
            <PHInput type="text" name="minCredit" label="Minimum Credit" />
            <PHInput type="text" name="maxCredit" label="Maximum Credit" />
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
