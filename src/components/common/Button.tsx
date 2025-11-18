import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-amber-500 hover:bg-amber-600 text-white',
  secondary: 'bg-white hover:bg-gray-100 text-slate-800'
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-bold transition';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}