export function Hero() {
  return `
    <section class="hero">
      <div class="orb orb-left"></div>
      <div class="orb orb-right"></div>
      <div class="container hero-content">
        <span class="hero-label">
          <i data-lucide="shield" class="hero-icon"></i>
          PORTFOLIO
          <i data-lucide="headphones" class="hero-icon"></i>
        </span>
        <h1>
          Aprylle <span class="glow">Ablaza</span>
        </h1>

        <h2 id="typing-text" class="typing"></h2>

        <p>
          Bridging cybersecurity and customer success —
          securing systems while delivering exceptional support.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="btn primary">View Projects</a>
          <a href="#contact" class="btn outline">Get in Touch</a>
        </div>
      </div>
    </section>
  `;
}