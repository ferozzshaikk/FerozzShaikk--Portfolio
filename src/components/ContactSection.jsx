import emailjs from "@emailjs/browser";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  MessageCircle,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useRef, useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EMAILJS ERROR", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I’m always open to
          discussing new opportunities — feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold mb-10 mt-8">
              Contact Information
            </h3>

            <div className="space-y-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email:</h4>
                  <a
                    href="mailto:ferozshaik9047@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ferozshaik9047@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn:</h4>
                  <a
                    href="https://www.linkedin.com/in/shaik-ferozz/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    www.linkedin.com/in/shaik-ferozz
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location:</h4>
                  <a
                    href="https://www.google.com/maps/place/Hyderabad,+Telangana"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hyderabad, Telangana, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://t.me/celesteknight" target="_blank">
                  <MessageCircle />
                </a>
                <a href="https://x.com/Ferozzshaikk" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/ferozzshaikk/"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61568458872953"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="text-start">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Good Name?"
                  onChange={handleChange}
                />
              </div>

              <div className="text-start">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Email Address?"
                  onChange={handleChange}
                />
              </div>

              <div className="text-start">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How May I Help You?"
                  rows="3"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
