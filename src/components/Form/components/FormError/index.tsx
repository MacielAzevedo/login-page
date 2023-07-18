import { ReactNode } from 'react';

type FormErrorProps = {
  children: ReactNode;
};

export default function FormError({ children }: FormErrorProps) {
  return <div className=" text-[#f75a68] text-sm">{children}</div>;
}
