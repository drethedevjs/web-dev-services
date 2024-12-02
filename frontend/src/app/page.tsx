import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CallToAction
        title="Get in Touch"
        icon="phone"
        buttonText="Contact Us"
        />
    </>
  );
}
