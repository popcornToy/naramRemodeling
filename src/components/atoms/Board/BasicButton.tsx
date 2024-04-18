import { StyledBasicButton } from '@/styles/components/Board/Board';

type ButtonProps = {
  text: string;
  to: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
};

function BasicButton({ text, to, padding, fontSize, fontWeight }: ButtonProps) {
  return (
    <>
      <StyledBasicButton to={to} padding={padding} fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </StyledBasicButton>
    </>
  );
}

export default BasicButton;
