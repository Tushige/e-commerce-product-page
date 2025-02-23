import { animate } from 'motion';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { cn } from '../../utils';

/**
 * AppTypeWriter
 *
 * Description: A component that simulates a typewriter effect, displaying an array of words one at a time with a specified typing speed.
 *
 * Props:
 *  - words (string[]): An array of strings that the typewriter will cycle through. (Required)
 *  - duration (number): The typing speed in milliseconds. Determines how fast each character is typed. (Required)
 *
 * Example Usage:
 * ```tsx
 * <AppTypeWriter
 *   words={['Hello', 'World', 'React']}
 *   speed={10}
 * />
 * ```
 */
type AppTypeWriterProps = {
  words: String[];
  fps: number;
  className?: String;
};

export default function AppTypeWriter({
  words,
  fps,
  className,
}: AppTypeWriterProps) {
  const wordIndex = useMotionValue(0);
  const word = useTransform(wordIndex, (last) => words[last] || '');
  const count = useMotionValue(0);
  const charLength = useTransform(count, (last) => Math.round(last));
  const displayText = useTransform(charLength, (last) =>
    word.get().slice(0, last)
  );
  const updatedThisRound = useMotionValue(true); // helps us figure out if we're starting a new text animation

  useEffect(() => {
    const controls = animate(count, fps, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(last) {
        if (updatedThisRound.get() && Number(last) > 0) {
          updatedThisRound.set(false);
        } else if (!updatedThisRound.get() && Number(last) === 0) {
          wordIndex.set((wordIndex.get() + 1) % words.length);
          updatedThisRound.set(true);
        }
      },
    });
    return controls.stop;
  }, []);

  return (
    <div className={cn('', className)}>
      <motion.span className="underline">{displayText}</motion.span>
      <span className="animate-blink">|</span>
    </div>
  );
}
