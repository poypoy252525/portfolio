import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email using EmailJS
      // You'll need to set up your EmailJS service, template, and public key
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "", // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "", // Replace with your EmailJS template ID
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "" // Replace with your EmailJS public key
      );

      console.log("Email sent successfully:", response);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" />
          Send me a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              {...register("subject")}
              className={errors.subject ? "border-destructive" : ""}
            />
            {errors.subject && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hello!"
              rows={5}
              {...register("message")}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Send className="h-4 w-4" />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-600 text-sm"
            >
              <CheckCircle className="h-4 w-4" />
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-destructive text-sm"
            >
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Please try again or email me directly.
            </motion.div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
