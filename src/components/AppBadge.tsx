export interface AppBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppBadge({ ...props }: AppBadgeProps) {
  return (
    <div
      className="border-transparent bg-primary px-2.5 py-0.5 font-miera-demibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary-foreground hover:bg-primary/80 rounded-full "
      {...props}
    />
  );
}
