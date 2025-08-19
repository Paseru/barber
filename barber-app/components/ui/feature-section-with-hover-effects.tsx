import { cn } from "@/lib/utils";
import {
  IconCut,
  IconSparkles,
  IconClock,
  IconUsers,
  IconStars,
  IconPigMoney,
  IconCalendarEvent,
  IconHeart,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Coupes professionnelles",
      description:
        "Des coupes tendances réalisées par nos coiffeurs experts avec 15+ années d'expérience.",
      icon: <IconCut />,
    },
    {
      title: "Soins premium",
      description:
        "Traitements capillaires haut de gamme avec des produits de qualité professionnelle.",
      icon: <IconSparkles />,
    },
    {
      title: "Service express",
      description:
        "Pas d'attente inutile. Réservation en ligne et service efficace en 45 minutes maximum.",
      icon: <IconClock />,
    },
    {
      title: "Équipe experte",
      description: "Nos barbiers maîtrisent toutes les techniques modernes et classiques.",
      icon: <IconUsers />,
    },
    {
      title: "Satisfaction garantie",
      description: "99% de clients satisfaits. Si vous n'êtes pas content, on recommence.",
      icon: <IconStars />,
    },
    {
      title: "Prix transparents",
      description:
        "Tarifs fixes affichés, sans surprise. Qualité premium à prix juste.",
      icon: <IconPigMoney />,
    },
    {
      title: "Réservation facile",
      description:
        "Système de réservation en ligne 24h/24 avec rappels automatiques.",
      icon: <IconCalendarEvent />,
    },
    {
      title: "Ambiance unique",
      description: "Un cadre moderne et détendu pour un moment de détente total.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-8 max-w-6xl mx-auto">
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
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
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