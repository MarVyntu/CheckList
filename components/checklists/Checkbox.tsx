import React from 'react';

type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ id, checked, onChange }: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <input
      className="form-checkbox h-5 w-5 text-gray-600 cursor-pointer peer"
      id={id}
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
