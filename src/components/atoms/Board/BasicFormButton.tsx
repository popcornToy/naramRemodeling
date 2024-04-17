import { StyleFormButton } from '@/styles/components/Board/Board';

type FormButtonProps = {
  text: string;
  padding?: string;
  fontSize?: string;
  color?: string;
};

function BasicFormButton({ text, padding, fontSize, color }: FormButtonProps) {
  return (
    <>
      <StyleFormButton type="submit" padding={padding} fontSize={fontSize} color={color}>
        {text}
      </StyleFormButton>
    </>
  );
}

export default BasicFormButton;
