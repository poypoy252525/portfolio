import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import type { ContactInfo } from "@/types";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from
              you. Let's discuss how we can work together to bring your ideas to
              life.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone (if available) */}
                  {contactInfo.phone && (
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Response Time
                      </p>
                      <p className="text-sm font-medium">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect with me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {contactInfo.social.map((social) => (
                      // <a
                      //   key={social.platform}
                      //   href={social.url}
                      //   target="_blank"
                      //   rel="noopener noreferrer"
                      //   className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors hover:bg-accent hover:text-accent-foreground"
                      // >
                      //   <span className="text-sm font-medium">{social.platform}</span>
                      // </a>
                      <Button
                        key={social.platform}
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="h-4 w-4" />
                          {social.platform}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <ContactForm />
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Whether you have a specific project in mind or just want to
                  explore possibilities, I'm here to help turn your ideas into
                  reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-muted-foreground">
                  <span>💡 Free consultation</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🚀 Quick response</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🎯 Tailored solutions</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
