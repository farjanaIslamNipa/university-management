import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHInput from "../../../components/form/PHInput";
import { academicFacultySchema } from "../../../scmemas/academicManagement.schema";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { TAcademicFaculty } from "../../../types/academicManagement.types";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");
    try {
      const result = (await addAcademicFaculty({
        name: data?.name,
      })) as TResponse<TAcademicFaculty>;
      console.log(result, "res");
      if (result?.error) {
        toast.error(result?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Created successfully", { id: toastId });
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
          resolver={zodResolver(academicFacultySchema)}
        >
          <div>
            <PHInput type="text" name="name" label="Name" />
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
