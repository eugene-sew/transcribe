import Select from "react-select";

const CustomSelect = () => {
  const options = [
    { value: "Case 101", label: "State vs People" },
    { value: "Case 102", label: "Apple vs Subway" },
    { value: "Case 103", label: "Doctor vs Board" },
  ];
  return (
    <Select
      options={options}
      placeholder="Search ..."
    />
  );
};

export default CustomSelect;
