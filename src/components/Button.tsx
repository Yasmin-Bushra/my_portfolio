import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'dark' | 'plain' }
>;

export default function Button({ children, className = '', variant = 'dark', ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282329] ${variant === 'dark' ? 'bg-[#D92D50] text-white hover:-translate-y-0.5 hover:bg-[#A51F3A]' : 'rounded-full border border-[#E8D8CF] hover:border-[#D92D50] hover:text-[#A51F3A]'} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
