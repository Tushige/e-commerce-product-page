import { useRef, useState } from 'react';
import AppBadge from '../../components/AppBadge';
import AppSectionTitle from '../../components/AppSectionTitle';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn, getRandomint } from '../../utils';
import { use3VueData } from '../../api/use3VueData';
import { AppProduct } from '../../types';

const DEFAULT_CONTAINER_HEIGHT = 3800;

const floatingImages = [
  {
    src: 'images/seed/blackberry-accent-graphic-2.webp',
    className: 'w-[70px] lg:w-[100px]',
  },
  {
    src: 'images/seed/mango-accent-graphic-2.webp',
    className: 'w-[100px] lg:w-[140px]',
  },
  {
    src: 'images/seed/strawberry-pineapple-accent-graphics-2.webp',
    className: 'w-[100px] lg:w-[140px]',
  },
  {
    src: 'images/seed/pineapple-accent-graphic-2.webp',
    className: 'w-[100px] lg:w-[140px]',
  },
];
const floatingImages2 = [
  {
    src: 'images/seed/blackberry-accent-graphic-2.webp',
    className: 'w-[70px] lg:w-[100px]',
  },
  {
    src: 'images/seed/strawberry-accent-graphic-4.webp',
    className: 'w-[70px] lg:w-[140px]',
  },
  {
    src: 'images/seed/blackberry-accent-graphic-2.webp',
    className: 'w-[70px] lg:w-[140px]',
  },
  {
    src: 'images/seed/strawberry-accent-graphic-4.webp',
    className: 'w-[70px] lg:w-[140px]',
  },
];
export default function AppNewProductsList() {
  const { module1, isLoading } = use3VueData();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return <div className="size-full text-2xl font-miera-bold">loading</div>;
  }
  return (
    <section ref={scrollContainerRef} className="size-full relative">
      <div className="--fruits absolute top-0 size-full overflow-y-hidden overflow-x-clip">
        <ParallaxFruits
          scrollContainerRef={scrollContainerRef}
          items={floatingImages}
          yOffset="0%"
        />
        <ParallaxFruits
          scrollContainerRef={scrollContainerRef}
          items={floatingImages}
          yOffset="50%"
        />
        <ParallaxFruits
          scrollContainerRef={scrollContainerRef}
          items={floatingImages2}
          yOffset="100%"
        />
      </div>
      <AppSectionTitle
        title="Introducing"
        className="my-8 lg:my-12 text-center"
      />
      <div className="flex flex-col gap-[4rem] lg:gap-[24rem]">
        {module1.subContent.map((product: AppProduct) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}

type ProductItemProps = {
  product: AppProduct;
};

function ProductItem({ product }: ProductItemProps) {
  const { title, description, imageUrl, productImageSrc, features } = product;

  return (
    <div className="grid grid-cols-10 justify-items-stretch lg:justify-items-center">
      <div className="col-span-10 lg:col-span-5 flex flex-col gap-2 items-center lg:items-start transition-all duration-300">
        <AppBadge className="inline-block">Healthy</AppBadge>
        <h2 className="text-primary-foreground font-miera-demibold text-2xl md:text-5xl lg:text-6xl lg:max-w-[23rem] text-center lg:text-left">
          {title}
        </h2>
        <p className="text-secondary font-demibold text-xl lg:text-2xl lg:max-w-[23rem] text-center lg:text-left">
          {description}
        </p>
      </div>
      <motion.div
        className="col-span-10 lg:absolute m-auto w-full z-[1] pointer-events-none"
        initial={{
          scale: 0,
          y: 100,
        }}
        whileInView={{
          scale: 1,
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
          },
        }}
        viewport={{ once: true }}
      >
        <img
          src={productImageSrc}
          className="hidden lg:block w-[12rem] lg:w-[18rem] absolute left-[50%] translate-x-[-50%] translate-y-[50%] drop-shadow-button animate-float"
          style={{
            animationDelay: `${Number(product.id) / 100}s`,
          }}
        />
        {/**display on mobile */}
        <img
          src={productImageSrc}
          className="w-[16rem] m-auto animate-float drop-shadow-button lg:hidden pointer-events-none"
          style={{
            animationDelay: `${Number(product.id) / 100}s`,
          }}
        />
      </motion.div>
      <div className="col-span-10 lg:col-span-5 grid justify-items-stretch">
        <div className="relative bg-image h-auto object-cover rounded-3xl overflow-hidden mt-8 lg:mt-0">
          <img src={imageUrl} className="size-full brightness-50" />
          <ul className="absolute top-[50%] left-[50%] lg:left-[60%] xl:left-[50%] translate-[-50%] flex flex-col gap-4 w-full lg:w-auto p-4 lg:p-0">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <li
                  key={idx}
                  className="flex gap-2 items-center pb-4 border-b-1 border-b-white"
                >
                  <div
                    className="bg-primary rounded-full p-2 lg:p-4"
                    style={{
                      backgroundColor: feature.iconBgColor || '#fff',
                    }}
                  >
                    <Icon
                      width="36px"
                      height="36px"
                      className="hidden lg:inline-block"
                    />
                    <Icon
                      width="24px"
                      height="24px"
                      className="inline-block lg:hidden"
                    />
                  </div>
                  <span className="font-miera-demibold text-lg lg:text-xl">
                    {feature.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
type ParallaxFruitsProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  yOffset: string;
  items: {
    src: string;
    className: string;
  }[];
};
function ParallaxFruits({
  scrollContainerRef,
  items,
  yOffset,
}: ParallaxFruitsProps) {
  return (
    <div
      className="--fruits-container absolute bottom-0 size-full z-[2] pointer-events-none"
      style={{
        transform: `translateY(${yOffset})`,
      }}
    >
      <div className="absolute bottom-0 w-full flex flex-col">
        {items.map(({ src, className }, idx) => (
          <ParallaxImage
            key={`${src}-${idx}`}
            scrollContainerRef={scrollContainerRef}
            src={src}
            idx={idx}
            className={className}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * each image scrolls at a different speed.
 * There's a 50% chance they'll spin
 */
type ParallaxImageProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  idx: number;
  className: string;
};
function ParallaxImage({
  scrollContainerRef,
  src,
  idx,
  className,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start end', 'end start'],
  });
  const [multiplier, _] = useState(getRandomint(1.2, 1.6));
  const translateY = useTransform(scrollYProgress, (progress) => {
    if (!scrollContainerRef.current)
      return -progress * DEFAULT_CONTAINER_HEIGHT;
    const { height } = scrollContainerRef.current.getBoundingClientRect();
    return -progress * height * multiplier;
  });
  const opacityRatio = useTransform(scrollY, (progress) => {
    if (!containerRef.current) return 0;
    const { y } = containerRef.current.getBoundingClientRect();
    return y / progress;
  });
  const opacityValue = useTransform(opacityRatio, [0, 0.1], [0, 1]);
  return (
    <motion.div
      className={cn('w-full flex flex-col')}
      style={{
        x: 0,
        y: translateY,
        opacity: opacityValue,
      }}
      ref={containerRef}
    >
      <div
        className={cn('w-fit drop-shadow-xl', {
          'animate-spin': getRandomint(0, 1) >= 0.5,
          'self-end': idx % 2 !== 0,
        })}
      >
        <img src={src} className={className} />
      </div>
    </motion.div>
  );
}
