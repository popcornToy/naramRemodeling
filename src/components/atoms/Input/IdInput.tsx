import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  register?: UseFormRegisterReturn;
  label: string;
  error?: boolean;
  id: 'name' | 'email';
  type: 'text' | 'email';
};

export default function FindInput({ register, label, error, id, type }: InputProps) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input type={type} name={id} id={id} placeholder={label} {...register} aria-invalid={error ? 'true' : 'false'} />
    </>
  );
}
