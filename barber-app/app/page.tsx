import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Testimonials from "@/components/testimonials";
import { BlurFade } from "@/components/ui/blur-fade";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import FAQs from "@/components/ui/faqs-component";
import { 
  Award, 
  Building2, 
  ChevronRight, 
  GraduationCap, 
  Heart, 
  Network, 
  Scissors, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Zap 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <nav className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold tracking-tight">Barbers World</span>
            </div>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Certification</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <Award className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              ABA Certification
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Industry-recognized credentials that elevate your professional standing
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">BarberSafe</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Safety and quality assurance certification
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Track Progress</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Monitor your certification journey
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Business</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Booth Rental</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find or list premium booth spaces
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Insurance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comprehensive coverage solutions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Capital Access</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Business funding and expertise
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Marketplace</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Premium tools and supplies
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Community</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Network</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect with professionals nationwide
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Events</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Expos, trainings, and workshops
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Media Center</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Industry news and insights
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Community First</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Education and mentorship initiatives
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-sm">
                Sign In
              </Button>
              <Button size="sm" className="text-sm">
                Join Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black text-white">
        {/* Background Image with Smoky Black Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(./pexels-zvolskiy-1570807.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          {/* Dark smoky overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>
          {/* Additional smoky effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        </div>
        
        <div className="relative z-10 w-full py-20 md:py-28 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col items-center text-center">
            <BlurFade delay={0.1} inView>
              <Badge variant="secondary" className="mb-3 bg-white/10 text-white backdrop-blur text-xs">
                <Sparkles className="mr-1 h-2.5 w-2.5" />
                America&apos;s Leading Barbering Platform
              </Badge>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h1 className="mb-5 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                Transforming the Future
                <br />
                of Professional Barbering
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="mb-7 max-w-xl text-base text-neutral-200 md:text-lg">
                Elevate your craft with industry-recognized certifications, expand your business through strategic connections, and join a thriving community of professionals shaping the barbering landscape.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100 text-sm px-6 py-2.5">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-3.5 w-3.5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 text-sm px-6 py-2.5">
                  Explore Platform
                </Button>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold md:text-3xl">10,000+</div>
                  <div className="text-xs text-neutral-300">Certified Professionals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold md:text-3xl">50</div>
                  <div className="text-xs text-neutral-300">States Represented</div>
                </div>
                <div>
                  <div className="text-2xl font-bold md:text-3xl">95%</div>
                  <div className="text-xs text-neutral-300">Member Satisfaction</div>
                </div>
              </div>
            </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              <Zap className="mr-1 h-3 w-3" />
              Simple Process
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Your Path to Professional Excellence
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Begin your transformation with our streamlined onboarding process designed for barbering professionals at every stage of their career.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="relative overflow-hidden border-2">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-20 w-20 rounded-full bg-primary/10"></div>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle className="text-xl">Create Your Professional Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Register as an individual barber or barbershop owner. Showcase your expertise, specializations, and services through our comprehensive dashboard.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-2">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-20 w-20 rounded-full bg-primary/10"></div>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle className="text-xl">Achieve Certification & Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn prestigious ABA and BarberSafe certifications. Discover premium booth opportunities and establish valuable connections across the nation.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-2">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-20 w-20 rounded-full bg-primary/10"></div>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle className="text-xl">Scale Your Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access exclusive business tools, participate in industry events, and leverage our nationwide network to accelerate your professional growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              <Building2 className="mr-1 h-3 w-3" />
              Comprehensive Solutions
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need to Thrive
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Access a complete ecosystem of tools, resources, and connections designed to elevate every aspect of your barbering business.
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Section */}
      <section className="bg-card px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              <GraduationCap className="mr-1 h-3 w-3" />
              Platform Benefits
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Why Industry Leaders Choose Barbers World
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The complete ecosystem built for modern barbering professionals who demand excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Nationally Recognized</h3>
              <p className="text-sm text-muted-foreground">
                Industry-leading certifications trusted by clients and employers nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Business Growth</h3>
              <p className="text-sm text-muted-foreground">
                Complete toolkit for scaling your barbering business to new heights
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Active Community</h3>
              <p className="text-sm text-muted-foreground">
                Connect with top professionals and industry leaders nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Premium Resources</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive access to advanced training materials and tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQs />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 px-4 py-16 text-white md:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
            <TrendingUp className="mr-1 h-3 w-3" />
            10,000+ Professionals Joined in 2024
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Barbering Career?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Join thousands of professionals already growing with America&apos;s premier barbering platform.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Join Barbers World Today
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] border-white/20 bg-white/10 text-white hover:bg-white/20">
              View Membership Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-neutral-900 px-4 py-12 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Scissors className="h-5 w-5" />
                <span className="text-lg font-bold">Barbers World</span>
              </div>
              <p className="text-sm text-neutral-400">
                A platform powered by the American Barber Association, International Barber Association, Barbers United, and Develop America Ventures, Inc.
              </p>
              <p className="mt-4 text-sm text-neutral-400">
                Dedicated to advancing the barbering industry through certification, education, business support, and community connection.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Join Now</a></li>
                <li><a href="#" className="hover:text-white">BarberSafe</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">Certifications</a></li>
                <li><a href="#" className="hover:text-white">Network</a></li>
                <li><a href="#" className="hover:text-white">Shop</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Connect With Us</h3>
              <p className="mb-4 text-sm text-neutral-400">
                Stay updated with the latest industry news and platform updates.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-white">
                  <Network className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-white">
                  <Users className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-neutral-800" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-400 md:flex-row">
            <p>&copy; 2024 American Barber Association. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}