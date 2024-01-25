import OurProducts from "./OurProducts";
import NewHeader from "./NewHeader";
import OtherStores from "./otherStores";
import NewHero from "./NewHero";
import ShareProducts from "./ShareProducts";
import { Footer } from "./Footer";
import BrowsetheRange from "./BrowsetheRange";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen">
      <NewHeader />
      <NewHero />
      <BrowsetheRange />
      <OurProducts />
      <OtherStores />
      <ShareProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
