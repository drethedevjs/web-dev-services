import ICallToActionProps from "@/interfaces/ICallToAction";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function CallToAction({ title, icon, buttonText }: ICallToActionProps) {
  const HeroIcon = {
    phone: PhoneArrowDownLeftIcon,
  }[icon];

  return (
    <div className="contact-call-to-action">
      <HeroIcon className="drop-shadow-lg size-16 lg:size-32 rotate-0 hover:-rotate-6 transition-transform mb-10 text-secondary" />
      <h2>{title}</h2>
      <p className="text-eggshell">
        Whether you're looking to build a brand-new website or need help improving your current one,
        we're here to help! Our team specializes in custom web development that's tailored to your
        business needs. Reach out today to get started and let's make your vision a reality!
      </p>
      <Link className="cta-btn" href={"/contact"}>
        {buttonText}
      </Link>
    </div>
  );
}
