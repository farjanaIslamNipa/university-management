
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { TSemester } from "../../../types";
import {useGetAllRegisteredSemesterQuery, useUpdateRegisteredSemesterStatusMutation} from "../../../redux/features/admin/courseManagementApi";
import moment from "moment";
import {useState} from "react";

type TTableData = Pick<
  TSemester,
  "academicSemester" | "status" | "startDate" | "endDate"
>;

const items = [
  {
    label: 'Upcoming',
    key: 'UPCOMING'
  },
  {
    label: 'Ongoing',
    key: 'ONGOING'
  },
  {
    label: 'Ended',
    key: 'ENDED'
  },
]



const RegisteredSemester = () => {
  const [semesterId, setSemesterId] = useState('')
  const {data: semesterData, isLoading, isFetching} = useGetAllRegisteredSemesterQuery(undefined)

  const [updateRegisteredSemesterStatus] = useUpdateRegisteredSemesterStatusMutation()

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester?.name} - ${academicSemester?.year}`, 
      startDate : moment(new Date(startDate)).format('MMMM'), 
      endDate : moment(new Date(endDate)).format('MMMM'), 
      status
    })
  );

  console.log(semesterId, 'id')

  const handleStatusUpdate = (data) => {
    console.log(semesterId, 'id') 
    console.log(data?.key, 'id') 
    const updateData = {
      id: semesterId,
      data: {
        status : data?.key
      }
    }
    updateRegisteredSemesterStatus(updateData)
  }

  const menuProps = {
    items,
    onClick : handleStatusUpdate
  }

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item) => {
        let color
        if(item === 'UPCOMING'){
          color = 'blue'
        }
        if(item === 'ONGOING'){
          color = 'green'
        }
        if(item === 'ENDED'){
          color = 'red'
        }
        return <Tag color={color}>{item}</Tag>
      }
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={['click']}>
            <Button onClick={() => setSemesterId(item?.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     filters.name?.forEach((item) =>
  //       queryParams.push({ name: "name", value: item })
  //     );
  //     filters.year?.forEach((item) =>
  //       queryParams.push({ name: "year", value: item })
  //     );
  //     setParams(queryParams);
  //   }
  // };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        // onChange={onChange}
      />
    </div>
  );
};

export default RegisteredSemester;