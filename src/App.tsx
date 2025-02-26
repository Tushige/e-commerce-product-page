import './App.css';
import AppNotificationBar from './components/AppNotificationBar';
import AppSectionDividerImage from './components/AppSectionDividerImage';
import AppContainerLayout from './components/layout/AppContainerLayout';
import AppLenisLayout from './components/layout/AppLenisLayout';
import AppFooter from './ui/AppFooter';
import AppHeader from './ui/AppHeader';
import AppHero from './ui/AppHero';
import AppInfoSection from './ui/AppInfoSection';
import AppNewProductsList from './ui/AppNewProductsList';
import AppProductsList from './ui/AppProductsList';
import { newProductsList } from '@data/new-product-data';

function App() {
  return (
    <AppLenisLayout>
      <div className="size-full bg-white font-miera-regular">
        <div className="size-full min-h-screen">
          <div className="size-full bg-linear-to-r/oklch from-indigo-500 to-teal-400">
            <AppHeader />
            <AppContainerLayout>
              <AppHero />
            </AppContainerLayout>
          </div>
          <div className="relative">
            <AppSectionDividerImage className="absolute w-full h-auto top-0 left-[50%] translate-x-[-50%] translate-y-[-80%] z-0" />
            <AppProductsList className="relative z-[1]" />
          </div>
          <AppContainerLayout className="bg-white mt-12">
            <AppNewProductsList products={newProductsList} />
          </AppContainerLayout>
          <AppContainerLayout className="bg-white mt-12 mb-12">
            <AppInfoSection />
          </AppContainerLayout>
          <AppFooter />
        </div>
      </div>
    </AppLenisLayout>
  );
}

export default App;
