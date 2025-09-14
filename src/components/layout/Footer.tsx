import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:contact@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className={`border-t bg-background ${className || ""}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <Separator className="w-full max-w-xs" />

          {/* Copyright */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>by Delfin</span>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-muted-foreground text-center">
            Built with React, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
};
