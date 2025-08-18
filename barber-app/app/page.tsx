import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { 
  Award, 
  Building2, 
  Calendar, 
  ChevronRight, 
  GraduationCap, 
  Heart, 
  LineChart, 
  MapPin, 
  Network, 
  Scissors, 
  Shield, 
  ShoppingBag, 
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
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 px-4 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white backdrop-blur">
              <Sparkles className="mr-1 h-3 w-3" />
              America's Leading Barbering Platform
            </Badge>
            <h1 className="mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Transforming the Future
              <br />
              of Professional Barbering
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-neutral-300 md:text-xl">
              Elevate your craft with industry-recognized certifications, expand your business through strategic connections, and join a thriving community of professionals shaping the barbering landscape.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
                Start Your Journey
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                Explore Platform
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold md:text-4xl">10,000+</div>
                <div className="text-sm text-neutral-400">Certified Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold md:text-4xl">50</div>
                <div className="text-sm text-neutral-400">States Represented</div>
              </div>
              <div>
                <div className="text-3xl font-bold md:text-4xl">95%</div>
                <div className="text-sm text-neutral-400">Member Satisfaction</div>
              </div>
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <Award className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>ABA Certification</CardTitle>
                <CardDescription>
                  Distinguish yourself with official American Barber Association certification, the gold standard of professional excellence in our industry.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>BarberSafe Standards</CardTitle>
                <CardDescription>
                  Demonstrate your commitment to safety, quality, and reliability with certification that clients trust and respect.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <MapPin className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Booth Marketplace</CardTitle>
                <CardDescription>
                  Connect with premium booth rental opportunities or list your available spaces to qualified professionals nationwide.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Business Insurance</CardTitle>
                <CardDescription>
                  Secure comprehensive coverage including liability, property, workers' compensation, and professional protection.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <LineChart className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Capital Access</CardTitle>
                <CardDescription>
                  Unlock funding opportunities and business expertise to accelerate your growth in the competitive barbering market.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <ShoppingBag className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Premium Marketplace</CardTitle>
                <CardDescription>
                  Source professional-grade tools, supplies, and accessories from trusted vendors at exclusive member pricing.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <Network className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>State Networks</CardTitle>
                <CardDescription>
                  Access your State Barber Association for licensing information, reciprocity agreements, and local regulations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <Calendar className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Industry Events</CardTitle>
                <CardDescription>
                  Attend exclusive expos, advanced training sessions, and networking events designed for professional development.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <Heart className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Community First</CardTitle>
                <CardDescription>
                  Join our nonprofit initiative driving positive change through education, mentorship, and community outreach programs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Barbers World revolutionized how I manage my business operations and connect with high-value clients. The certification program alone has increased my bookings by 40%."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-200"></div>
                  <div>
                    <div className="font-semibold">James Wilson</div>
                    <div className="text-sm text-muted-foreground">Master Barber, NYC</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "The certification tracking and booth management features are absolute game-changers. I've streamlined operations across three locations and reduced vacancy rates to near zero."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-200"></div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Shop Owner, LA</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Found my dream booth location and doubled my client base through the platform's networking features. The business resources helped me transition from employee to entrepreneur."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-200"></div>
                  <div>
                    <div className="font-semibold">Marcus Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Independent Barber, Miami</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              Support
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find answers to common questions about our platform and services.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the American Barber Association and how does it support professionals?</CardTitle>
                <CardDescription>
                  The ABA is the nation's leading professional organization dedicated to advancing the barbering industry through comprehensive certification programs, business development resources, and community building initiatives. We provide the infrastructure for professional growth at every career stage.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I become ABA Certified?</CardTitle>
                <CardDescription>
                  Begin by creating your professional profile on our platform. Complete the certification requirements including skills assessment, safety protocols, and professional standards training. Our streamlined process typically takes 2-4 weeks, with support available throughout your journey.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is it free to list my barbershop on the platform?</CardTitle>
                <CardDescription>
                  Basic shop listings are complimentary for all members. Premium features including enhanced visibility, advanced analytics, and priority placement in search results are available through our professional membership tiers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is BarberSafe Certification?</CardTitle>
                <CardDescription>
                  BarberSafe is our comprehensive safety and quality assurance program that demonstrates your commitment to the highest industry standards. This certification covers sanitation protocols, client safety, and operational excellence that modern clients expect.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

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
            Join thousands of professionals already growing with America's premier barbering platform.
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