import AppAccordion from '../components/AppAccordion';
import AppLink from '../components/AppLink';
import InstagramLogo from '../components/InstagramLogo';
import SproutLogo from '../components/SproutLogo';
import YoutubeLogo from '../components/YoutubeLogo';
import { motion } from 'motion/react';
const sections = [
  {
    title: 'shop',
    id: '1',
    contents: [
      <AppLink
        href="#"
        className="text-tertiary font-meria-regular hover:text-primary-foreground mt-2"
      >
        best sellers
      </AppLink>,
      <AppLink
        href="#"
        className="text-tertiary font-meria-regular hover:text-primary-foreground"
      >
        immune support
      </AppLink>,
    ],
  },
  {
    title: 'about us',
    id: '2',
    contents: [
      <AppLink
        href="#"
        className="text-tertiary font-meria-regular hover:text-primary-foreground mt-2"
      >
        our story
      </AppLink>,
      <AppLink
        href="#"
        className="text-tertiary font-meria-regular hover:text-primary-foreground"
      >
        store locator
      </AppLink>,
    ],
  },
  {
    title: 'legal',
    id: '3',
    contents: [
      <AppLink
        href="#"
        className="text-tertiary font-meria-regular hover:text-primary-foreground mt-2"
      >
        terms & conditions
      </AppLink>,
      <AppLink
        href="#"
        className="text-tertiary font-meria-regular hover:text-primary-foreground"
      >
        privacy policy
      </AppLink>,
    ],
  },
];
export default function AppFooter() {
  return (
    <section className="bg-accent p-4 lg:p-8 rounded-t-[2rem]">
      <div className="grid grid-cols-12 text-primary-foreground bg-white p-8 rounded-[2rem]">
        <div className="col-span-12 w-full max-w-[500px] items-stretch justify-self-center lg:justify-self-start lg:col-span-4 flex flex-col gap-2 pr-0 lg:pr-12">
          <h2 className="text-2xl lg:text-4xl font-miera-demibold">
            get 10% off your order!
          </h2>
          <p>Sign up for email and get 10% off your first order</p>
          <input
            type="text"
            placeholder="email address"
            className="max-w-[100%] bg-white rounded-[4rem] border-primary-foreground border-[2px] px-4 py-2"
          />
          <motion.button
            className="bg-primary mt-4 place-self-center w-fit cursor-pointer rounded-full px-6 py-2 flex items-center justify-center hover:scale-[1.03] duration-300 hover:drop-shadow-button text-primary-foreground text-lg font-miera-demibold"
            whileTap={{
              scale: 0.8,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.3,
              },
            }}
          >
            subscribe
          </motion.button>
        </div>
        <motion.div className="col-span-12 lg:col-span-4 w-full max-w-[600px] justify-self-center lg:justify-self-start">
          <AppAccordion sections={sections} />
        </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-[2rem] lg:gap-0 mt-18 lg:mt-[12rem] ">
        <div className="col-span-12 md:col-span-4 w-full flex justify-center lg:justify-start gap-2">
          <a
            href="#"
            className="hover:scale-110 duration-300 origin-center bg-white rounded-full p-2 lg:p-4"
          >
            <InstagramLogo
              fill="var(--color-accent)"
              width="48px"
              height="48px"
            />
          </a>
          <a
            href="#"
            className="hover:scale-110 duration-300 origin-center bg-white rounded-full p-2 lg:p-4"
          >
            <YoutubeLogo
              fill="var(--color-accent)"
              width="48px"
              height="48px"
            />
          </a>
        </div>
        <div className="col-span-12 md:col-span-4 m-auto w-fit">
          <SproutLogo className="w-[8rem] lg:w-[12rem]" />
        </div>
      </div>
    </section>
  );
}
