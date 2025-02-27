import AppBackdrop from '../../components/AppBackdrop';
import AppButtonLink from '../../components/AppButtonLink';
import AppTypeWriter from '../../components/AppTypeWriter';
import { cn } from '../../utils';
import './styles.css';

const animatedWords = ['delicious', 'healthy', 'portable'];

const AppHero = () => {
  return (
    <div className="size-full min-h-[100vh] flex flex-col items-center justify-center relative pb-[2rem]">
      <HeroBackdropContent className="absolute top-0 left-0 size-full z-[0]" />
      <div className="relative grid grid-cols-10">
        <HeroContentSection className="col-span-10 lg:col-span-4 flex flex-col gap-y-4" />
        <ProductSection className="relative order-first mb-12 col-span-10 lg:order-last lg:col-span-6 lg:mb-0" />
      </div>
    </div>
  );
};

function ProductSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <AppBackdrop />
      <div className="images flex items-center lg:items-start justify-center lg:justify-end">
        <div className="image-1 animate-float z-[1]">
          <img
            src="images/sprout/strawberry.png"
            className="object-contain size-full max-w-[8rem] lg:max-w-[16rem] translate-x-[2rem] rotate-2 drop-shadow-button"
          />
        </div>
        <div
          className="image-2 animate-float"
          style={{
            animationDelay: '2s',
          }}
        >
          <img
            src="images/sprout/blueberry.png"
            className="object-contain size-full max-w-[8rem] lg:max-w-[16rem] translate-x-[-2rem] rotate-6 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

function HeroContentSection({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="lg:max-w-[24rem] font-miera-black text-center lg:text-left">
        <div className="--section-accent">
          <div className="flex gap-2 justify-center lg:justify-start items-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src="images/star.svg" className="size-3" />
              ))}
            </div>
            <span className="text-sm font-miera-demibold">
              9,000+ 5 star reviews on{' '}
            </span>
            <img
              src="images/icons/amazon-2.svg"
              width="48px"
              className="translate-y-[4px]"
            />
          </div>
        </div>
        <div className="text-4xl lg:text-6xl">Superfood smoothies made</div>
        <AppTypeWriter
          words={animatedWords}
          className="text-4xl lg:text-6xl underline"
        />
        <p className="text-lg lg:text-2xl text-wrap font-miera-book mt-8 text-center lg:text-left">
          nutritious & delicious smoothies that blend effortlessly into your
          life
        </p>
        <div className="mt-8 flex justify-center lg:justify-start">
          <div className="inline-block">
            <AppButtonLink
              href="#"
              className="drop-shadow-button border-2 border-primary-foreground"
            >
              shop smoothies
            </AppButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

const backdropImages = [
  'images/seed/banana-accent-graphic-2.webp',
  'images/seed/blackberry-accent-graphic-2.webp',
  'images/seed/blueberry-accent-graphic-5.webp',
  'images/seed/mango-accent-graphic-2.webp',
  'images/seed/blueberry-accent-graphic-6.webp',
  'images/seed/strawberry-accent-graphic-4.webp',
  'images/seed/pineapple-accent-graphic-2.webp',
];

function HeroBackdropContent({ className }: { className?: string }) {
  return (
    <div className={className}>
      <FloatingBackdropImage
        src={backdropImages[0]}
        className="w-[60px] lg:w-[100px] top-[15%] right-[10%]"
      />
      <FloatingBackdropImage
        src={backdropImages[1]}
        className="w-[60px] lg:w-[100px] top-[15%] left-[10%] lg:left-[40%]"
      />
      <FloatingBackdropImage
        src={backdropImages[2]}
        className="w-[60px] lg:w-[100px] top-[50%] left-[5%]"
      />
      <FloatingBackdropImage
        src={backdropImages[3]}
        className="w-[150px] lg:w-[250px] bottom-[30%] lg:bottom-[10%] right-[2%]"
      />
      <FloatingBackdropImage
        src={backdropImages[4]}
        className="w-[60px] lg:w-[100px] bottom-[14%] right-[30%]"
      />
      <FloatingBackdropImage
        src={backdropImages[5]}
        className="w-[60px] lg:w-[100px] bottom-[24%] left-[18%]"
      />
      <FloatingBackdropImage
        src={backdropImages[6]}
        className="w-[60px] lg:w-[100px] top-[10%] lgtop-[24%] right-[25%]"
        isSpinning={true}
      />
    </div>
  );
}

function FloatingBackdropImage({
  src,
  isSpinning,
  className,
}: {
  src: string;
  isSpinning?: boolean;
  className?: string;
}) {
  return (
    <img
      src={src}
      className={cn(
        'animate-float absolute object-contain drop-shadow-button',
        { 'animate-spin': isSpinning },
        className
      )}
      style={{
        animationDelay: `${Math.round(Math.random() * 5)}s`,
      }}
    />
  );
}

export default AppHero;
