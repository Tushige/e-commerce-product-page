import { motion } from 'motion/react';
import AppButtonLink from '../AppButtonLink';
import { cn } from '../../utils';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import AppArrowIcon from '../AppArrowIcon';

type Product = {
  id: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  rating: number;
  price: number;
  backdropImages: {
    left: string;
    right: string;
    bottom: string;
  };
  styles: {
    backgroundColor: string;
  };
};

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
            setVisibleItemsSet(
              (prev) => new Set([...Array.from(prev).filter((i) => i !== idx)])
            );
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

const ANIMATION_SHIFT_Y = 30;

function ProductCard({ product }: { product: Product }) {
  const childVariants = {
    rest: {
      y: 0,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
    hover: {
      y: -100,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
  };
  const titleVariants = {
    rest: {
      y: 0,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
    hover: {
      y: -ANIMATION_SHIFT_Y,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
  };
  const subtitleVariants = {
    rest: {
      y: 0,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
    hover: {
      y: -ANIMATION_SHIFT_Y,
      transition: {
        duration: 0.3,
        delay: 0.05,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
  };
  const imageVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
    hover: {
      scale: 0.9,
      y: -ANIMATION_SHIFT_Y,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: [0.5, 0, 0, 1],
      },
    },
  };
  return (
    <motion.div
      className={cn(
        'relative w-[350px] h-[500px] flex flex-col rounded-[2rem] p-4 items-center justify-evenly overflow-hidden z-[0]'
      )}
      style={{
        backgroundColor: product.styles.backgroundColor || 'bg-blue-400',
      }}
      whileHover="hover"
      animate="rest"
    >
      <div className="--fruits">
        <motion.img
          src={product.backdropImages.left}
          className="absolute top-[50%] left-[50%] object-contain w-24 z-[0] animate-spin"
          variants={{
            rest: {
              top: '50%',
              left: '50%',
              scale: 0,
              opacity: 0,
              transition: {
                delay: 0.15,
                ease: [0.5, 0, 0, 1],
              },
            },
            hover: {
              top: '14%',
              left: '10%',
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.15,
                ease: [0.5, 0, 0, 1],
              },
            },
          }}
        />
        <motion.img
          src={product.backdropImages.right}
          className="absolute top-[50%] left-[50%] object-contain w-24 z-[0] animate-spin"
          variants={{
            rest: {
              top: '50%',
              left: '50%',
              scale: 0,
              opacity: 0,
              transition: {
                delay: 0.15,
                ease: [0.5, 0, 0, 1],
              },
            },
            hover: {
              top: '70%',
              left: '5%',
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.15,
                ease: [0.5, 0, 0, 1],
              },
            },
          }}
        />
        <motion.img
          src={product.backdropImages.bottom}
          className="absolute top-[50%] left-[50%] object-contain w-20 z-[0] animate-spin"
          variants={{
            rest: {
              top: '50%',
              right: '50%',
              scale: 0,
              opacity: 0,
              transition: {
                delay: 0.15,
                ease: [0.5, 0, 0, 1],
              },
            },
            hover: {
              top: '20%',
              left: '80%',
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.15,
                ease: [0.5, 0, 0, 1],
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <motion.div className="flex gap-2" variants={childVariants}>
          {Array.from({ length: product.rating }).map((_, i) => (
            <img key={i} src="images/star.svg" className="size-4" />
          ))}
        </motion.div>
        <motion.div
          className="font-miera-demibold text-2xl"
          variants={titleVariants}
        >
          {product.title}
        </motion.div>
        <motion.div
          className="font-miera-book text-lg"
          variants={subtitleVariants}
        >
          {product.subtitle}
        </motion.div>
      </div>
      <motion.img
        src={product.imageSrc}
        className="object-contain h-[70%] aspect-auto align-bottom z-[1]"
        variants={imageVariants}
      />
      <motion.div
        variants={{
          rest: {
            y: 100,
            transition: {
              duration: 0.3,
              type: 'tween',
              ease: [0.5, 0, 0, 1],
            },
          },
          hover: {
            y: 0,
            transition: {
              duration: 0.3,
              type: 'tween',
              ease: [0.5, 0, 0, 1],
            },
          },
        }}
      >
        <AppButtonLink
          href="#"
          text={`Add to Cart - $${product.price / 100}`}
        ></AppButtonLink>
      </motion.div>
    </motion.div>
  );
}
