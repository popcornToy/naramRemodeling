import { useState } from 'react';
import { StyledDropDown } from '@/styles/components/Board';

type DropDown = {
  options: string[];
};

export const DropDown = ({ options }: DropDown) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StyledDropDown onClick={toggleDropdown}>
        <img src="./../public/svg/dropdown.svg" alt="드롭박스버튼"></img>
      </StyledDropDown>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
