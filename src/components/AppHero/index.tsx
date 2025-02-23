import AppButtonLink from '../AppButtonLink';
import AppTypeWriter from '../AppTypeWriter';
import './styles.css';

const animatedWords = ['delicious', 'healthy', 'portable'];

const AppHero = ({}) => {
  return (
    <div className="text-4xl min-w-screen min-h-screen size-full bg-[#37a6ca] flex justify-center">
      <div className="container px-4 min-h-[100vh] flex items-center justify-center">
        <div className="grid grid-cols-10">
          <div className="col-span-10 lg:col-span-4 flex flex-col gap-y-4">
            <div className="lg:max-w-[24rem] font-miera-black text-center lg:text-left">
              <div className="--section-accent">
                <span className="--small-title-stars">
                  {/* TODO - add how many stars you got on Amazon */}
                </span>
              </div>
              <div className="text-4xl lg:text-6xl">
                Superfood smoothies made
              </div>
              <AppTypeWriter
                words={animatedWords}
                fps={10}
                className="text-4xl lg:text-6xl"
              />
              <p className="text-2xl text-wrap font-miera-book mt-8 text-center lg:text-left">
                nutritious & delicious smoothies that blend effortlessly into
                your life
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="inline-block">
                  <AppButtonLink href="#" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-first col-span-10 lg:order-second lg:col-span-6 mb-12 lg:mb-0">
            <div className="images flex items-center lg:items-start justify-center lg:justify-end">
              <div className="image-1 animate-float z-[1]">
                <img
                  src="images/seed/hero-featured-product-1.webp"
                  className="object-contain size-full max-w-[20rem] translate-x-[3rem]"
                />
              </div>
              <div
                className="image-2 animate-float"
                style={{
                  animationDelay: '2s',
                }}
              >
                <img
                  src="images/seed/hero-featured-product-2.webp"
                  className="object-contain size-full max-w-[20rem] translate-x-[-3rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
