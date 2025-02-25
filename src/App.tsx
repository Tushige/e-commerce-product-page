import './App.css';
import AppNotificationBar from './components/AppNotificationBar';
import AppSectionDividerImage from './components/AppSectionDividerImage';
import AppContainerLayout from './components/layout/AppContainerLayout';
import AppFooter from './ui/AppFooter';
import AppHeader from './ui/AppHeader';
import AppHero from './ui/AppHero';
import AppInfoSection from './ui/AppInfoSection';
import AppNewProductsList from './ui/AppNewProductsList';
import AppProductsList from './ui/AppProductsList';
import { newProductsList } from '@data/new-product-data';

const notificationItems = [
  'SHOP NOW',
  'SUBSCRIBE & SAVE 10% ON YOUR FAVORITE SMOOTHIES',
];

function App() {
  return (
    <div className="size-full bg-white font-miera-regular">
      <div className="size-full min-h-screen bg-linear-to-r/oklch from-indigo-500 to-teal-400">
        <AppNotificationBar
          items={notificationItems}
          className="bg-[#FCE22A] text-black sticky top-0 z-[2]"
        />
        <div className="p-8" />
        <AppHeader className="sticky top-[4rem] z-[2]" />
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
  );
}

export default App;
