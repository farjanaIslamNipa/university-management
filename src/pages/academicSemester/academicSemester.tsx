import {useGetAllSemestersQuery} from "../../redux/features/academicSemester/academicSemesterApi";

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