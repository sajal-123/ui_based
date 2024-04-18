import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import INstructor from "@/components/INstructor";
import Footer from "@/components/ui/Footer";
import TEstimonialCards from "@/components/ui/TEstimonialCards";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";


export default function Page() {

  return (
    <main className="min-h-screen ng-black/[0.98] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TEstimonialCards/>
      <UpcomingWebinars/>
      <INstructor/>
      <Footer/>
    </main>
  )
}