import { IService } from "@/interfaces/IService";
import { CodeBracketIcon, GlobeAltIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid";

const services: IService[] = [
  {
    id: 1,
    name: "Web Design",
    description: "Custom, responsive website design tailored to your brand and business needs.",
    icon: CodeBracketIcon
  },
  {
    id: 2,
    name: "Site Hosting",
    description: "Reliable and fast web hosting with enhanced security and uptime for your site.",
    icon: GlobeAltIcon
  },
  {
    id: 3,
    name: "Site Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your website running smoothly.",
    icon: WrenchScrewdriverIcon
  }
];

export default services;