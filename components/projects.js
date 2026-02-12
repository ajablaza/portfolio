export function Projects() {
  const projects = [
    {
      icon: "shield",
      title: "BreachBox",
      category: "Cybersecurity",
      description:
        "A vulnerable web application designed to showcase different web vulnerabilities. Built as a hands-on learning tool for understanding common security flaws and practicing exploitation techniques safely.",
      tags: ["Web Security", "OWASP", "Vulnerable App", "Education"],
      linkLabel: "Coming Soon",
    },
    {
      icon: "file-text",
      title: "Ethical Hacking Writeups",
      category: "Cybersecurity",
      description:
        "Comprehensive writeups from ethical hacking coursework documenting vulnerability discoveries, exploitation techniques, and remediation strategies across various challenge environments.",
      tags: ["Writeups", "Penetration Testing", "CTF", "Documentation"],
      linkLabel: "GitHub (Coming Soon)",
    },
    {
      icon: "zap",
      title: "Support Task Tracker",
      category: "Customer Support",
      description:
        "Integrated Slack, Google Sheets, and Zapier to build an automated task tracking system for customer support. Streamlined workflows and improved KPI monitoring across the support team.",
      tags: ["Zapier", "Slack", "Google Sheets", "Automation", "KPIs"],
      linkLabel: "Case Study",
    },
    {
      icon: "code",
      title: "Web Development Projects",
      category: "Development",
      description:
        "A collection of web development projects showcasing front-end skills, UI/UX design sensibility, and full-stack development capabilities using modern frameworks and tools.",
      tags: ["React", "JavaScript", "HTML/CSS", "Full Stack"],
      linkLabel: "Portfolio",
    },
  ];

  function projectCard(project, index) {
    return `
      <div class="project-card reveal" style="transition-delay:${index * 0.1}s">
        <div class="project-top">
          
          <div class="project-heading">
            <div class="project-icon">
              <i data-lucide="${project.icon}"></i>
            </div>

            <div>
              <h4 class="project-title">${project.title}</h4>
              <span class="project-category">${project.category}</span>
            </div>
          </div>

          <i data-lucide="external-link" class="project-link-icon"></i>
        </div>

        <p class="project-description">
          ${project.description}
        </p>

        <div class="project-tags">
          ${project.tags
            .map((tag) => `<span class="project-tag">${tag}</span>`)
            .join("")}
        </div>
      </div>
    `;
  }

  return `
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="projects-header reveal">
          <h2 class="section-label">// Projects</h2>
          <h3 class="section-title">Featured Work</h3>
        </div>

        <div class="projects-grid">
          ${projects.map((p, i) => projectCard(p, i)).join("")}
        </div>
      </div>
    </section>
  `;
}