import { useState } from 'react';
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
    <ul className="accordion p-4">
      {sections.map(({ id, title, contents }) => {
        const isExpanded = openSections.has(id);

        return (
          <li className="accordion-item w-full p-2" key={id}>
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
                console.log(newOpenSections);
              }}
            >
              <span className="font-miera-demibold text-xl py-4">{title}</span>
              <AppPlusIcon
                aria-hidden={true}
                className={[
                  'w-[4rem] duration-300 origin-center',
                  isExpanded && 'rotate-90',
                ]
                  .filter(Boolean)
                  .join(' ')}
                stroke="#f54a00"
                fill="#f54a00"
                width="28px"
                height="28px"
              />
            </button>
            <div
              className="py-4 text-secondary flex flex-col gap-2"
              hidden={!isExpanded}
            >
              {contents}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
