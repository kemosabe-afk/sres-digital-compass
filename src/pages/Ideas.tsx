
const Ideas = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-sre-dark to-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">New Ideas</h1>
        <div className="grid gap-8">
          {[
            {
              title: "Automated Chaos Engineering",
              date: "2025-04",
              description: "Implementing automated chaos engineering practices to improve system resilience.",
            },
            {
              title: "ML-Powered Anomaly Detection",
              date: "2025-03",
              description: "Leveraging machine learning for more accurate system anomaly detection.",
            },
            {
              title: "Zero-Trust Infrastructure",
              date: "2025-02",
              description: "Designing and implementing zero-trust architecture for cloud-native applications.",
            },
          ].map((post) => (
            <div key={post.title} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-sre-blue mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ideas;
