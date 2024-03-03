import {Button, Table, TableColumnsType, TableProps} from "antd";
import {useGetAllSemestersQuery} from "../../redux/features/admin/academicManagement";
import {TAcademicSemester} from "../../types/academicManagement.types";
import {useState} from "react";
import {TQueryParam} from "../../types";

type TTableData = Pick<TAcademicSemester, 'name' | 'year' | 'startMonth' | 'endMonth'>

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined)
  const {data : semesterData, isLoading, isFetching} = useGetAllSemestersQuery(params)

  const tableData = semesterData?.data?.map(({_id, name, year, startMonth, endMonth}) => ({
    key:_id,
    name,
    year, 
    startMonth,
    endMonth
  }))

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
      ]
    },
    {
      title: 'Year',
      dataIndex: 'year',
      filters: [
        {
          text: '2024',
          value: '2024',
        },
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
      ]
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        )
      } 
    }
  ];
  
  const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
   if(extra.action === 'filter'){
    const queryParams : TQueryParam[] = [];

    filters.name?.forEach((item) =>
      queryParams.push({name: 'name', value: item})
    )
    filters.year?.forEach((item) =>
      queryParams.push({name: 'year', value: item})
    )
    setParams(queryParams)
   }
  };
  
  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div>
      <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
  );
};

export default AcademicSemester;