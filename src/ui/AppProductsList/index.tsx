import AppProductCarousel from '../../components/AppProductCarousel';

import { cn } from '../../utils';
import AppSectionTitle from '../../components/AppSectionTitle';
import { productList } from '../../data/mock-data';
import AppDraggableCarousel from '../../components/AppProductCarousel/AppDraggableCarousel';

type AppProductsListProps = {
  className?: string;
};
export default function AppProductsList({ className }: AppProductsListProps) {
  return (
    <div
      className={cn(
        'size-full bg-white flex flex-col gap-4 items-center',
        className
      )}
    >
      <AppSectionTitle
        title="Discover our Products"
        subtitle="Where nature meets health"
        badgeText="best sellers"
        className="flex flex-col items-center"
      />
      <div className="lg:hidden w-full">
        <AppDraggableCarousel products={productList} />
      </div>
      <div className="hidden lg:block w-full">
        <AppProductCarousel products={productList} />
      </div>
    </div>
  );
}
