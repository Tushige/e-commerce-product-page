import { motion } from 'motion/react';
import { cn } from '../utils';

interface AppLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  className?: string;
}
export default function AppLink({ href, className, children }: AppLinkProps) {
  const variants = {
    rest: {
      width: '0%',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.3,
      },
    },
    hover: {
      width: '100%',
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.a
      href={href}
      className={cn(
        'bg-white w-fit flex flex-col items-centerduration-300 text-slate-700 text-md lg:text-md font-miera-demibold',
        className
      )}
      animate="rest"
      whileHover="hover"
    >
      <span>{children}</span>
      <motion.div variants={variants} className="bg-primary h-[2px]" />
    </motion.a>
  );
}
