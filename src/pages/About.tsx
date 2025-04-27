
const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-sre-dark to-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Vlad Babayan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-sre-blue mb-4">Experience</h2>
            <p className="text-gray-300 mb-4">
              Site Reliability Engineer with 3 years of experience in designing,
              implementing, and maintaining robust and scalable distributed systems.
            </p>
            <p className="text-gray-300">
              Focused on improving system reliability, performance, and operational efficiency.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-sre-blue mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Technologies</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Kubernetes</li>
                  <li>Docker</li>
                  <li>Terraform</li>
                  <li>AWS/GCP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Tools</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Prometheus</li>
                  <li>Grafana</li>
                  <li>ELK Stack</li>
                  <li>Jenkins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
