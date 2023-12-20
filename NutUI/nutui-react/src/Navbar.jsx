import { NavBar, Toast } from "@nutui/nutui-react";

const Navbar = () => {
  return (
    <NavBar onBackClick={(e) => Toast.show("返回")}>
      <span onClick={(e) => Toast.show("标题")}>订单详情</span>
    </NavBar>
  );
};
export default Navbar;
