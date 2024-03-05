import {FieldValues, SubmitHandler} from "react-hook-form";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import {Button, Col, Divider, Row} from "antd";
import PHSelect from "../../components/form/PHSelect";
import {bloodGroupOptions, genderOptions} from "../../constants/global";
import PHDatePicker from "../../components/form/PHDatePicker";
import {useGetAllAcademicDepartmentQuery, useGetAllSemestersQuery} from "../../redux/features/admin/academicManagement";
import {useAddStudentMutation} from "../../redux/features/admin/userManagementApi";

const studentDummyData = {
  student: {
      name: {
          firstName: "I am ",
          middleName: "Student",
          lastName: "Number 1"
      },
      gender: "male",
      dateOfBirth: "1990-01-01",
      email: "student2@gmail.com",
      contactNo: "1235678",
      emergencyContactNo: "987-654-3210",
      bloogGroup: "A+",
      presentAddress: "123 Main St, Cityville",
      permanentAddress: "456 Oak St, Townsville",
      guardian: {
          fatherName: "James Doe",
          fatherOccupation: "Engineer",
          fatherContactNo: "111-222-3333",
          motherName: "Mary Doe",
          motherOccupation: "Teacher",
          motherContactNo: "444-555-6666"
      },
      localGuardian: {
          name: "Alice Johnson",
          occupation: "Doctor",
          contactNo: "777-888-9999",
          address: "789 Pine St, Villageton"
      },
      admissionSemester: "65d218736ce372f6508f3325",
      academicDepartment: "65e5a84f75386c17f1ad7fa7"
  }
}

// ! This is only for development
const studentDefaultValues = {
  name: {
    firstName: "I am ",
    middleName: "Student",
    lastName: "Number 1"
},
gender: "male",

email: "student1234@gmail.com",
contactNo: "1235678",
emergencyContactNo: "987-654-3210",
bloogGroup: "A+",
presentAddress: "123 Main St, Cityville",
permanentAddress: "456 Oak St, Townsville",
guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666"
},
localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton"
},


}

const CreateStudent = () => {

  const [addStudent] = useAddStudentMutation()

  const {data: semesterData, isLoading: semesterIsLoading} = useGetAllSemestersQuery(undefined)
  
  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item?.name} - ${item?.year}`
  }))!

  const {data: departmentData, isLoading: departmentIsLoading} = useGetAllAcademicDepartmentQuery(undefined)
  
  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: item?.name
  }))!

const onSubmit : SubmitHandler<FieldValues> = (data : FieldValues) => {
  const studentData = {
    password: 'student123',
    student: data
  }

  const formData = new FormData();

  formData.append('data', JSON.stringify(studentData))

  addStudent(formData)

  // console.log(Object.fromEntries(formData))
}

if(semesterIsLoading){
  return <p>Loading....</p>
}

  return (
    <>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
            <Divider>Personal Info</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="name.firstName" label="First Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="name.middleName" label="Middle Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="name.lastName" label="Last Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHSelect name="gender" label="Gender" options={genderOptions} />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHDatePicker name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHSelect name="bloogGroup" label="Blood Group" options={bloodGroupOptions} />
              </Col>
            </Row>

            <Divider>Contact Info</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="email" label="Email" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="contactNo" label="Contact Number" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="emergencyContactNo" label="Emergency Contact Number" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="presentAddress" label="Present Address" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="permanentAddress" label="Permanent Address" />
              </Col>
            </Row>

            <Divider>Guardian Info</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.fatherName" label="Father Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.fatherOccupation" label="Father Occupation" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.fatherContactNo" label="Father Contact Number" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.motherName" label="Mother Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.motherOccupation" label="Mother Occupation" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="guardian.motherContactNo" label="Mother Contact Number" />
              </Col>
            </Row>

            <Divider>Local Guardian Info</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.name" label="Name" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.occupation" label="Occupation" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.contactNo" label="Contact Number" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="localGuardian.address" label="Address" />
              </Col>
            </Row>

            <Divider>Other Info</Divider>
            <Row gutter={8}>
              <Col span={24} md={{span: 12}}>
                <PHSelect options={semesterOptions} disabled={semesterIsLoading} name="admissionSemester" label="Admission Semester" />
              </Col>
              <Col span={24} md={{span: 12}}>
                <PHSelect options={departmentOptions} disabled={departmentIsLoading} name="academicDepartment" label="Academic Department" />
              </Col>
            </Row>

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Row>
    </>
  );
};

export default CreateStudent;