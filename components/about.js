export function About() {
  const highlights = [
    {
      icon: "headphones",
      label: "3+ Years",
      desc: "SaaS Customer Support & Success",
    },
    {
      icon: "shield",
      label: "Cybersecurity",
      desc: "Ethical Hacking & Vulnerability Assessment",
    },
    {
      icon: "award",
      label: "KPI Driven",
      desc: "Process Automation & Workflow Optimization",
    },
    {
      icon: "book-open",
      label: "Documentation",
      desc: "Knowledge Bases & Technical Writing",
    },
  ];

  return `
    <section id="about" class="about-section">
      <div class="container">

        <div class="about-header reveal">
          <h2 class="section-label">// About Me</h2>
          <h3 class="section-title">Where Security Meets Support</h3>
          <p class="section-description">
            I'm an aspiring cybersecurity professional with a strong foundation
            in SaaS customer support and success. With over 3 years of experience
            in the customer-facing tech space, I bring a unique perspective —
            understanding both how to protect systems and how to empower users.
            I'm passionate about ethical hacking, building secure applications,
            and creating seamless support workflows that drive real results.
          </p>
        </div>

        <div class="about-grid">
          ${highlights
            .map(
              (item, i) => `
                <div class="about-card reveal" style="transition-delay:${i * 0.1}s">
                  <i data-lucide="${item.icon}" class="about-icon"></i>
                  <h4>${item.label}</h4>
                  <p>${item.desc}</p>
                </div>
              `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}