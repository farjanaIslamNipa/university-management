import {FieldValues, SubmitHandler} from "react-hook-form";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import {Button, Col, Divider, Row} from "antd";

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
      admissionSemester: "65b0104110b74fcbd7a25d92",
      academicDepartment: "65b00fb010b74fcbd7a25d8e"
  }
}

const CreateStudent = () => {
  

const onSubmit : SubmitHandler<FieldValues> = (data : FieldValues) => {
  console.log(data)

  // const formData = new FormData();

  // formData.append('data', JSON.stringify(data))

  // console.log(Object.fromEntries(formData))
}

  return (
    <>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onSubmit}>
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
                <PHInput type="text" name="gender" label="Gender" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{span: 12}} lg={{span: 8}}>
                <PHInput type="text" name="bloogGroup" label="Blood Group" />
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
                <PHInput type="text" name="admissionSemester" label="Admission Semester" />
              </Col>
              <Col span={24} md={{span: 12}}>
                <PHInput type="text" name="academicDepartment" label="Academic Department" />
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