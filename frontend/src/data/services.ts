import {
  CodeBracketIcon,
  GlobeAltIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/16/solid";
import { IService } from "../interfaces/IService";

const services: IService[] = [
  {
    id: 1,
    name: "Web Design",
    description: "Custom, responsive website design tailored to your brand and business needs.",
    icon: CodeBracketIcon,
  },
  {
    id: 2,
    name: "Site Hosting",
    description: "Reliable and fast web hosting with enhanced security and uptime for your site.",
    icon: GlobeAltIcon,
  },
  {
    id: 3,
    name: "Site Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and technical support to keep your website running smoothly.",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 4,
    name: "Simple and affordable",
    description:
      "From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline",
    icon: ServerStackIcon,
  },
];

export default services;
