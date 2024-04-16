import { StyledBasicButton } from '@/styles/components/Board/Board';

type ButtonProps = {
  text: string;
  href: string;
};

function BasicButton({ text, href }: ButtonProps) {
  return (
    <>
      <StyledBasicButton href={href}>{text}</StyledBasicButton>
    </>
  );
}

export default BasicButton;
