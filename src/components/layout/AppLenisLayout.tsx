import { ReactLenis } from 'lenis/react';

interface AppLenisLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function AppLenisLayout({ children }: AppLenisLayoutProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}
