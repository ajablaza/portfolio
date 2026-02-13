export function Contact() {
  return `
    <section id="contact" class="contact-section">
      <div class="contact-container">

        <div class="contact-content reveal">
          <h2 class="section-label">// Contact</h2>
          <h3 class="section-title">Let's Connect</h3>

          <p class="contact-description">
            Whether you're looking for a cybersecurity enthusiast, 
            a customer support professional, or someone who can do both — 
            I'd love to hear from you.
          </p>

          <div class="contact-buttons">
            <a href="mailto:apryllea" class="btn primary border-glow">
              <i data-lucide="mail"></i>
              Send Email
            </a>

            <a href="https://github.com/ajablaza" target="_blank" class="btn outline">
              <i data-lucide="github"></i>
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/adablaza/" target="_blank" class="btn outline">
              <i data-lucide="linkedin"></i>
              LinkedIn
            </a>
          </div>

          <div class="terminal-line">
            <i data-lucide="terminal" class="terminal-icon"></i>
            <span>aprylle@portfolio:~$</span>
            <span class="cursor">▊</span>
          </div>
        </div>

      </div>
    </section>
  `;
}