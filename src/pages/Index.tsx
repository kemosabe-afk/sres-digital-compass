
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-sre-dark to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site Reliability Engineer
          </h1>
          <p className="text-xl text-sre-gray mb-12">
            Building and maintaining scalable, reliable systems
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-sre-blue mb-2">99.99%</h3>
              <p className="text-gray-400">System Uptime</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-sre-blue mb-2">500ms</h3>
              <p className="text-gray-400">Response Time</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-sre-blue mb-2">24/7</h3>
              <p className="text-gray-400">Monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
