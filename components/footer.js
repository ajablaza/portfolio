export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="footer-container">
        <p class="footer-left">
          © ${currentYear} Aprylle Ablaza
        </p>
        <p class="footer-right">
          Built with 🔐 and ☕
        </p>
      </div>
    </footer>
  `;
}