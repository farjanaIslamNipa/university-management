import {Button, Col, Flex} from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import {zodResolver} from "@hookform/resolvers/zod";
import {FieldValues, SubmitHandler} from "react-hook-form";
import {academicDepartmentSchema} from "../../scmemas/academicManagement.schema";
import PHSelect from "../../components/form/PHSelect";
import {useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery} from "../../redux/features/admin/academicManagement";
import {toast} from "sonner";
import {TResponse} from "../../types";
import {TAcademicDepartment} from "../../types/academicManagement.types";

const CreateAcademicDepartment = () => {
  const {data: facultyData, isLoading} = useGetAllAcademicFacultyQuery(undefined)

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation()

  const facultyOptions = facultyData?.data?.map(({_id, name}) => ({
    value: _id,
    label: name
  }))! 

  const onSubmit : SubmitHandler<FieldValues> = async(data: FieldValues) => {
    const toastId = toast.loading('Creating...')
    try{
      const result = await addAcademicDepartment({
        name: data?.name,
        academicFaculty: data?.academicFaculty
      }) as TResponse<TAcademicDepartment>
      console.log(result, 'res')
      if(result?.error){
        toast.error(result?.error?.data?.message, {id: toastId})
      }else{
        toast.success('Created successfully', {id: toastId})
      }
    }catch(err){
      toast.error('Something went wrong', {id: toastId})
    }
  
  }

  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <Flex justify="center">
      <Col span={8}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <div>
            <PHInput type="text" name="name" label="Name" />
            <PHSelect label="Select Academic Faculty" name="academicFaculty" options={facultyOptions} />
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;