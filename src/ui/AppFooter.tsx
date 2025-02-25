import AppAccordion from '../components/AppAccordion';
import InstagramLogo from '../components/InstagramLogo';
import SproutLogo from '../components/SproutLogo';
import YoutubeLogo from '../components/YoutubeLogo';

const sections = [
  {
    title: 'shop',
    id: '1',
    contents: [
      <a
        href="#"
        className="text-tertiary hover:text-primary-foreground hover:underline"
      >
        Best Sellers
      </a>,
      <a
        href="#"
        className="text-tertiary hover:text-primary-foreground hover:underline"
      >
        Immune Support
      </a>,
    ],
  },
  {
    title: 'about us',
    id: '2',
    contents: [
      <a
        href="#"
        className="text-tertiary hover:text-primary-foreground hover:underline"
      >
        our story
      </a>,
      <a
        href="#"
        className="text-tertiary hover:text-primary-foreground hover:underline"
      >
        store locator
      </a>,
    ],
  },
  {
    title: 'legal',
    id: '3',
    contents: [
      <a
        href="#"
        className="text-tertiary hover:text-primary-foreground hover:underline"
      >
        terms & conditions
      </a>,
      <a
        href="#"
        className="text-tertiary hover:text-primary-foreground hover:underline"
      >
        privacy policy
      </a>,
    ],
  },
];
export default function AppFooter() {
  return (
    <section className="bg-accent p-8 rounded-t-[2rem]">
      <div className="grid grid-cols-12 text-primary-foreground bg-white p-8 rounded-[2rem]">
        <div className="col-span-12 max-w-[500px] lg:col-span-4 flex flex-col gap-2 pr-12">
          <h2 className="text-4xl font-miera-demibold">
            get 10% off your order!
          </h2>
          <p>Sign up for email and get 10% off your first order</p>
          <input
            type="text"
            placeholder="email address"
            className="max-w-[100%] bg-white rounded-[4rem] border-1 px-4 py-2"
          />
          <button className="bg-primary mt-4 place-self-center w-fit cursor-pointer rounded rounded-full px-6 py-2 flex items-center justify-center hover:scale-[1.03] duration-300 hover:drop-shadow-button text-slate-700 text-lg font-miera-demibold">
            subscribe
          </button>
        </div>
        <div className="col-span-12 lg:col-span-4 max-w-[600px]">
          <AppAccordion sections={sections} />
        </div>
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
