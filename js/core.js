/**
 * Premium UI Playground - Core Architecture
 * Manages modular component registration, theme toggling, search filter, and code preview.
 */

window.Playground = (function() {
  const registry = new Map();
  let currentTheme = localStorage.getItem('premium-theme') || 'dark';

  function init() {
    applyTheme(currentTheme);
    setupSearch();
    setupModal();
    renderAll();
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('premium-theme', theme);

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? '<i class="ph ph-sun text-base"></i><span class="hidden sm:inline">Light Mode</span>' 
        : '<i class="ph ph-moon text-base"></i><span class="hidden sm:inline">Dark Mode</span>';
    }
  }

  function toggleTheme() {
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    toast(`Switched to ${next} theme`, next === 'dark' ? 'ph-moon' : 'ph-sun');
  }

  function register(categoryId, categoryMeta, components) {
    if (!registry.has(categoryId)) {
      registry.set(categoryId, { meta: categoryMeta, items: [] });
    }
    const cat = registry.get(categoryId);
    cat.items.push(...components);
  }

  function renderAll() {
    const navContainer = document.getElementById('category-nav');
    const contentContainer = document.getElementById('playground-content');
    if (!contentContainer) return;

    let navHtml = '';
    let contentHtml = '';

    registry.forEach((categoryData, catId) => {
      const { meta, items } = categoryData;
      // Category Navigation pill (touch-scrolled strip)
      navHtml += `
        <a href="#section-${catId}" class="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] whitespace-nowrap shrink-0 transition-colors">
          <i class="ph ${meta.icon} text-sm sm:text-base"></i>
          <span>${meta.title}</span>
          <span class="text-[10px] sm:text-xs px-1.5 py-0.2 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)]">${items.length}</span>
        </a>
      `;

      // Category Section with Display Typography
      contentHtml += `
        <section id="section-${catId}" class="playground-section pt-3 sm:pt-4 pb-8 sm:pb-12">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[var(--border-hairline)] gap-2">
            <div>
              <div class="flex items-center gap-2 sm:gap-2.5">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center text-[var(--accent-peach)] shrink-0">
                  <i class="ph ${meta.icon} text-base sm:text-lg"></i>
                </div>
                <h2 class="font-display font-bold text-lg sm:text-xl tracking-tight text-[var(--text-primary)]">${meta.title}</h2>
              </div>
              <p class="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-1 ml-9 sm:ml-10">${meta.description || ''}</p>
            </div>
            <span class="text-[11px] sm:text-xs font-mono text-[var(--text-muted)] self-start sm:self-auto">${items.length} elements</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            ${items.map((item, idx) => renderItemCard(catId, idx, item)).join('')}
          </div>
        </section>
      `;
    });

    if (navContainer) navContainer.innerHTML = navHtml;
    contentContainer.innerHTML = contentHtml;

    // Attach micro-actions & dynamic listeners
    attachInteractiveHandlers();
  }

  function renderItemCard(catId, index, item) {
    const rawCodeEscaped = escapeHtml(item.html.trim());
    return `
      <div class="component-card card-luxury flex flex-col justify-between group p-3.5 sm:p-5" data-title="${item.title.toLowerCase()}" data-tags="${(item.tags || []).join(' ')}">
        <div>
          <div class="flex items-center justify-between mb-2.5 sm:mb-3 gap-2">
            <span class="text-xs font-medium text-[var(--text-primary)] tracking-tight truncate">${item.title}</span>
            <div class="flex items-center gap-1 sm:gap-1.5 shrink-0">
              ${item.badge ? `<span class="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-secondary)]">${item.badge}</span>` : ''}
              <button onclick="Playground.viewCode('${catId}', ${index})" class="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors" title="View Code">
                <i class="ph ph-code text-sm sm:text-base"></i>
              </button>
              <button onclick="Playground.copyCodeSnippet('${catId}', ${index})" class="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors" title="Copy HTML">
                <i class="ph ph-copy text-sm sm:text-base"></i>
              </button>
            </div>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-[var(--bg-input)] border border-[var(--border-hairline)] flex items-center justify-center min-h-[95px] sm:min-h-[110px] overflow-x-auto max-w-full">
            ${item.html}
          </div>
        </div>
        ${item.note ? `<p class="text-[10px] sm:text-[11px] text-[var(--text-muted)] mt-2 font-mono truncate sm:whitespace-normal">${item.note}</p>` : ''}
      </div>
    `;
  }

  function attachInteractiveHandlers() {
    // Interactive toggles
    document.querySelectorAll('.switch-track').forEach(switchEl => {
      switchEl.onclick = function() {
        this.classList.toggle('active');
        const isActive = this.classList.contains('active');
        toast(`Toggle is now ${isActive ? 'ON' : 'OFF'}`, 'ph-toggle-right');
      };
    });

    // Segmented tabs demo
    document.querySelectorAll('.segmented-control button').forEach(btn => {
      btn.onclick = function() {
        const parent = this.closest('.segmented-control');
        parent.querySelectorAll('button').forEach(b => {
          b.classList.remove('bg-[var(--bg-surface-hover)]', 'text-[var(--text-primary)]', 'shadow-sm');
          b.classList.add('text-[var(--text-secondary)]');
        });
        this.classList.add('bg-[var(--bg-surface-hover)]', 'text-[var(--text-primary)]', 'shadow-sm');
        this.classList.remove('text-[var(--text-secondary)]');
      };
    });
  }

  function setupSearch() {
    const searchInput = document.getElementById('search-components');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.component-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const tags = card.getAttribute('data-tags') || '';
        const matches = title.includes(query) || tags.includes(query);
        card.style.display = matches ? 'flex' : 'none';
        if (matches) visibleCount++;
      });

      const countEl = document.getElementById('search-count');
      if (countEl) {
        countEl.textContent = query ? `${visibleCount} found` : '';
      }
    });

    // Global keyboard shortcut: cmd+k / ctrl+k focus search
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  function setupModal() {
    const modal = document.getElementById('code-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn && modal) {
      closeBtn.onclick = () => modal.classList.remove('open');
      modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('open');
      };
    }
  }

  function viewCode(catId, index) {
    const category = registry.get(catId);
    if (!category || !category.items[index]) return;
    const item = category.items[index];

    const modal = document.getElementById('code-modal');
    const titleEl = document.getElementById('modal-title');
    const codeEl = document.getElementById('modal-code');
    const copyBtn = document.getElementById('modal-copy-btn');

    if (titleEl) titleEl.textContent = `${item.title} — HTML Snippet`;
    if (codeEl) codeEl.textContent = item.html.trim();

    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(item.html.trim());
        toast('Code snippet copied to clipboard', 'ph-check');
      };
    }

    if (modal) modal.classList.add('open');
  }

  function copyCodeSnippet(catId, index) {
    const category = registry.get(catId);
    if (!category || !category.items[index]) return;
    const item = category.items[index];
    navigator.clipboard.writeText(item.html.trim());
    toast(`Copied ${item.title}`, 'ph-check');
  }

  function toast(message, icon = 'ph-info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const el = document.createElement('div');
    el.className = 'toast-item';
    el.innerHTML = `
      <i class="ph ${icon} text-[var(--accent-peach)] text-lg"></i>
      <span>${escapeHtml(message)}</span>
    `;
    container.appendChild(el);

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'all 0.2s ease-out';
      setTimeout(() => el.remove(), 200);
    }, 2500);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  return {
    init,
    register,
    toggleTheme,
    viewCode,
    copyCodeSnippet,
    toast
  };
})();
