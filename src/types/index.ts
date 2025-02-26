export type AppLinkCard = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
  linkTitle: string;
};

type AppFeature = {
  text: string;
  icon: React.SVGElementType;
  iconBgColor: string;
};
export type AppProduct = {
  id: string;
  title: string;
  description: string;
  productImageSrc: string;
  imageUrl: string;
  features: AppFeature[];
};
