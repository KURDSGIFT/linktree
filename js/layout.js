// ── هەموو لاپەڕەکان ئەم footer و nav ی هاوبەشیان بەکار دێنێت ──

function injectNav(activePage = '') {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="index.html" class="logo">⚡ LinkHub</a>
    <div class="nav-links" id="nav-auth-links">
      <a href="auth.html" class="btn btn-outline" style="font-size:13px;padding:8px 16px">چوونەژوورەوە</a>
      <a href="auth.html?tab=signup" class="btn btn-primary" style="font-size:13px;padding:8px 16px">تۆمارکردن</a>
    </div>
  `;
  // ئەگەر لۆگین بوو ببدەیتە داشبۆرد
  if (typeof firebase !== 'undefined' && firebase.apps.length) {
    firebase.auth().onAuthStateChanged(user => {
      const links = document.getElementById('nav-auth-links');
      if (!links) return;
      if (user) {
        links.innerHTML = `<a href="dashboard.html" class="btn btn-primary" style="font-size:13px;padding:8px 16px"><i class="fa-solid fa-gauge"></i> داشبۆرد</a>`;
      }
    });
  }
}

function injectFooter() {
  const el = document.getElementById('main-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="logo" style="font-size:18px">⚡ LinkHub</span>
        <p>هەموو لینکەکانت لە یەک شوێن</p>
      </div>
      <div class="footer-links">
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms &amp; Conditions</a>
      </div>
      <div class="footer-copy">
        © 2025 LinkHub · <a href="mailto:linkcreatorapp@gmail.com">linkcreatorapp@gmail.com</a>
      </div>
    </div>
  `;
}

// Auto-inject
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
