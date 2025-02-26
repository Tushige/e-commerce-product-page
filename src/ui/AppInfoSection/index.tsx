import AppLinkCard from '../../components/AppLinkCard';
import { motion } from 'motion/react';
import { use3VueData } from '../../api/use3VueData';
import { AppLinkCard as AppLinkCardType } from '../../types';

export default function AppInfoSection() {
  const { module2, isLoading, isError } = use3VueData();
  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div className="text-red-500 font-miera-bold">Please try again</div>;
  }
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 lg:mt-[24rem]">
      {module2.map((card: AppLinkCardType, idx: number) => (
        <motion.li
          key={card.id}
          className="w-full"
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
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
