import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const variants = cva([], {
  variants: {
    size: {
      xs: 'text-sm',
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-[2rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type HeadingType = VariantProps<typeof variants> & {
  children: ReactNode;
};

export default function Heading({ size, children }: HeadingType) {
  return <h2 className={variants({ size })}>{children}</h2>;
}
