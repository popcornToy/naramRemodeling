import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import PasswordInput from '@/components/atoms/PasswordInput/PasswordInput';

type CheckBoxContainerProps = {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function CheckBoxContainer({ checked, onChange, text }: CheckBoxContainerProps) {
  return (
    <div>
      <CheckBox checked={checked} onChange={onChange} text={text} />
      <PasswordInput />
    </div>
  );
}

export default CheckBoxContainer;
