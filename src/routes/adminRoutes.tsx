import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAcademicSemester from "../pages/academicManagement/CreateAcademicSemester";
import AcademicSemester from "../pages/academicManagement/AcademicSemester";
import AcademicFaculty from "../pages/academicManagement/AcademicFaculty";
import CreateAcademicFaculty from "../pages/academicManagement/CreateAcademicFaculty";
import CreateAcademicDepartment from "../pages/academicManagement/CreateAcademicDepartment";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create Academic Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicFaculty />
      },
  
    ],

  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];




