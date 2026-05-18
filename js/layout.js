function getNav(activePage) {
  return `<a href="index.html" class="nav-logo">⚡ LinkHub</a>
  <nav class="nav-menu" id="nav-menu">
    <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Home</a>
    <a href="about.html" class="nav-link ${activePage==='about'?'active':''}">About</a>
    <a href="contact.html" class="nav-link ${activePage==='contact'?'active':''}">Contact</a>
  </nav>
  <div class="nav-right">
    <a href="auth.html" class="btn btn-outline btn-sm hide-mobile">Sign In</a>
    <a href="auth.html?tab=signup" class="btn btn-primary btn-sm">Get Started</a>
    <button class="nav-toggle" onclick="document.getElementById('nav-menu').classList.toggle('open')" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
  </div>`;
}
function getFooter() {
  return `<div class="footer-inner">
    <div><div class="footer-logo">⚡ LinkHub</div><div class="footer-tagline" style="color:var(--muted);font-size:13px;margin-top:4px">All your links, one place.</div></div>
    <div class="footer-links">
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact Us</a>
      <a href="privacy.html">Privacy Policy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
    </div>
    <div class="footer-copy">© 2025 LinkHub · <a href="mailto:linkcreatorapp@gmail.com">linkcreatorapp@gmail.com</a></div>
  </div>`;
}
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('main-nav');
  if (navEl) {
    navEl.innerHTML = getNav(navEl.dataset.page||'');
    if (typeof firebase !== 'undefined' && firebase.apps.length) {
      firebase.auth().onAuthStateChanged(user => {
        const right = navEl.querySelector('.nav-right');
        if (!right) return;
        if (user && user.emailVerified) {
          right.innerHTML = `<a href="dashboard.html" class="btn btn-primary btn-sm">Dashboard</a><button class="nav-toggle" onclick="document.getElementById('nav-menu').classList.toggle('open')" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>`;
        }
      });
    }
  }
  const footEl = document.getElementById('main-footer');
  if (footEl) footEl.innerHTML = getFooter();
});
