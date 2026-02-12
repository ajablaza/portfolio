export function Skills() {
  const cyberSkills = [
    "Ethical Hacking",
    "Vulnerability Assessment",
    "Web Application Security",
    "Penetration Testing",
    "OWASP Top 10",
    "Network Security",
    "Security Research",
    "CTF Challenges",
  ];

  const supportSkills = [
    "Customer Success Management",
    "SaaS Support Operations",
    "Email Handling & Triage",
    "Knowledge Base Documentation",
    "KPI Tracking & Reporting",
    "Workflow Automation (Zapier)",
    "Slack & Google Workspace",
    "Stakeholder Communication",
  ];

  const techSkills = [
    "HTML / CSS / JavaScript",
    "React",
    "Python",
    "Git & GitHub",
    "REST APIs",
    "Technical Writing",
    "Troubleshooting",
    "Process Optimization",
  ];

  function skillGroup(title, prefix, skills, delay) {
    return `
      <div class="skill-group reveal" style="transition-delay:${delay}s">
        <h4 class="skill-title">${prefix} ${title}</h4>
        <div class="skill-tags">
          ${skills
            .map(
              (skill) => `
            <span class="skill-tag">${skill}</span>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  return `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="skills-header reveal">
          <h2 class="section-label">// Skills</h2>
          <h3 class="section-title">Technical Arsenal</h3>
        </div>

        <div class="skills-grid">
          ${skillGroup("Cybersecurity", "🔒", cyberSkills, 0)}
          ${skillGroup("Customer Support", "🎧", supportSkills, 0.1)}
          ${skillGroup("Technical", "💻", techSkills, 0.2)}
        </div>
      </div>
    </section>
  `;
}
