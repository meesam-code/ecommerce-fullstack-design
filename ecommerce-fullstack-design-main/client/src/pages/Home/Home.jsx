import React from "react";
import MainLeft from "../../components/Home/MainComponent/MainLeft";
import MainMiddle from "../../components/Home/MainComponent/MainMiddle";
import MainRight from "../../components/Home/MainComponent/MainRight";
import HomeDeal from "../../components/Home/HomeDealsAndOffers/HomeDeal";
import HomeOutDoor from "../../components/Home/HomeOutdoor/HomeOutDoor";
import HomeElectronics from "../../components/Home/HomeElectronics/HomeElectronics";
import HomeSupplierCard from "../../components/Home/HomeContectSupplier/HomeSupplierCard";
import RecommendedCard from "../../components/Home/HomeRecommendedItems/RecommendedCard";
import HomeRecommended from "../../components/Home/HomeRecommendedItems/HomeRecommended";
import ExtraServices from "../../components/Home/ExtraServices/ExtraServices";
import HomeSuppliers from "../../components/Home/HomeSupplier.jsx/HomeSuppliers";
import NewsLetter from "../../components/Home/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <main>
      <section
        aria-label="Main navigation and highlights"
        className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:py-[20px] pt-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-4  lg:gap-4 md:rounded border border-[#DEE2E7] bg-white items-stretch">
          {/* Left - Hidden on small screens */}
          <aside
            className="hidden md:flex md:col-span-1"
            aria-label="Main categories"
          >
            <MainLeft className="flex-1" />
          </aside>

          {/* Middle - Always visible, full width on small, span 2 cols on md+ */}
          <section
            className="col-span-1 md:col-span-2 flex sm:justify-center justify-start  sm:items-center"
            aria-label="Featured products"
          >
            <MainMiddle className="flex-1" />
          </section>

          {/* Right - Hidden on small screens */}
          <aside
            className="hidden md:flex md:col-span-1"
            aria-label="User actions and offers"
          >
            <MainRight className="flex-1" />
          </aside>
        </div>
      </section>

      <section
        aria-label="Deals and offers"
        className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-[10px] sm:py-[15px] pt-[20px]"
      >
        <HomeDeal />
      </section>

      <section
        aria-label="Outdoor products"
        className="sm:px-15  md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-[10px]"
      >
        <HomeOutDoor />
      </section>

      <section
        aria-label="Electronics"
        className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] pt-[10px]"
      >
        <HomeElectronics />
      </section>

      <section
        aria-label="Supplier cards"
        className="sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] pt-6 "
      >
        <HomeSupplierCard />
      </section>

      <section
        aria-label="Recommended items"
        className="px-4 sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-4 "
      >
        <HomeRecommended />
      </section>

      <section
        aria-label="Extra services"
        className="px-4 sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] py-4"
      >
        <ExtraServices />
      </section>

      <section
        aria-label="Top suppliers"
        className="px-4 sm:px-15 md:px-[40px] bg-[#f7fafc] lg:px-[50px] pb-4"
      >
        <HomeSuppliers />
      </section>

      <section aria-label="Newsletter" className="bg-[#f7fafc] pt-3">
        <NewsLetter />
      </section>
    </main>
  );
};

export default Home;
