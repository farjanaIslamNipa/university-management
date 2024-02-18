import {Layout, Menu} from "antd";
import {sidebarItemsGenerator} from "../../utils/sidebarItemGenerator";
import {adminPaths} from "../../routes/adminRoutes";
import {facultyPaths} from "../../routes/facultyRoutes";
import {studentPaths} from "../../routes/studentRoutes";

const { Sider } = Layout;
const userRole = {
  ADMIN : 'admin',
  FACULTY : 'faculty',
  STUDENT : 'student'
}
const Sidebar = () => {
  const role = 'admin';
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
      break;
  
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" style={{color: 'white', paddingLeft: '30px', paddingTop: '20px', fontWeight: 'bold', fontSize: '20px', paddingBottom: '10px'}}>PH Uni</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
    </Sider>
  );
};

export default Sidebar;