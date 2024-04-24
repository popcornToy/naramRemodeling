import { StyledPasswordInput } from '@/styles/components/Editor/Editor';

function PasswordInput() {
  return (
    <label htmlFor="password">
      <StyledPasswordInput id="password" type="text"></StyledPasswordInput>
    </label>
  );
}

export default PasswordInput;
