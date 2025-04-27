
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-sre-dark to-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-white/5 border-white/10 text-white min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full bg-sre-blue hover:bg-sre-blue/80">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
