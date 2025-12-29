const SkillsSection = () => {
  const skills = [
    { name: "Splunk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" },
    { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    { name: "Kibana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg" },
    { name: "Logstash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/logstash/logstash-original.svg" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4 block">// TECHNICAL SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools & <span className="text-primary text-glow">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I'm learning and working with for cybersecurity and security operations
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110"
                />
              </div>
              <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground text-center transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 font-mono">
          Currently expanding skills in SIEM, Threat Detection, and GRC frameworks.
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;