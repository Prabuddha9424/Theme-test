import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("General", "1", <MailOutlined />, [
    getItem(<Link to="/button">Button</Link>, "11"),
    getItem(<Link to="/text">Text</Link>, "12"),
  ]),
  getItem("Navigation", "2", <AppstoreOutlined />, [
    getItem(<Link to="/breadcrumb">Breadcrumb</Link>, "21"),
    getItem("Option 2", "22"),
    getItem("Submenu", "23", null, [
      getItem("Option 1", "231"),
      getItem("Option 2", "232"),
      getItem("Option 3", "233"),
    ]),
    getItem("Submenu 2", "24", null, [
      getItem("Option 1", "241"),
      getItem("Option 2", "242"),
      getItem("Option 3", "243"),
    ]),
  ]),
  getItem("Forms", "3", <SettingOutlined />, [
    getItem(<Link to="/form-1">Form 1</Link>, "31"),
    getItem(<Link to="/form-login">Form Login</Link>, "32"),
    getItem("Option 3", "33"),
    getItem("Option 4", "34"),
  ]),
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

export default function SideMenu() {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      items={items}
    />
  );
}
