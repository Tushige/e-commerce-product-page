import AppBadge from './AppBadge';
import AppTypeWriter from './AppTypeWriter';

interface AppSectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badgeText?: string;
}

export default function AppSectionTitle({
  title,
  subtitle,
  badgeText,
  ...props
}: AppSectionTitleProps) {
  return (
    <div {...props}>
      {badgeText && <AppBadge className="my-4">{badgeText}</AppBadge>}
      <h2 className="text-primary-foreground font-miera-bold text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <h4 className="text-primary-foreground font-miera-demibold text-2xl md:text-3xl lg:text-4xl">
          <AppTypeWriter words={[subtitle]} repeat={0} className="" />
        </h4>
      )}
    </div>
  );
}
