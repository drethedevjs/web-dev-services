import Offerings from "@/components/Offerings";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <CallToAction title="Get in Touch" icon="phone" buttonText="Contact Us" />
    </>
  );
}
