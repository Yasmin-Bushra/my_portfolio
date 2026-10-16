import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'dark' | 'plain' }
>;

export default function Button({ children, className = '', variant = 'dark', ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-3 px-5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20211F] ${variant === 'dark' ? 'bg-[#E65336] text-white hover:bg-[#C4422A]' : 'border border-[#C9C5BA] hover:border-[#E65336] hover:text-[#C4422A]'} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
