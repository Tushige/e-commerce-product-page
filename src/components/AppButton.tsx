import { motion } from 'motion/react';
import { cn } from '../utils';

interface AppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export default function AppButton({
  children,
  className,
  ...props
}: AppButtonProps) {
  return (
    <motion.button
      initial={{
        scale: 1,
        transition: {
          type: 'spring',
          bounce: 1.5,
          duration: 0.3,
        },
      }}
      whileHover={{
        scale: 0.9,
        transition: {
          type: 'spring',
          bounce: 1.5,
          duration: 0.3,
        },
      }}
      className={cn(
        'bg-primary font-miera-demibold rounded-2xl p-2 cursor-pointer text-md lg:text-lg',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
