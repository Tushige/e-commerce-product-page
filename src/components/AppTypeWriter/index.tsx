import { useRef, useState } from 'react';
import { animate } from 'motion';
import { motion, useInView, useMotionValue, useTransform } from 'motion/react';
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
 * />
 * ```
 */
type AppTypeWriterProps = {
  words: String[];
  className?: String;
  repeat?: number;
};

export default function AppTypeWriter({
  words,
  className,
  repeat = Infinity,
}: AppTypeWriterProps) {
  const [isComplete, setIsComplete] = useState(false);
  const wordIndex = useMotionValue(0);
  const word = useTransform(wordIndex, (last) => words[last] || '');
  const count = useMotionValue(0);
  const charLength = useTransform(count, (last) => Math.round(last));
  const displayText = useTransform(charLength, (last) =>
    word.get().slice(0, last)
  );
  const updatedThisRound = useMotionValue(true); // helps us figure out if we're starting a new text animation

  useEffect(() => {
    let len = words.reduce((aggr, curr) => Math.max(aggr, curr.length), 0);
    const controls = animate(count, len, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
      repeat: repeat,
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
    controls.then(() => {
      setIsComplete(true);
    });
    return controls.stop;
  }, []);

  return (
    <div className={cn('', className)}>
      <motion.span>{displayText}</motion.span>
      {!isComplete && <span className="animate-blink">|</span>}
    </div>
  );
}
