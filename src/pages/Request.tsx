import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  Clock, 
  CheckCircle, 
  Star,
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  Cloud,
  Shield
} from "lucide-react";

const Request = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[],
    priority: ""
  });

  const services = [
    { id: "web", label: "Web Development", icon: <Code className="h-4 w-4" /> },
    { id: "mobile", label: "Mobile Apps", icon: <Smartphone className="h-4 w-4" /> },
    { id: "marketing", label: "Digital Marketing", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "design", label: "UI/UX Design", icon: <Palette className="h-4 w-4" /> },
    { id: "cloud", label: "Cloud Solutions", icon: <Cloud className="h-4 w-4" /> },
    { id: "security", label: "Security Audits", icon: <Shield className="h-4 w-4" /> }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request submitted successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      services: [],
      priority: ""
    });
  };

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick Response",
      description: "We respond to all requests within 24 hours"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Free Consultation",
      description: "Initial consultation and project assessment at no cost"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Custom Solutions",
      description: "Tailored solutions that fit your specific needs"
    }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Request a Quote
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Need help with your next project? Fill out the form below and we'll get back to you 
            with a detailed proposal tailored to your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg flex-shrink-0">
                        <div className="text-primary-foreground">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Contact Info */}
              <Card className="bg-gradient-secondary border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Prefer to Talk Directly?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <p className="text-foreground">contact@example.com</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Phone:</span>
                      <p className="text-foreground">+91-9876543210</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Address:</span>
                      <p className="text-foreground">123, Digital Street<br />Tech City, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Company Inc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91-9876543210"
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Project Type</Label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New Project</SelectItem>
                          <SelectItem value="redesign">Redesign/Improvement</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Priority Level</Label>
                      <Select value={formData.priority} onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div>
                    <Label className="text-base font-medium mb-4 block">
                      Services Needed (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
                          />
                          <Label htmlFor={service.id} className="flex items-center space-x-2 cursor-pointer">
                            {service.icon}
                            <span>{service.label}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* Selected Services Display */}
                  {formData.services.length > 0 && (
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Selected Services:</Label>
                      <div className="flex flex-wrap gap-2">
                        {formData.services.map((serviceId) => {
                          const service = services.find(s => s.id === serviceId);
                          return (
                            <Badge key={serviceId} variant="secondary">
                              {service?.label}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;