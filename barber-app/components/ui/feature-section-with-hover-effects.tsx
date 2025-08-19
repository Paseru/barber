import { cn } from "@/lib/utils";
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

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "ABA Certification",
      description:
        "Distinguish yourself with official American Barber Association certification, the gold standard of professional excellence in our industry.",
      icon: <Award />,
    },
    {
      title: "BarberSafe Standards",
      description:
        "Demonstrate your commitment to safety, quality, and reliability with certification that clients trust and respect.",
      icon: <Shield />,
    },
    {
      title: "Booth Marketplace",
      description:
        "Connect with premium booth rental opportunities or list your available spaces to qualified professionals nationwide.",
      icon: <MapPin />,
    },
    {
      title: "Business Insurance",
      description: "Secure comprehensive coverage including liability, property, workers' compensation, and professional protection.",
      icon: <TrendingUp />,
    },
    {
      title: "Capital Access",
      description: "Unlock funding opportunities and business expertise to accelerate your growth in the competitive barbering market.",
      icon: <LineChart />,
    },
    {
      title: "Premium Marketplace",
      description:
        "Source professional-grade tools, supplies, and accessories from trusted vendors at exclusive member pricing.",
      icon: <ShoppingBag />,
    },
    {
      title: "State Networks",
      description:
        "Access your State Barber Association for licensing information, reciprocity agreements, and local regulations.",
      icon: <Network />,
    },
    {
      title: "Industry Events",
      description: "Attend exclusive expos, advanced training sessions, and networking events designed for professional development.",
      icon: <Calendar />,
    },
    {
      title: "Community First",
      description: "Join our nonprofit initiative driving positive change through education, mentorship, and community outreach programs.",
      icon: <Heart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-8 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-8 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3 || index === 6) && "lg:border-l dark:border-neutral-800",
        index < 6 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 6 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 6 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-3 relative z-10 px-8 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-base font-bold mb-2 relative z-10 px-8">
        <div className="absolute left-0 inset-y-0 h-5 group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-8">
        {description}
      </p>
    </div>
  );
};