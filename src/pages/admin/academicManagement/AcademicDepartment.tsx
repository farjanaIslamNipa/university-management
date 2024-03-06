import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicDepartment } from "../../../types/academicManagement.types";

type TTableData = Pick<TAcademicDepartment, "name">;
const AcademicDepartment = () => {
  const {
    data: departmentData,
    isLoading,
    isFetching,
  } = useGetAllAcademicDepartmentQuery(undefined);

  const tableData = departmentData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Table loading={isFetching} columns={columns} dataSource={tableData} />
    </div>
  );
};

export default AcademicDepartment;
