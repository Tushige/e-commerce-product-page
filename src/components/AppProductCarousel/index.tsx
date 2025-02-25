import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import AppArrowIcon from '../AppArrowIcon';
import { Product } from './types';
import { ProductCard } from './ProductCard';

function getMinFromSet(s: Set<number>) {
  let minVal = Infinity;
  for (const val of s) {
    minVal = Math.min(minVal, val);
  }
  return minVal;
}
function getMaxFromSet(s: Set<number>) {
  let maxVal = -Infinity;
  for (const val of s) {
    maxVal = Math.max(maxVal, val);
  }
  return maxVal;
}

export default function AppProductCarousel({
  products = [],
}: {
  products?: Product[];
}) {
  const [visibleItemsSet, setVisibleItemsSet] = useState(new Set<number>());
  const containerRef = useRef(null);
  const productRefs = useRef<Element[]>(
    Array.from({ length: products.length || 0 })
  );
  useEffect(() => {
    /**
     * We keep track of the last item that is visible in the viewport.
     * When user clicks next/previous, we move to the right/left of the last visible element.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!productRefs.current) return;
          const idx = entry.target.dataset['idx'];
          if (entry.isIntersecting) {
            flushSync(() => {
              setVisibleItemsSet((prev) => new Set([...Array.from(prev), idx]));
            });
          } else {
            flushSync(() => {
              setVisibleItemsSet(
                (prev) =>
                  new Set([...Array.from(prev).filter((i) => i !== idx)])
              );
            });
          }
        });
      },
      {
        root: containerRef.current,
        rootMargin: '0px',
        threshold: 0.9,
      }
    );
    productRefs.current.forEach((product) => {
      if (product) observer.observe(product);
    });
    return () => {
      productRefs.current.forEach((product) => {
        if (product) observer.unobserve(product);
      });
    };
  }, []);
  const nextDisabled = getMaxFromSet(visibleItemsSet) + 1 >= products.length;
  const prevDisabled = getMinFromSet(visibleItemsSet) === 0;
  const goPrev = () => {
    const minVisibleIdx = getMinFromSet(visibleItemsSet);
    if (minVisibleIdx === 0) return;
    productRefs.current[minVisibleIdx - 1].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };
  const goNext = () => {
    const maxVisibleIdx = getMaxFromSet(visibleItemsSet);
    if (maxVisibleIdx + 1 >= products.length) return;
    productRefs.current[maxVisibleIdx + 1].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };
  if (!products) return null;

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <div className="controls relative flex gap-4 justify-end py-2 px-4 lg:py-4 lg:px-8">
        <motion.button
          whileTap={
            !prevDisabled
              ? {
                  scale: 0.9,
                }
              : {}
          }
          className="text-black cursor-pointer hover:bg-zinc-200 disabled:bg-transparent active:bg-zinc-400 duration-300 disabled:cursor-auto p-2 lg:p-4 rounded-full"
          onClick={goPrev}
          disabled={prevDisabled}
        >
          <AppArrowIcon
            isLeft={true}
            disabled={prevDisabled}
            className="w-8 lg:w-12 rotate-180"
          />
        </motion.button>
        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          className="text-black cursor-pointer hover:bg-zinc-200 disabled:bg-transparent active:bg-zinc-400 duration-300 disabled:cursor-auto p-2 lg:p-4 rounded-full"
          style={{
            translateX: '0',
          }}
          onClick={goNext}
          disabled={nextDisabled}
        >
          <AppArrowIcon
            isLeft={false}
            disabled={nextDisabled}
            className="w-8 lg:w-12"
          />
        </motion.button>
      </div>
      <div className="max-w-[100vw] overflow-hidden p-8 relative">
        <ul className="flex gap-4 overflow-hidden">
          {products.map((product: Product, idx: number) => (
            <li
              key={idx}
              data-idx={idx}
              ref={(el) => {
                productRefs.current[idx] = el;
              }}
            >
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
