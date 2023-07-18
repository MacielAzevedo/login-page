import Heading from '@/components/Heading';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  content: string;
  icon: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, content, icon, ...props }, ref) => {
    return (
      <label className="w-full flex flex-col gap-[10px]">
        <Heading size={'lg'}>{title}</Heading>
        <div className="inline-flex items-center px-4 py-3 gap-3 rounded text-gray-100 bg-gray-800">
          {icon}
          <input
            type="text"
            ref={ref}
            {...props}
            className="bg-inherit outline-none"
            placeholder={content}
          />
        </div>
      </label>
    );
  }
);

export default Input;
Input.displayName = 'Input';
