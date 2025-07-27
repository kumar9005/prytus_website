import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "contact@example.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91-9876543210",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      value: "123, Digital Street, Tech City, India",
      description: "Come say hello at our office"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "General Inquiries",
      description: "Questions about our services or general information",
      action: "Send Message"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership",
      description: "Interested in partnering with us or collaboration opportunities",
      action: "Get in Touch"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Technical Support",
      description: "Need help with an existing project or technical assistance",
      action: "Get Support"
    }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any questions, 
            project inquiries, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you have a question about our services, need a quote, 
                  or want to discuss a project, we're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg flex-shrink-0">
                          <div className="text-primary-foreground">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm text-foreground font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-secondary border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us more about your project or inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Options */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Can We Help?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us based on your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4 mx-auto">
                    <div className="text-primary-foreground">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {option.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <Card className="bg-gradient-secondary border-border">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Have a question that's not covered here? Don't hesitate to reach out to us directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    What's your typical project timeline?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Project timelines vary based on complexity, but most projects take 4-12 weeks from start to finish.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you offer ongoing support?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we provide comprehensive support and maintenance packages for all our projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can you work with existing teams?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We often collaborate with in-house teams and integrate seamlessly into existing workflows.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    What technologies do you specialize in?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We work with modern web technologies including React, Node.js, cloud platforms, and mobile frameworks.
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

export default Contact;