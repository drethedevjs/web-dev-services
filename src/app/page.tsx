import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CallToAction 
        title="Get in Touch" 
        icon={PhoneArrowDownLeftIcon} 
        buttonText="Contact Us"
      />
    </main>
  );
}
