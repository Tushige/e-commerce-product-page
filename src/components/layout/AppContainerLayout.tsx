import { cn } from '../../utils';

export interface AppContainerLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppContainerLayout({
  className,
  ...props
}: AppContainerLayoutProps) {
  return (
    <div
      className={cn(
        'relative size-full flex justify-center outer-container',
        className
      )}
    >
      <div
        className="container relative px-4 lg:px-8 flex items-center justify-center"
        {...props}
      />
    </div>
  );
}
