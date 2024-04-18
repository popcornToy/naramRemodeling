import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export const StyledEditorLayout = styled.form`
  padding: 50px 0 100px 0;
`;

export const StyledEditorTitleBox = styled.div`
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

export const StyledEditorInputWrapper = styled.div`
  width: 1280px;
  margin-bottom: 30px;
`;

export const StyledEditorInputLabel = styled.label`
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
`;

export const StyledEditorInput = styled.input`
  width: 100%;
  height: 65px;
  padding: 10px;
  font-size: 20px;
`;
export const StyledEditorTitle = styled.p`
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

// 비공개 체크박스 버튼
export const StyledPrivateButton = styled.label``;

export const StyledPrivateButtonContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
