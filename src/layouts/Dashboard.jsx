import {
  Button,
  ColorPicker,
  ConfigProvider,
  Flex,
  Layout,
  Switch,
  theme,
  Typography,
} from "antd";
const { Text } = Typography;
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import SideMenu from "../components/SideMenu";
const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
  const [primary, setPrimary] = useState("#1677ff");
  const [themeColor, setThemeColor] = useState("#FFFFFF");
  const [algorithm, setAlgorithm] = useState("light");
  const containerStyle = {
    width: "100%",
    maxWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: themeColor,
    padding: "25px",
    border: "1px",
  };
  const headerStyle = {
    textAlign: "center",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: themeColor,
    paddingLeft: "0px",
    border: `1px solid ${parseInt(themeColor)}`,
  };
  const contentStyle = {
    textAlign: "center",
    padding: "25px",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: themeColor,
    border: "1px",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: themeColor,
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: themeColor,
    border: "1px solid " + themeColor,
  };
  const layoutStyle = {
    borderRadius: 8,
    border: "1px solid red",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    minHeight: `calc(100vh - 50px)`,
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm:
          algorithm === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: primary,
        },
      }}
    >
      <div style={containerStyle}>
        <Layout style={layoutStyle}>
          <Sider
            //width="25%"
            style={siderStyle}
            collapsible
            collapsed={collapsed}
            trigger={null}
          >
            <SideMenu />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <Flex
                justify="space-between"
                align="center"
                style={{ width: "100%", height: "100%" }}
              >
                <Button
                  type="primary"
                  onClick={toggleCollapsed}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <ColorPicker
                  showText
                  value={primary}
                  onChangeComplete={(color) => setPrimary(color.toHexString())}
                />
                <Switch
                  checkedChildren={<SunOutlined />}
                  unCheckedChildren={<MoonOutlined />}
                  onChange={(e) => {
                    if (e === true) {
                      setThemeColor("#000000");
                      setAlgorithm("dark");
                    } else {
                      setThemeColor("#FFFFFF");
                      setAlgorithm("light");
                    }
                    console.log(e);
                  }}
                />
              </Flex>
            </Header>
            <Content style={contentStyle}>
              <Outlet />
            </Content>
            <Footer style={footerStyle}>
              <Text>Footer</Text>
            </Footer>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
}
