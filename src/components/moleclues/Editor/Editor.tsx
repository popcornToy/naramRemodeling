import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorLayout, EditorTitleBox, EditorInputWrapper, EditorTitle } from '@/styles/components/Editor/Editor';
import FormButton from '../FormButton/FormButton';

function Editor() {
  return (
    <EditorLayout>
      <EditorTitleBox>문의글 작성하기</EditorTitleBox>
      <EditorInputWrapper>
        <label htmlFor="id" className="EditorInputLabel">
          작성자
        </label>
        <br />
        <input id="id" className="EditorInput"></input>
      </EditorInputWrapper>
      <EditorInputWrapper>
        <label htmlFor="title" className="EditorInputLabel">
          제목
        </label>
        <br />
        <input id="title" className="EditorInput"></input>
      </EditorInputWrapper>
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
      <FormButton />
    </EditorLayout>
  );
}

export default Editor;
