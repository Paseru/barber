"use client";
import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => {
                const initials = name.split(' ').map(n => n[0]).join('');
                return (
                  <Card className="max-w-xs w-full shadow-lg shadow-primary/10" key={i}>
                    <CardContent className="p-8">
                      <p className="text-sm leading-relaxed">{text}</p>
                      <div className="flex items-center gap-3 mt-4">
                        <Avatar className="size-9">
                          <AvatarImage src={image} alt={name} />
                          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <div className="font-medium text-sm tracking-tight leading-4">{name}</div>
                          <div className="text-xs leading-4 text-muted-foreground tracking-tight">{role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};