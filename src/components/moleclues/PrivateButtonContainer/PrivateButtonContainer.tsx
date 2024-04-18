import PrivateButton from '@/components/atoms/PrivateButton/PrivateButton';
import { StyledPrivateButtonContainer } from '@/styles/components/Editor/Editor';

type PrivateButtonProps = {
  children: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function PrivateButtonContainer({ checked, onChange }: PrivateButtonProps) {
  return (
    <StyledPrivateButtonContainer>
      <PrivateButton checked={checked} onChange={onChange}>
        비공개
      </PrivateButton>
      <label htmlFor="password">
        <input id="password" type="password"></input>
      </label>
    </StyledPrivateButtonContainer>
  );
}

export default PrivateButtonContainer;
