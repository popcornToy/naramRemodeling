import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { ReactNode } from 'react'; // ReactNode 타입을 import 해줍니다.

export type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string | FieldError | undefined;
  register: UseFormRegisterReturn;
};

function Input({ label, id, type, placeholder, error, register }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} aria-invalid={error ? 'true' : 'false'} />
      {error && renderErrorMessage(error)} {/* error가 있을 때만 에러 메시지를 렌더링합니다. */}
    </div>
  );
}

// 에러 메시지를 렌더링하는 함수
function renderErrorMessage(error: string | FieldError): ReactNode {
  if (typeof error === 'string') {
    return <p>{error}</p>; // string인 경우 그대로 출력합니다.
  } else if (error && error.message) {
    return <p>{error.message}</p>; // FieldError인 경우 message를 사용합니다.
  } else {
    return null; // 그 외의 경우는 아무것도 출력하지 않습니다.
  }
}

export default Input;
