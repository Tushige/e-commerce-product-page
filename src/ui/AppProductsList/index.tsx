import AppBadge from '../../components/AppBadge';
import AppProductCarousel from '../../components/AppProductCarousel';

import { productList } from '@data/product-data';

export default function AppProductsList() {
  return (
    <div className="size-full bg-white flex flex-col gap-4 items-center">
      <AppBadge>Best Sellers</AppBadge>
      <h2 className="text-zinc-900 font-miera-bold text-4xl md:text-6xl lg:text-8xl">
        Product Title
      </h2>
      <h4 className="text-zinc-900 font-miera-demibold text-2xl md:text-3xl lg:text-4xl">
        Where nature meets health
      </h4>
      <AppProductCarousel products={productList} />
    </div>
  );
}
