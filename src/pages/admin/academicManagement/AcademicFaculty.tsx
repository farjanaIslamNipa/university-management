import { Button, Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement";
import { TAcademicFaculty } from "../../../types/academicManagement.types";

type TTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAllAcademicFacultyQuery(undefined);

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
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

export default AcademicFaculty;
