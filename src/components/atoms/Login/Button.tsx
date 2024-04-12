import { StyledButton } from '@/styles/components/Login/Button';

type ButtonProps = {
  id?: string;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  ariaLabel?: string;
  styledType: string;
  type: 'submit' | 'reset' | 'button' | undefined;
};

function Button({ onClick, children, type, ariaLabel, styledType, ...restProps }: ButtonProps) {
  return (
    <StyledButton>
      {styledType === 'login' ? (
        <button className="login" onClick={onClick} type={type} aria-label={ariaLabel} {...restProps}>
          {children}
        </button>
      ) : (
        <button className="singUp" onClick={onClick} type={type} aria-label={ariaLabel} {...restProps}>
          {children}
        </button>
      )}
    </StyledButton>
  );
}

export default Button;
