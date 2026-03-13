import BannerCarousel from "../components/BannerCarousel";
import FeatureGrid from "../components/FeatureGrid";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import CategoryPreview from "../components/CategoryPreview";

export default function Page() {
  return (
    <>
      <BannerCarousel />
      <FeatureGrid />
      <CategoryPreview />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}