type PrivateButtonProps = {
  children: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function PrivateButton({ children, checked, onChange }: PrivateButtonProps) {
  return (
    <label htmlFor="private">
      <input id="private" type="checkbox" checked={checked} onChange={({ target: { checked } }) => onChange(checked)} />
      {children}
    </label>
  );
}

export default PrivateButton;
