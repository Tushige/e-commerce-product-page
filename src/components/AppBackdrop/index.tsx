import { cn } from '../../utils';

type AppBackdropProps = {
  className?: string;
};
export default function AppBackdrop({ className }: AppBackdropProps) {
  return (
    <div
      className={cn(
        'backdrop bg-white size-full absolute top-0 left-0',
        className
      )}
    />
  );
}
