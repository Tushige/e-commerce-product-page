import { Product } from './types';
import { motion } from 'motion/react';
import AppButtonLink from '../AppButtonLink';
import { cn } from '../../utils';

const ANIMATION_SHIFT_Y = 30;

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const fruitTransition = {
    type: 'spring',
    duration: 0.5,
    bounce: 0.4,
  };
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
        type: 'spring',
        bounce: 0.4,
      },
    },
    hover: {
      scale: 0.9,
      y: -ANIMATION_SHIFT_Y,
      transition: {
        duration: 0.3,
        type: 'spring',
        bounce: 0.4,
      },
    },
  };
  return (
    <motion.div
      className={cn(
        'relative w-[300px] lg:w-[350px] h-[500px] flex flex-col rounded-[2rem] p-4 items-center justify-evenly overflow-hidden z-[0]',
        className
      )}
      style={{
        backgroundColor: product.styles.backgroundColor || 'bg-blue-400',
      }}
      whileHover="hover"
      whileTap="hover"
      animate="rest"
    >
      <div className="--fruits">
        <motion.img
          src={product.backdropImages.left}
          className="absolute top-[50%] left-[50%] object-contain w-24 z-[0] animate-spin drop-shadow-xl pointer-events-none"
          variants={{
            rest: {
              top: '50%',
              left: '50%',
              scale: 0,
              opacity: 0,
              transition: {
                ...fruitTransition,
                delay: 0.1,
              },
            },
            hover: {
              top: '14%',
              left: '10%',
              scale: 1,
              opacity: 1,
              transition: {
                ...fruitTransition,
              },
            },
          }}
        />
        <motion.img
          src={product.backdropImages.right}
          className="absolute top-[50%] left-[50%] object-contain w-24 z-[0] animate-spin drop-shadow-xl"
          variants={{
            rest: {
              top: '50%',
              left: '50%',
              scale: 0,
              opacity: 0,
              transition: {
                ...fruitTransition,
                delay: 0.2,
              },
            },
            hover: {
              top: '70%',
              left: '5%',
              scale: 1,
              opacity: 1,
              transition: {
                ...fruitTransition,
              },
            },
          }}
        />
        <motion.img
          src={product.backdropImages.bottom}
          className="absolute top-[50%] left-[50%] object-contain w-20 z-[0] animate-spin drop-shadow-xl"
          variants={{
            rest: {
              top: '50%',
              right: '50%',
              scale: 0,
              opacity: 0,
              transition: {
                ...fruitTransition,
              },
            },
            hover: {
              top: '20%',
              left: '80%',
              scale: 1,
              opacity: 1,
              transition: {
                ...fruitTransition,
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
        className="object-contain h-[70%] aspect-auto align-bottom z-[1] drop-shadow-button"
        variants={imageVariants}
      />
      <motion.div
        variants={{
          rest: {
            y: 100,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 0.3,
            },
          },
          hover: {
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 0.3,
            },
          },
        }}
      >
        <AppButtonLink href="#">{`Add to Cart - $${product.price / 100}`}</AppButtonLink>
      </motion.div>
    </motion.div>
  );
}
