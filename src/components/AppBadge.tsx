import { cn } from '../utils';
import { motion } from 'motion/react';
/**
 * props
 * direction:
 * 0 -> enter from top
 * 1 -> enter from bottom
 */
export interface AppBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  enterFromBottom?: boolean;
}

export default function AppBadge({
  className,
  enterFromBottom,
  children,
}: AppBadgeProps) {
  return (
    <motion.div
      className={cn(
        'border-transparent bg-primary px-2.5 py-0.5 font-miera-demibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary-foreground hover:bg-primary/80 rounded-full w-fit',
        className
      )}
      initial={{
        y: enterFromBottom ? 50 : -50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 0.5,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}
