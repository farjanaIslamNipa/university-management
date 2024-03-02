import {useGetAllSemestersQuery} from "../../redux/features/admin/academicManagement";


const AcademicSemester = () => {
  const {data} = useGetAllSemestersQuery(undefined)
  console.log(data, 'data')
  return (
    <div>
      Academic semester component
    </div>
  );
};

export default AcademicSemester;