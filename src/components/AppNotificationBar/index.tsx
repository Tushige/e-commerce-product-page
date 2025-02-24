import { useMemo } from 'react';
import './styles.css';
import { cn } from '../../utils';

const MINIMUM_ITEMS_COUNT = 28;
export default function AppNotificationBar({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const notifications = useMemo(() => {
    const res = [];
    for (let i = 0; i < Math.round(MINIMUM_ITEMS_COUNT / items.length); i++) {
      for (let j = 0; j < items.length; j++) {
        res.push(items[j]);
      }
    }
    return res;
  }, items);
  return (
    <div className={cn('max-w-[100vw] overflow-hidden', className)}>
      <ul className="scroller-inner p-2 flex object-fit animation-scroll">
        {notifications.map((notification, idx) => (
          <li key={idx} className="whitespace-nowrap">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
}
