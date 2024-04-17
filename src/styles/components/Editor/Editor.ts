import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export const EditorLayout = styled.form`
  padding: 50px 0 100px 0;
`;

export const EditorTitleBox = styled.div`
  width: 1280px;
  height: 72px;
  background-color: #e7e7e7;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  padding: 20px;
  margin-bottom: 40px;
`;

export const EditorInputWrapper = styled.div`
  width: 1280px;
  margin-bottom: 30px;

  & .EditorInputLabel {
    display: inline-block;
    width: 100%;
    font-family: 'Noto Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    padding-left: 5px;
    padding-bottom: 15px;
  }

  & .EditorInput {
    width: 100%;
    height: 65px;
    padding: 10px;
    font-size: 20px;
  }
`;

export const EditorTitle = styled.p`
  width: 100%;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding-left: 5px;
  padding-bottom: 15px;
`;

export const StyledCKEditor = styled(CKEditor)`
  .ck-editor__editable {
    min-height: 300px;
  }
`;
