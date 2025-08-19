import {
  Award, 
  Shield,
  MapPin,
  TrendingUp,
  LineChart,
  ShoppingBag,
  Network,
  Calendar,
  Heart
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Award,
    name: "ABA Certification",
    description: "Distinguish yourself with official American Barber Association certification, the gold standard of professional excellence in our industry.",
    href: "#",
    cta: "Get Certified",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-orange-400/20 to-red-500/20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Shield,
    name: "BarberSafe Standards",
    description: "Demonstrate your commitment to safety, quality, and reliability with certification that clients trust and respect.",
    href: "#",
    cta: "Learn Safety",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: MapPin,
    name: "Booth Marketplace",
    description: "Connect with premium booth rental opportunities or list your available spaces to qualified professionals nationwide.",
    href: "#",
    cta: "Find Booths",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: TrendingUp,
    name: "Business Insurance",
    description: "Secure comprehensive coverage including liability, property, workers' compensation, and professional protection.",
    href: "#",
    cta: "Get Coverage",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400/20 to-violet-500/20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: LineChart,
    name: "Capital Access",
    description: "Unlock funding opportunities and business expertise to accelerate your growth in the competitive barbering market.",
    href: "#",
    cta: "Access Capital",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: ShoppingBag,
    name: "Premium Marketplace",
    description: "Source professional-grade tools, supplies, and accessories from trusted vendors at exclusive member pricing.",
    href: "#",
    cta: "Shop Tools",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-500/20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Network,
    name: "State Networks",
    description: "Access your State Barber Association for licensing information, reciprocity agreements, and local regulations.",
    href: "#",
    cta: "Connect Now",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-500/20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Calendar,
    name: "Industry Events",
    description: "Attend exclusive expos, advanced training sessions, and networking events designed for professional development.",
    href: "#",
    cta: "View Events",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-500/20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Heart,
    name: "Community First",
    description: "Join our nonprofit initiative driving positive change through education, mentorship, and community outreach programs.",
    href: "#",
    cta: "Join Community",
    background: <div className="absolute -right-20 -top-20 h-32 w-32 rounded-full bg-gradient-to-br from-red-400/20 to-pink-500/20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5",
  },
];

function ComprehensiveSolutionBento() {
  return (
    <BentoGrid className="lg:grid-rows-4 lg:grid-cols-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { ComprehensiveSolutionBento };