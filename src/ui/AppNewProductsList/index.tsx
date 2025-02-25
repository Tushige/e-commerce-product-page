import { JSXElementConstructor } from 'react';
import AppBadge from '../../components/AppBadge';
import AppSectionTitle from '../../components/AppSectionTitle';
import { motion } from 'motion/react';

export default function AppNewProductsList({ products }) {
  return (
    <div className="size-full">
      <AppSectionTitle
        title="Introducing"
        className="my-12 mb-24 text-center"
      />
      <div className="flex flex-col gap-[12rem] lg:gap-[24rem]">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

type ProductItemProps = {
  product: {
    id: string;
    title: string;
    subtitle: string;
    productImageSrc: string;
    backgroundImageSrc: string;
    features: [
      {
        text: string;
        icon: JSXElementConstructor<null>;
        iconBgColor: string;
      },
    ];
  };
};

function ProductItem({ product }: ProductItemProps) {
  const { title, subtitle, backgroundImageSrc, productImageSrc, features } =
    product;
  return (
    <div className="grid grid-cols-10 justify-items-stretch lg:justify-items-center">
      <div className="col-span-10 lg:col-span-5 flex flex-col gap-2 items-center lg:items-start">
        <AppBadge className="inline-block">Healthy</AppBadge>
        <h2 className="text-primary-foreground font-miera-demibold text-2xl md:text-5xl lg:text-6xl lg:max-w-[23rem] text-center lg:text-left">
          {title}
        </h2>
        <p className="text-secondary font-demibold text-xl lg:text-2xl lg:max-w-[23rem] text-center lg:text-left">
          {subtitle}
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
            animationDelay: `${product.id / 100}s`,
          }}
        />
        {/**display on mobile */}
        <img
          src={productImageSrc}
          className="w-[16rem] m-auto animate-float drop-shadow-button lg:hidden animate-float"
          style={{
            animationDelay: `${product.id / 100}s`,
          }}
        />
      </motion.div>
      <div className="col-span-10 lg:col-span-5 grid justify-items-stretch">
        <div className="relative bg-image h-auto object-cover rounded-3xl overflow-hidden mt-8 lg:mt-0">
          <img src={backgroundImageSrc} className="size-full brightness-50" />
          <ul className="absolute top-[50%] left-[50%] lg:left-[60%] xl:left-[50%] translate-[-50%] flex flex-col gap-4 w-full lg:w-auto p-4 lg:p-0">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <li
                  key={idx}
                  className="flex gap-2 items-center pb-4 border-b-1 border-b-white"
                >
                  <div
                    className="bg-primary rounded rounded-full p-4"
                    style={{
                      backgroundColor: feature.iconBgColor || '#fff',
                    }}
                  >
                    <Icon
                      width="40px"
                      height="40px"
                      className="hidden lg:inline-block"
                    />
                    <Icon
                      width="20px"
                      height="20px"
                      className="inline-block lg:hidden"
                    />
                  </div>
                  <span className="font-miera-demibold text-xl">
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
