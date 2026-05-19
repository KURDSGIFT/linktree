/**
 * Shared Navbar/Sidebar Component
 * Provides responsive mobile-friendly navigation for all pages
 */

function initNavbar(activePage = '') {
  // Create navbar HTML
  const navbarHTML = `
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- Vertical Sidebar -->
    <aside class="sidebar" id="sidebar">
      <a href="index.html" class="sidebar-logo">
        <i class="fa-solid fa-bolt"></i> LinkHub
      </a>
      
      <ul class="sidebar-nav">
        <li><a href="index.html" data-page="home" class="${activePage === 'home' ? 'active' : ''}"><i class="fa-solid fa-home"></i> سەرەکی</a></li>
        <li><a href="template.html" data-page="template" class="${activePage === 'template' ? 'active' : ''}"><i class="fa-solid fa-palette"></i> قاڵب</a></li>
        <li><a href="news.html" data-page="news" class="${activePage === 'news' ? 'active' : ''}"><i class="fa-solid fa-newspaper"></i> هەواڵ</a></li>
        <li><a href="settings.html" data-page="settings" class="${activePage === 'settings' ? 'active' : ''}"><i class="fa-solid fa-gear"></i> ڕێکخستنەکان</a></li>
        <li><a href="about.html" data-page="about" class="${activePage === 'about' ? 'active' : ''}"><i class="fa-solid fa-circle-info"></i> دەربارە</a></li>
      </ul>

      <div class="sidebar-footer">
        <a href="auth.html" class="btn btn-outline" style="font-size:13px;padding:8px 12px">چوونەژوورەوە</a>
        <a href="auth.html?tab=signup" class="btn btn-primary" style="font-size:13px;padding:8px 12px">تۆمارکردن</a>
      </div>
    </aside>
  `;

  // Inject navbar at the beginning of body
  const navContainer = document.createElement('div');
  navContainer.id = 'navbar-container';
  navContainer.innerHTML = navbarHTML;
  document.body.insertBefore(navContainer, document.body.firstChild);

  // Setup event listeners
  setupNavbarEvents();
}

function setupNavbarEvents() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');

  if (!mobileMenuBtn || !sidebar) return;

  // Toggle sidebar on button click
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
  });

  // Close sidebar when clicking on a link
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Set active nav link based on current page
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
});
