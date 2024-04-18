import {
  Button,
  ColorPicker,
  ConfigProvider,
  Divider,
  Empty,
  Flex,
  Image,
  Pagination,
  Result,
  Spin,
  Switch,
  theme,
  Tooltip,
  Typography,
} from "antd";
const { Title } = Typography;
import { useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import BreadcrumbComp from "../pages/BreadcrumbComp";
import Buttons from "../pages/Buttons";
import Paragraph from "../pages/Paragraph";
import Form1 from "../pages/Form1";
import Step from "../pages/Step";
import SelectComp from "../pages/SelectComp";
import ImageUpload from "../pages/ImageUpload";
import CalendarComp from "../pages/CalendarComp";
import CardComp from "../pages/CardComp";
import CarouselComp from "../pages/CarouselComp";
import PopoverComp from "../pages/PopoverComp";
import TableComp from "../pages/TableComp";
import DrawerComp from "../pages/DrawerComp";
import MessageComp from "../pages/MessageComp";
import ModalComp from "../pages/ModalComp";
import NotificationComp from "../pages/NotificationComp";

export default function Components() {
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
        <Flex
          justify="space-between"
          align="center"
          style={{ width: "100%", height: "100%" }}
        >
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
        <Divider />
        <Title level={3}>Breadcrumb</Title>
        <BreadcrumbComp />
        <Title level={3}>Buttons</Title>
        <Buttons />
        <Title level={3}>Paragraph</Title>
        <Paragraph />
        <Title level={3}>Sample Form</Title>
        <Form1 />
        <Title level={3}>Pagination</Title>
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Title level={3}>Steps</Title>
        <Step />
        <Title level={3}>Select</Title>
        <SelectComp />
        <Title level={3}>Image upload</Title>
        <ImageUpload />
        <Title level={3}>Calendar</Title>
        <CalendarComp />
        <Title level={3}>Card</Title>
        <CardComp />
        <Title level={3}>Carousel</Title>
        <CarouselComp />
        <Title level={3}>Popover</Title>
        <PopoverComp />
        <Title level={3}>Empty</Title>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        <Title level={3}>Image</Title>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Title level={3}>Table</Title>
        <TableComp />
        <Title level={3}>Tooltip</Title>
        <Tooltip title="prompt text">
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
        <Title level={3}>Drawer</Title>
        <DrawerComp />
        <Title level={3}>Message</Title>
        <MessageComp />
        <Title level={3}>Modal</Title>
        <ModalComp />
        <Title level={3}>Notification</Title>
        <NotificationComp />
        <Title level={3}>Result</Title>
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />
        <br />
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
        <br />
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<Button type="primary">Back Home</Button>}
        />
        <Title level={3}>Spin</Title>
        <div className="example">
          <Spin />
        </div>
      </div>
    </ConfigProvider>
  );
}
