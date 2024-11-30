
export default function CallToAction({ title, icon, buttonText }: {title: string; buttonText:string; icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;}) {
  const HeroIcon = icon;
  return (
    <div className="contact-call-to-action">
      <HeroIcon className="size-32 rotate-0 hover:-rotate-6 transition-transform mb-10" />
      <h2>{title}</h2>
      <p>
        Whether you're looking to build a brand-new website or need help improving 
        your current one, we're here to help! Our team specializes in custom web 
        development that's tailored to your business needs. Reach out today to get 
        started and let's make your vision a reality!
      </p>
      <button className="cta-btn">{ buttonText }</button>
    </div>
  )
}
