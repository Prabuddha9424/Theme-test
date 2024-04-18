import { Button, Input, Space } from "antd";

export default function Home() {
  return (
    <>
      <div>
        <Space>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </div>
    </>
  );
}
