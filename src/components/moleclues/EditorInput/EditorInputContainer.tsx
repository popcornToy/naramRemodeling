import { EditorInputWrapper, EditorInputLabel, EditorInput } from '@/styles/components/Editor/Editor';

type EditorInputProps = {
  label: string;
};

function EditorInputContainer({ label }: EditorInputProps) {
  const InputProps = {
    writer: 'id',
    title: 'title',
  };

  return (
    <EditorInputWrapper>
      <EditorInputLabel htmlFor={InputProps.writer}>{label}</EditorInputLabel>
      <br />
      <EditorInput id={InputProps.writer} name={InputProps.writer}></EditorInput>
    </EditorInputWrapper>
  );
}

export default EditorInputContainer;
