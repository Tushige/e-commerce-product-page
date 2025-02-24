import { cn } from '../../utils';

type AppButtonLinkProps = {
  href: string;
  className?: string;
  text: string;
};
export default function AppButtonLink({
  href,
  text,
  className,
}: AppButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'bg-white rounded rounded-full px-6 py-2 flex items-center justify-center hover:scale-[1.03] duration-300 hover:drop-shadow-button',
        className
      )}
    >
      <span className="text-lg font-miera-demibold text-slate-700">{text}</span>
    </a>
  );
}
