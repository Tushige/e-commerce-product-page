import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AppPlusIcon from '../AppPlusIcon';

type Section = {
  title: string;
  id: string;
  contents: React.ReactElement[];
};
type AppAccordionProps = {
  sections: Section[];
};
export default function AppAccordion({ sections }: AppAccordionProps) {
  const [openSections, setOpenSections] = useState(new Set());
  return (
    <motion.ul className="accordion p-4">
      {sections.map(({ id, title, contents }) => {
        const isExpanded = openSections.has(id);

        return (
          <motion.li className="accordion-item w-full p-2" key={id}>
            <button
              className="w-full border-b-1 border-tertiary flex justify-between items-center cursor-pointer"
              onClick={() => {
                const newOpenSections = new Set(openSections);
                if (newOpenSections.has(id)) {
                  newOpenSections.delete(id);
                } else {
                  newOpenSections.add(id);
                }
                setOpenSections(newOpenSections);
              }}
            >
              <span className="font-miera-demibold text-lg lg:text-xl py-4">
                {title}
              </span>
              <motion.div
                animate={isExpanded ? 'open' : 'close'}
                variants={{
                  open: {
                    rotateZ: '90deg',
                  },
                  close: {
                    rotateZ: '0deg',
                  },
                }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0.3 }}
              >
                <AppPlusIcon
                  aria-hidden={true}
                  className={'w-[4rem] duration-800 origin-center'}
                  stroke="#f54a00"
                  fill="#f54a00"
                  width="28px"
                  height="28px"
                />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  className="text-secondary flex flex-col"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: { type: 'spring', duration: 0.4, bounce: 0.3 },
                  }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {contents}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
