import Banner from "@/components/Banner";
import Company from "@/components/Company";
import Dreams from "@/components/Dreams";
import Footer from "@/components/Footer";
import FutureLiving from "@/components/FutureLiving";
import Hero from "@/components/Hero";
import HomeBuilds from "@/components/HomeBuilds";
import InvestWisely from "@/components/InvestWisely";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import ContactUsForm from "@/components/form/ContactUsForm";
import CrewForm from "@/components/form/CrewForm";
import ContactForm from "@/components/form/Form";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-14">
      <Hero />
      <Services />
      <Dreams />
      <Banner />
      <Slider />
      <Project />
      <CrewForm />
      <HomeBuilds />
      <ContactUsForm />
      <FutureLiving />
      <InvestWisely />
      <Company />
      <Footer />
    </main>
  );
}
