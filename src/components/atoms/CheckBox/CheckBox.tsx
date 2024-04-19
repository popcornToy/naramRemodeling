// import { StyledCheckBoxInput, StyledCheckBoxLabel, StyledCheckBoxP } from '@/styles/components/Editor/Editor';

// type CheckBoxProps = {
//   text: string;
//   checked: boolean;
//   onChange: (checked: boolean) => void;
// };

import { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const CheckboxImgSrc = {
    checked: '../../../../public/checkBoxAfter.svg',
    unchecked: '../../../../public/checkBoxBefore.svg',
  };
  return (
    <label>
      비공개
      <img src={isChecked ? CheckboxImgSrc.checked : CheckboxImgSrc.unchecked} alt="" />
      <input type="checkbox" checked={isChecked} onChange={handleChange} style={{ display: 'none' }} />
    </label>
  );
};

export default Checkbox;
