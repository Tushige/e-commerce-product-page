import './App.css';
import AppNotificationBar from './components/AppNotificationBar';
import AppHeader from './ui/AppHeader';
import AppHero from './ui/AppHero';
import AppProductsList from './ui/AppProductsList';

const notificationItems = [
  'SHOP NOW',
  'SUBSCRIBE & SAVE 10% ON YOUR FAVORITE SMOOTHIES',
];
function App() {
  return (
    <div className="size-full min-h-screen bg-linear-to-r/oklch from-indigo-500 to-teal-400">
      <AppNotificationBar
        items={notificationItems}
        className="bg-[#FCE22A] text-black sticky top-0 z-[2]"
      />
      <div className="p-8" />
      <AppHeader className="sticky top-[4rem] z-[2]" />
      <AppHero />
      <AppProductsList />
      <div className="to-delete w-full min-h-[100vh] bg-white" />
    </div>
  );
}

export default App;
