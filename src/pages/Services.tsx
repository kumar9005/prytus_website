import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Cloud, 
  Shield,
  ArrowRight,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs and goals.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Performance Focused"],
      popular: true
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for modern users and businesses.",
      features: ["iOS & Android", "React Native", "User-Centric Design", "App Store Deployment"],
      popular: false
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Boost your online visibility with SEO, social media, and advertising campaigns.",
      features: ["SEO Strategy", "Social Media", "PPC Campaigns", "Analytics & Reporting"],
      popular: false
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      popular: false
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      features: ["AWS/Azure", "DevOps", "Auto Scaling", "24/7 Monitoring"],
      popular: false
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Audits",
      description: "Comprehensive security assessments to protect your digital assets and data.",
      features: ["Vulnerability Testing", "Security Protocols", "Compliance", "Risk Assessment"],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and define the project scope together."
    },
    {
      step: "02", 
      title: "Planning",
      description: "Detailed project planning with timelines, milestones, and deliverables."
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development process with regular updates and feedback loops."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Final testing, deployment, and ongoing support for your success."
    }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
            From web development to digital marketing, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative border-border hover:shadow-lg transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4">
                    <div className="text-primary-foreground">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-secondary border-border">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your project requirements and see how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/request">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;