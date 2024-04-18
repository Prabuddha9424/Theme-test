import { Select } from "antd";
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectComp = () => (
  <Select
    mode="tags"
    style={{
      width: "400px",
    }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);
export default SelectComp;
