/**
 * Premium UI Playground - Application Bootstrap
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Playground core
  window.Playground.init();

  // Bind theme toggle button
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      window.Playground.toggleTheme();
    });
  }

  // Keyboard shortcut: Press T to toggle theme (when not in an input)
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      window.Playground.toggleTheme();
    }
  });

  console.log('Premium UI Playground initialized with modular architecture.');
});
