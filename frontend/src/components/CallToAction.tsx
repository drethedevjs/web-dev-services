"use client";
import ICallToActionProps from "@/interfaces/ICallToAction";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function CallToAction({ title, icon, buttonText }: ICallToActionProps) {
  const HeroIcon = {
    phone: PhoneArrowDownLeftIcon,
  }[icon];

  const router = useRouter();
  return (
    <div className="contact-call-to-action">
      <HeroIcon className="size-32 rotate-0 hover:-rotate-6 transition-transform mb-10 text-secondary" />
      <h2>{title}</h2>
      <p className="text-eggshell">
        Whether you're looking to build a brand-new website or need help improving your current one,
        we're here to help! Our team specializes in custom web development that's tailored to your
        business needs. Reach out today to get started and let's make your vision a reality!
      </p>
      <button className="cta-btn" onClick={() => router.push("/contact")}>
        {buttonText}
      </button>
    </div>
  );
}
