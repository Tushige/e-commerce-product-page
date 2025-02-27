import { cn } from '../../utils';

interface AppButtonLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}
export default function AppButtonLink({
  href,
  className,
  children,
}: AppButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'bg-white rounded-full px-6 py-2 flex items-center justify-center hover:scale-[1.03] duration-300 hover:drop-shadow-button text-primary-foreground text-lg font-miera-demibold',
        className
      )}
    >
      {children}
    </a>
  );
}
