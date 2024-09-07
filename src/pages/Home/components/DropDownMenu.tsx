import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useState } from 'react';
import ToolbarData from '../data/ToolbarData.json';

export default function DropDownMenu() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedTravelMode, setSelectedTravelMode] = useState(null);

  const dropdowns = [
    { label: 'Select a City', value: selectedCity, setValue: setSelectedCity, options: ToolbarData.cities },
    { label: 'Select a Category', value: selectedCategory, setValue: setSelectedCategory, options: ToolbarData.categories },
    { label: 'Select an Activity', value: selectedActivity, setValue: setSelectedActivity, options: ToolbarData.activities },
    { label: 'Select a Travel Mode', value: selectedTravelMode, setValue: setSelectedTravelMode, options: ToolbarData.travelModes }
  ];

  return (
      <section className="flex justify-between lg:flex-row flex-col gap-6 lg:px-12 px-4">
          {dropdowns.map((dropdown, index) => (
            <DropdownComponent
              key={index}
              label={dropdown.label}
              value={dropdown.value}
              onChange={(e: DropdownChangeEvent) => dropdown.setValue(e.value)}
              options={dropdown.options}
            />
          ))}
      </section>
  );
}

interface DropdownProps {
  label: string;
  value: unknown;
  onChange: (e: DropdownChangeEvent) => void;
  options: { name: string; code: string }[];
}

function DropdownComponent({ label, value, onChange, options }: DropdownProps) {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={options}
      optionLabel="name"
      placeholder={label}
      className="lg:w-fit w-[12rem] px-4 md:w-14rem bg-[#E4E6E8] text-black text-bold rounded-3xl"
    />
  );
}

interface Prop {
  name: string;
}

export function Button({ name }: Prop) {
  return (
    <>
      <button>{name}</button>
    </>
  );
}
