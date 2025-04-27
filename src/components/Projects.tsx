
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Rocket } from "lucide-react";

const projects = [
  {
    title: "Activeloop",
    description: "Enhanced data pipeline infrastructure and improved system reliability at activeloop.ai",
    icon: <Code className="w-6 h-6 text-sre-blue" />,
    link: "https://www.activeloop.ai",
    achievements: [
      "Reduced system downtime by 45%",
      "Implemented automated deployment pipelines",
      "Managed Kubernetes clusters across multiple regions"
    ]
  },
  {
    title: "MicroBiz",
    description: "Led SRE initiatives at microbiz.com to enhance platform stability",
    icon: <Rocket className="w-6 h-6 text-sre-blue" />,
    link: "https://www.microbiz.com",
    achievements: [
      "Achieved 99.99% uptime SLA",
      "Optimized CI/CD workflows",
      "Implemented comprehensive monitoring solutions"
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="bg-white/5 border-none text-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {project.icon}
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    <Link 
                      to={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sre-blue hover:text-blue-400 transition-colors"
                    >
                      Visit Project →
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Projects;
