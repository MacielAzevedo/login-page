import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

const variants = cva(
  [
    'w-[400px]',
    'flex',
    'justify-center',
    'items-center',
    'gap-10',
    'font-semibold',
    'text-base',
    'py-[10px]',
    'text-black',
    'rounded',
  ],
  {
    variants: {
      variant: {
        PRIMARY: ['bg-cyan-500', 'hover:bg-cyan-300', 'transition-colors'],
        SECONDARY: ['bg-green-500', 'hover:bg-green-300', 'transition-colors'],
      },
    },
  }
);

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    children: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonType>(
  ({ variant, children, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref} className={variants({ variant })}>
        {children}
      </button>
    );
  }
);

export default Button;
Button.displayName = 'Button';
