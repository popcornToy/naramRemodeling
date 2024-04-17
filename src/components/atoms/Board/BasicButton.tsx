import { StyledBasicButton } from '@/styles/components/Board/Board';

type ButtonProps = {
  text: string;
  href: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
};

function BasicButton({ text, href, padding, fontSize, fontWeight }: ButtonProps) {
  return (
    <>
      <StyledBasicButton href={href} padding={padding} fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </StyledBasicButton>
    </>
  );
}

export default BasicButton;
