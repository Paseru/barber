"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The ABA certification transformed my career. My bookings increased by 40% and clients trust my expertise more than ever.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Michael Thompson",
    role: "Master Barber, NYC",
  },
  {
    text: "Finding the perfect booth through Barbers World was seamless. The platform connected me with opportunities I never knew existed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    name: "James Wilson",
    role: "Independent Barber",
  },
  {
    text: "The business insurance options saved me thousands. Having proper coverage gives me peace of mind to focus on my craft.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    name: "Robert Martinez",
    role: "Shop Owner, LA",
  },
  {
    text: "Best barbering platform hands down! The networking features helped me build connections across three states.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
    name: "David Anderson",
    role: "Traveling Barber",
  },
  {
    text: "The certification tracking keeps my team compliant and professional. It's revolutionized how we manage our shop.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop",
    name: "Marcus Johnson",
    role: "Multi-Shop Owner",
  },
  {
    text: "Quick capital access helped me expand my business. The funding process was straightforward and transparent.",
    image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=150&h=150&fit=crop",
    name: "Christopher Lee",
    role: "Entrepreneur",
  },
  {
    text: "Premium marketplace deals save me 30% on supplies. The quality products and member pricing are unbeatable.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    name: "Anthony Davis",
    role: "Senior Barber",
  },
  {
    text: "Always up-to-date with industry trends through the platform. The educational resources are top-notch.",
    image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=150&h=150&fit=crop",
    name: "William Brown",
    role: "Educator & Barber",
  },
  {
    text: "Found my dream location and doubled my clientele. The booth rental marketplace is a game-changer.",
    image: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?w=150&h=150&fit=crop",
    name: "Joseph Taylor",
    role: "Rising Professional",
  },
  {
    text: "BarberSafe certification elevated my reputation instantly. Clients appreciate the commitment to safety and quality.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop",
    name: "Daniel Garcia",
    role: "Lead Barber",
  },
  {
    text: "The community support is incredible. Whenever I need advice or resources, the network delivers.",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=150&h=150&fit=crop",
    name: "Thomas Rodriguez",
    role: "Creative Director",
  },
  {
    text: "Professional development opportunities exceeded expectations. Every workshop has directly improved my business.",
    image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=150&h=150&fit=crop",
    name: "Kevin White",
    role: "Business Owner",
  },
  {
    text: "State association access simplified my licensing. The platform handles all the complex regulatory navigation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    name: "Frank Harris",
    role: "Licensed Professional",
  },
  {
    text: "Event connections led to three major partnerships. The industry expos are worth their weight in gold.",
    image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=150&h=150&fit=crop",
    name: "Steven Clark",
    role: "Brand Ambassador",
  },
  {
    text: "Traditional skills meet modern business tools perfectly. This platform understands what barbers actually need.",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150&h=150&fit=crop",
    name: "Paul Miller",
    role: "Master Craftsman",
  },
];

const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 10);
const thirdColumn = testimonials.slice(10, 15);

const Testimonials = () => {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            <Users className="mr-1 h-3 w-3" />
            Trusted Nationwide
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Success Stories from Our Community
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join thousands of professionals who have transformed their careers through our platform.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;