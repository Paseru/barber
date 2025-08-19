'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is the American Barber Association and how does it support professionals?',
            answer: 'The ABA is the nation\'s leading professional organization dedicated to advancing the barbering industry through comprehensive certification programs, business development resources, and community building initiatives. We provide the infrastructure for professional growth at every career stage.',
        },
        {
            id: 'item-2',
            question: 'How do I become ABA Certified?',
            answer: 'Begin by creating your professional profile on our platform. Complete the certification requirements including skills assessment, safety protocols, and professional standards training. Our streamlined process typically takes 2-4 weeks, with support available throughout your journey.',
        },
        {
            id: 'item-3',
            question: 'Is it free to list my barbershop on the platform?',
            answer: 'Basic shop listings are complimentary for all members. Premium features including enhanced visibility, advanced analytics, and priority placement in search results are available through our professional membership tiers.',
        },
        {
            id: 'item-4',
            question: 'What is BarberSafe Certification?',
            answer: 'BarberSafe is our comprehensive safety and quality assurance program that demonstrates your commitment to the highest industry standards. This certification covers sanitation protocols, client safety, and operational excellence that modern clients expect.',
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Find answers to common questions about our platform and services.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}