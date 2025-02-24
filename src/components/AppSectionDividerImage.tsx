import { cn } from '../utils';

export default function AppSectionDividerImage({
  className,
}: {
  className?: string;
}) {
  return <img src="images/separator.svg" className={cn('', className)} />;
}
