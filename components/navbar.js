export function Navbar() {
  return `
    <nav class="navbar">
      <div class="container nav-inner">
    <a href="#" class="navbar-logo">
        <i data-lucide="shield" id="navbar-icon"></i>
        <div class="logo">ADABLAZA</div>
    </a>
    <div class="nav-links" id="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
     <div class="menu-toggle" id="menu-toggle">
        ☰
    </div>
    </div>
    </nav>
  `;
}