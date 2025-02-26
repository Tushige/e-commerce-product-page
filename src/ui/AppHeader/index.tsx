import AppButton from '../../components/AppButton';
import AppLink from '../../components/AppLink';
import SproutLogo from '../../components/SproutLogo';
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { cn } from '../../utils';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import AppNotificationBar from '../../components/AppNotificationBar';
import { flushSync } from 'react-dom';

const notificationItems = [
  'SHOP NOW',
  'SUBSCRIBE & SAVE 10% ON YOUR FAVORITE SMOOTHIES',
];

/**
 * When we scroll over 100px, we make our header stick to the top.
 *
 */
const SCROLL_OFFSET_TRIGGER = 100;
export default function AppHeader({ className }: { className?: string }) {
  const headerRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end end'],
  });
  const sticky = useTransform(scrollY, (progress) => {
    if (progress >= SCROLL_OFFSET_TRIGGER) {
      return true;
    }
    return false;
  });
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(sticky, 'change', (curr) => {
    setVisible(curr);
  });

  return (
    <header className={cn({ 'fixed top-0 z-[2]': sticky })}>
      <AppNotificationBar
        items={notificationItems}
        className="bg-[#FCE22A] text-black"
      />
      <div
        ref={headerRef}
        className={cn(
          'w-full flex  flex-col items-center drop-shadow-button',
          className
        )}
      >
        <AnimatePresence>
          {!visible && (
            <motion.div
              className="font-miera-bold p-2"
              initial={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: -100 }}
            >
              <span className="underline">free</span> shipping on all orders
              over <span className="font-miera-black">$21</span>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="bg-white container absolute rounded-full max-w-[90%] lg:max-w-[70%] flex p-2 px-8 justify-between "
          animate={{
            y: visible ? 10 : 40,
          }}
          transition={{
            type: 'spring',
            bounce: 0.4,
            duration: 0.3,
          }}
        >
          <div className="left-side basis-78 text-black justify-self-start items-center gap-[1rem] hidden lg:flex">
            <AppButton className="bg-gray-200 px-4">
              <span>Shop +</span>
            </AppButton>
            <AppLink href="#" className="hidden lg:block">
              our story
            </AppLink>
          </div>
          <div className="flex basis-78 lg:hidden">
            <AppButton className="bg-transparent p-0">
              <img src="images/icons/menu.svg" className="w-[32px]" />
            </AppButton>
          </div>
          <div className="basis-100 flex justify-center">
            <SproutLogo className="w-[8rem] lg:w-[12rem]" />
          </div>
          <div className="basis-78 text-black flex items-center justify-end gap-[1rem]">
            <AppLink href="#" className="hidden lg:block">
              subscribe & save
            </AppLink>
            <AppButton>
              <img
                src="images/icons/bag.svg"
                className="w-[18px] lg:w-[24px]"
              />
            </AppButton>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
