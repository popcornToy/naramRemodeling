import { ButtonWrapper } from '@/styles/components/Board/Board';
import BasicButton from '@/components/atoms/Board/BasicButton';
import BasicFormButton from '@/components/atoms/Board/BasicFormButton';

function FormButton() {
  return (
    <ButtonWrapper>
      <BasicFormButton text="문의하기" />
      <BasicButton text="돌아가기" href="/Information/notice" padding="20px 107px" fontSize="18px" fontWeight="700" />
    </ButtonWrapper>
  );
}

export default FormButton;
