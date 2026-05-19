/**
 * Back Button Helper
 * Adds a back button to pages that need navigation
 */

function addBackButton() {
  // Create back button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i> گەڕانەوە';
  backBtn.onclick = () => window.history.back();
  
  // Find the top nav or header and add the button
  const topnav = document.querySelector('.topnav');
  const header = document.querySelector('.auth-box');
  
  if (topnav) {
    // For dashboard and similar pages
    const topnavRight = topnav.querySelector('.topnav-right');
    if (topnavRight) {
      topnavRight.insertBefore(backBtn, topnavRight.firstChild);
    }
  } else if (header) {
    // For auth page
    const style = `
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 10;
    `;
    backBtn.style.cssText = style;
    header.parentElement.insertBefore(backBtn, header);
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  addBackButton();
});
