import AppLinkCard from '../../components/AppLinkCard';
import { infoCards } from '@data/info-cards';
import { motion } from 'motion/react';
export default function AppInfoSection() {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 lg:mt-[24rem]">
      {infoCards.map((card, idx) => (
        <motion.li
          key={card.id}
          className="w-full"
          initial={{
            y: 50,
            opacity: 0.8,
            scale: 1.2,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: idx * 0.15,
            },
          }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
        >
          <AppLinkCard card={card} />
        </motion.li>
      ))}
    </ul>
  );
}
