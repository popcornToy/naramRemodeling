export type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string;
  register: any;
};

function Input({ label, id, type, placeholder, error, register }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} aria-invalid={error ? 'true' : 'false'} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
