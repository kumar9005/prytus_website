import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission",
      description: "To deliver innovative solutions that transform businesses and create lasting value for our clients."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Vision",
      description: "To be the leading technology partner, driving digital transformation across industries."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Values",
      description: "Excellence, integrity, innovation, and customer-centricity guide everything we do."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards."
    }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            About Us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a forward-thinking organization committed to delivering the best user experience 
              through innovative solutions and reliable service. Our team of professionals is passionate, 
              driven, and always ready to help.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between technology and business needs, 
                  we have been at the forefront of digital innovation for over a decade.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a comprehensive 
                  technology solutions provider, serving clients across various industries worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and an unwavering 
                  commitment to excellence. We believe in building long-term partnerships with our 
                  clients, understanding their unique challenges, and delivering solutions that exceed expectations.
                </p>
              </div>
              <Button asChild className="mt-6">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-gradient-secondary border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">10+</div>
                      <div className="text-muted-foreground">Years of Excellence</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">150+</div>
                        <div className="text-sm text-muted-foreground">Clients</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide our work and define who we are as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                    <div className="text-primary-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section>
          <Card className="bg-gradient-secondary border-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We believe in a collaborative, transparent, and results-driven approach to every project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Understand</h3>
                  <p className="text-muted-foreground text-sm">
                    We start by deeply understanding your business needs and objectives.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Design</h3>
                  <p className="text-muted-foreground text-sm">
                    We craft tailored solutions that align with your goals and user needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Deliver</h3>
                  <p className="text-muted-foreground text-sm">
                    We execute with precision and provide ongoing support for success.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;