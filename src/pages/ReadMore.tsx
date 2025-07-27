import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Users,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const ReadMore = () => {
  const articles = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the next decade of web development.",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      author: "John Doe",
      category: "Technology"
    },
    {
      title: "User Experience in 2024",
      excerpt: "How user expectations are evolving and what it means for modern design practices.",
      readTime: "3 min read", 
      date: "Dec 10, 2024",
      author: "Jane Smith",
      category: "Design"
    },
    {
      title: "Scaling Digital Products",
      excerpt: "Best practices for building applications that can handle millions of users.",
      readTime: "7 min read",
      date: "Dec 5, 2024",
      author: "Mike Johnson",
      category: "Development"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description: "Winner of multiple web development awards for excellence in digital innovation."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Global Reach",
      description: "Serving clients across 25+ countries with localized solutions and support."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Open Source",
      description: "Contributing to the developer community with 50+ open source projects."
    }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Story
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Building the Future of Digital Experiences
          </h1>
          <p className="text-lg text-muted-foreground">
            At our core, we believe in user-centric design and scalable technology solutions. 
            Over the years, we've helped numerous clients launch digital products that make a difference.
          </p>
        </div>

        {/* Main Article */}
        <article className="mb-16">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>December 20, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Portal Team</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At our core, we believe in user-centric design and scalable technology solutions. 
                  Over the years, we've helped numerous clients launch digital products that make a difference. 
                  Our journey began with a simple mission: to bridge the gap between complex technology 
                  and meaningful user experiences.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Our Philosophy
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We don't just build applications; we craft digital experiences that resonate with users 
                  and drive business growth. Every project we undertake is guided by three fundamental principles: 
                  innovation, quality, and sustainability. These pillars ensure that our solutions not only 
                  meet current needs but also adapt to future challenges.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Innovation drives us to explore new technologies and methodologies. We're early adopters 
                  of emerging frameworks, tools, and design patterns that can enhance user experience and 
                  development efficiency. Quality ensures that every line of code, every design element, 
                  and every user interaction meets the highest standards. Sustainability means building 
                  solutions that grow with our clients' businesses.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Innovation in Practice
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our approach to innovation is both strategic and practical. We invest heavily in research 
                  and development, dedicating time to explore emerging technologies like AI/ML integration, 
                  progressive web applications, and modern deployment strategies. This investment allows us 
                  to offer cutting-edge solutions that give our clients a competitive advantage.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  We've pioneered several industry-first solutions, including automated testing frameworks 
                  that reduce deployment time by 60%, user interface patterns that increase engagement by 40%, 
                  and scalable architectures that handle millions of concurrent users without performance degradation.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Impact & Results
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The results speak for themselves. Over the past decade, we've delivered more than 500 projects 
                  across diverse industries including fintech, healthcare, e-commerce, and education. Our solutions 
                  have collectively generated over $100M in additional revenue for our clients and served 
                  millions of end users worldwide.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  But beyond the numbers, what truly matters is the impact on people's lives. We've built 
                  platforms that connect communities, applications that simplify complex processes, and 
                  experiences that bring joy to everyday interactions. This human-centered approach is what 
                  sets us apart in an increasingly digital world.
                </p>

                <Separator className="my-8" />

                <div className="bg-gradient-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Ready to Transform Your Digital Presence?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss how we can help bring your vision to life with innovative, 
                    user-centric solutions that drive real business results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link to="/request">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                    <div className="text-primary-foreground">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {article.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReadMore;