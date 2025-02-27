import { AppLinkCard as AppLinkCardType } from '../types';
import AppButtonLink from './AppButtonLink';
type AppLinkCardProps = {
  card: AppLinkCardType;
};
export default function AppLinkCard({ card }: AppLinkCardProps) {
  const { title, subtitle, imageUrl, linkTitle, linkUrl } = card;
  return (
    <div className="relative size-full lg:max-w-[32rem] rounded-xl overflow-hidden">
      <img src={imageUrl} className="size-full brightness-75" />
      <div
        className="absolute w-full top-[50%] flex flex-col gap-2 text-white items-center justify-center p-2 lg:p-4"
        style={{
          transform: `translate(0, -50%)`,
        }}
      >
        <span className="font-miera-bold text-2xl lg:text-4xl">{title}</span>
        <span className="font-miera-demibold">{subtitle}</span>
        <AppButtonLink href={linkUrl}>{linkTitle}</AppButtonLink>
      </div>
    </div>
  );
}
