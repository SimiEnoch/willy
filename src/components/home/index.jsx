import OurProducts from './OurProducts';
import NewHeader from './NewHeader';
import OtherStores from './otherStores';
import NewHero from './NewHero';
import { Footer } from './Footer';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen">
      <NewHeader />
      <NewHero />
      <OurProducts />
      <OtherStores />
      <Footer />
    </div>
  );
};

export default HomePage;
