import SproutLogo from '../../components/SproutLogo';
import { cn } from '../../utils';

export default function AppHeader({ className }: { className?: string }) {
  return (
    <div className={cn('flex justify-center', className)}>
      <div className="bg-white container rounded-full max-w-[70%] flex p-2 px-8 justify-between">
        <div className="left-side basis-64 text-black justify-self-start flex items-center gap-[1rem]">
          <button>Shop +</button>
          <a href="#">our story</a>
        </div>
        <div className="basis-128 flex justify-center">
          <SproutLogo />
        </div>
        <div className="basis-64 text-black flex items-center justify-end gap-[1rem]">
          <a href="#">subscribe & save</a>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}
