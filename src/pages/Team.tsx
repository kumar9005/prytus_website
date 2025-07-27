import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      experience: "10+ years of experience",
      description: "Full-stack developer specializing in React, Node.js, and cloud architecture. Passionate about clean code and scalable solutions.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      image: "JD",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "john@example.com"
      }
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      experience: "8+ years of experience",
      description: "Passionate about agile workflows and team coordination. Expert in managing complex projects and ensuring timely delivery.",
      skills: ["Agile", "Scrum", "Leadership", "Strategy"],
      image: "JS",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#", 
        email: "jane@example.com"
      }
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      experience: "6+ years of experience",
      description: "Creative designer focused on user-centered design principles. Specializes in creating intuitive and beautiful user experiences.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      image: "MJ",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "mike@example.com"
      }
    },
    {
      name: "Sarah Wilson",
      role: "DevOps Engineer",
      experience: "7+ years of experience",
      description: "Infrastructure specialist with expertise in cloud platforms, CI/CD pipelines, and automation. Ensures reliable and scalable deployments.",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      image: "SW",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "David Brown",
      role: "Mobile Developer",
      experience: "5+ years of experience",
      description: "Cross-platform mobile app developer with strong experience in React Native and native iOS/Android development.",
      skills: ["React Native", "iOS", "Android", "Flutter"],
      image: "DB",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "david@example.com"
      }
    },
    {
      name: "Lisa Chen",
      role: "Marketing Specialist",
      experience: "4+ years of experience",
      description: "Digital marketing expert specializing in SEO, content strategy, and social media marketing. Drives growth through data-driven campaigns.",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
      image: "LC",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "lisa@example.com"
      }
    }
  ];

  const stats = [
    { label: "Team Members", value: "15+" },
    { label: "Years Combined Experience", value: "80+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Client Satisfaction", value: "99%" }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of professionals is passionate, driven, and always ready to help. 
            We bring together diverse expertise to deliver exceptional results.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-20">
          <Card className="bg-gradient-secondary border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Members Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-foreground font-bold text-lg">
                        {member.image}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3 pt-4 border-t border-border">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Culture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We foster an environment of collaboration, continuous learning, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary-foreground font-bold">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We encourage creative thinking and embrace new technologies to solve complex problems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary-foreground font-bold">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Teamwork and open communication are at the heart of everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary-foreground font-bold">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Growth</h3>
                <p className="text-muted-foreground text-sm">
                  We invest in our team's professional development and continuous learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join Team CTA */}
        <section>
          <Card className="bg-gradient-hero border-border">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for excellence and innovation.
              </p>
              <Button variant="secondary" size="lg" className="shadow-glow">
                View Open Positions
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Team;