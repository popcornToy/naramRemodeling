import { StyledBasicButton } from '@/styles/components/Board/Board';

type ButtonProps = {
  text: string;
};

function BasicButton({ text }: ButtonProps) {
  return (
    <>
      <StyledBasicButton href="/">{text}</StyledBasicButton>
    </>
  );
}

export default BasicButton;
