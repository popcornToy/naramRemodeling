import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorLayout, EditorTitleBox, EditorTitle } from '@/styles/components/Editor/Editor';
import FormButton from '../FormButton/FormButton';
import EditorInputContainer from '../EditorInput/EditorInputContainer';

type EditorProps = {
  title: string;
  formText: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  text: string;
  to: string;
  fontWeight?: string;
};

function Editor({ title = '문의글 작성하기', formText, text, to, padding, fontSize, fontWeight }: EditorProps) {
  const label = {
    writer: '작성자',
    title: '제목',
  };

  return (
    <EditorLayout>
      <EditorTitleBox>{title}</EditorTitleBox>
      <EditorInputContainer label={label.writer} />
      <EditorInputContainer label={label.title} />
      <div>
        <EditorTitle>내용</EditorTitle>
        <div className="custom-ckeditor">
          <CKEditor
            editor={ClassicEditor}
            data="<p>공지사항 내용을 작성해주세요.</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event) => {
              console.log(event);
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <style>{`
        .custom-ckeditor .ck-editor__editable {
          min-height: 30rem;
          font-size:20px;
        }
      `}</style>
        </div>
      </div>
      <FormButton
        formText={formText}
        text={text}
        to={to}
        padding={padding}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </EditorLayout>
  );
}

export default Editor;
