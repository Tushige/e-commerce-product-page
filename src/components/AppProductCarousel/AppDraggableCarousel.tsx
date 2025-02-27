import { motion, useMotionValue } from 'motion/react';
import { useState } from 'react';
import { Product } from './types';
import { ProductCard } from './ProductCard';

// a drag activates a swipe motion if it exceeds this threshold value
const DRAG_ACTIVATION_THRESHOLD = 10;
export default function AppDraggableCarousel({
  products = [],
}: {
  products?: Product[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const dragX = useMotionValue(0);
  const onDragEnd = () => {
    const x = dragX.get();
    if (x >= DRAG_ACTIVATION_THRESHOLD && activeIdx > 0) {
      setActiveIdx((prev) => prev - 1);
    } else if (
      x <= -DRAG_ACTIVATION_THRESHOLD &&
      activeIdx < products.length - 1
    ) {
      setActiveIdx((prev) => prev + 1);
    }
  };

  if (!products) return null;

  return (
    <div className="overflow-hidden w-full">
      <div className="overflow-hidden relative">
        <motion.ul
          className="relative flex items-center whitespace-nowrap w-full overflow-visible snap-x snap-mandatory"
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragEnd={onDragEnd}
          dragElastic={0.2}
          whileDrag={{ cursor: 'grabbing' }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${activeIdx * 100}%`,
          }}
        >
          {products.map((product: Product, idx: number) => (
            <motion.li
              key={idx}
              className="flex-none w-full cursor-grab active:cursor-grabbing p-8"
            >
              <ProductCard product={product} className="w-full" />
            </motion.li>
          ))}
        </motion.ul>
        <Dots
          length={products.length}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
      </div>
    </div>
  );
}
type DotsProps = {
  length: number;
  activeIdx: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
};
const Dots = ({ length, activeIdx, setActiveIdx }: DotsProps) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length }).map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`h-6 w-6 rounded-full transition-colors ${
              idx === activeIdx ? 'bg-primary' : 'bg-tertiary'
            }`}
          />
        );
      })}
    </div>
  );
};
