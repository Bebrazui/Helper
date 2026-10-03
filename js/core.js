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
    // 1. Interactive toggles
    document.querySelectorAll('.switch-track').forEach(switchEl => {
      switchEl.onclick = function() {
        this.classList.toggle('active');
        const isActive = this.classList.contains('active');
        toast(`Toggle is now ${isActive ? 'ON' : 'OFF'}`, 'ph-toggle-right');
      };
    });

    // 2. Segmented tabs demo
    document.querySelectorAll('.segmented-control button').forEach(btn => {
      btn.onclick = function() {
        const parent = this.closest('.segmented-control');
        if (!parent) return;
        parent.querySelectorAll('button').forEach(b => {
          b.classList.remove('bg-[var(--bg-surface-hover)]', 'text-[var(--text-primary)]', 'shadow-sm');
          b.classList.add('text-[var(--text-secondary)]');
        });
        this.classList.add('bg-[var(--bg-surface-hover)]', 'text-[var(--text-primary)]', 'shadow-sm');
        this.classList.remove('text-[var(--text-secondary)]');
      };
    });

    // 3. Initialize Capsule Sliders (drag & touch)
    initCapsuleSliders();

    // 4. Initialize Hardware Slider drag
    initHardwareSliderDrag();

    // 5. Initialize Form inputs (sliders, steppers, PIN, radios)
    initInputsInteractivity();

    // 6. Start subtle live telemetry pulse
    startTelemetryPulse();
  }

  function initCapsuleSliders() {
    document.querySelectorAll('.hw-capsule-track').forEach(track => {
      const widget = track.closest('.hw-capsule-widget');
      if (!widget) return;
      const fill = widget.querySelector('.hw-capsule-fill');
      const valEl = widget.querySelector('.hw-capsule-val');
      const lblEl = widget.querySelector('.hw-capsule-lbl');
      let isDragging = false;

      function updateFromPointer(e) {
        const rect = track.getBoundingClientRect();
        const clientY = e.clientY;
        const offsetY = rect.bottom - clientY;
        let pct = Math.round((offsetY / rect.height) * 100);
        pct = Math.max(0, Math.min(100, pct));
        
        if (fill) fill.style.height = pct + '%';
        if (valEl) valEl.textContent = pct + '%';
        if (lblEl) lblEl.textContent = pct === 0 ? 'Off' : (pct === 100 ? 'Max' : 'Now');
      }

      track.onpointerdown = (e) => {
        isDragging = true;
        try { track.setPointerCapture(e.pointerId); } catch(_) {}
        if (fill) fill.classList.remove('transition-all', 'duration-300');
        updateFromPointer(e);
      };

      track.onpointermove = (e) => {
        if (!isDragging) return;
        updateFromPointer(e);
      };

      const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try { track.releasePointerCapture(e.pointerId); } catch(_) {}
        if (fill) fill.classList.add('transition-all', 'duration-300');
        const currentPct = parseInt(valEl ? valEl.textContent : '75', 10);
        toast(`Luminance set to ${currentPct}%`, 'ph-sun');
      };

      track.onpointerup = stopDrag;
      track.onpointercancel = stopDrag;
    });
  }

  function initHardwareSliderDrag() {
    document.querySelectorAll('.hw-slider-track').forEach(track => {
      const thumb = track.querySelector('.hw-slider-thumb');
      if (!thumb) return;
      let isDragging = false;
      let startX = 0;
      let hasMoved = false;

      track.onpointerdown = (e) => {
        isDragging = true;
        hasMoved = false;
        startX = e.clientX;
        try { track.setPointerCapture(e.pointerId); } catch(_) {}
      };

      track.onpointermove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        if (Math.abs(deltaX) > 6) hasMoved = true;
        const rect = track.getBoundingClientRect();
        const innerWidth = rect.width;
        const offsetX = e.clientX - rect.left;
        let pct = (offsetX / innerWidth) * 100;
        pct = Math.max(0, Math.min(100, pct));
        
        // Live drag visual
        thumb.style.transition = 'none';
        thumb.style.transform = `translateX(${pct > 50 ? 100 : 0}%)`;
      };

      const finishDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try { track.releasePointerCapture(e.pointerId); } catch(_) {}
        thumb.style.transition = 'all 0.3s ease-out';
        
        if (hasMoved) {
          const rect = track.getBoundingClientRect();
          const offsetX = e.clientX - rect.left;
          const pct = (offsetX / rect.width) * 100;
          if (pct >= 50 && track.classList.contains('hw-off')) {
            toggleHardwareSlider(track);
          } else if (pct < 50 && !track.classList.contains('hw-off')) {
            toggleHardwareSlider(track);
          } else {
            // Restore visual based on current class
            const isOff = track.classList.contains('hw-off');
            thumb.style.transform = isOff ? 'translateX(0%)' : 'translateX(100%)';
          }
        }
      };

      track.onpointerup = finishDrag;
      track.onpointercancel = finishDrag;
    });
  }

  function initInputsInteractivity() {
    // Range sliders: live text update
    document.querySelectorAll('input[type="range"]').forEach(slider => {
      slider.oninput = function() {
        const parent = this.closest('div.space-y-2') || this.parentElement;
        if (!parent) return;
        const valSpan = parent.querySelector('span.font-mono');
        if (valSpan) valSpan.textContent = this.value + '%';
      };
    });

    // Steppers: +/- buttons
    document.querySelectorAll('.ph-minus, .ph-plus').forEach(icon => {
      const btn = icon.closest('button');
      if (!btn) return;
      btn.onclick = function() {
        const input = btn.closest('div').parentElement.querySelector('input');
        if (!input) return;
        let num = parseFloat(input.value.replace(/[^0-9.-]/g, '')) || 0;
        if (icon.classList.contains('ph-minus')) {
          num = Math.max(0, num - 10);
        } else {
          num += 10;
        }
        input.value = num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      };
    });

    // PIN cells: auto advance
    const pinInputs = document.querySelectorAll('input[maxlength="1"]');
    pinInputs.forEach((cell, idx) => {
      cell.oninput = function() {
        if (this.value && idx < pinInputs.length - 1) {
          pinInputs[idx + 1].focus();
        }
      };
      cell.onkeydown = function(e) {
        if (e.key === 'Backspace' && !this.value && idx > 0) {
          pinInputs[idx - 1].focus();
        }
      };
    });

    // Segmented allocation pills (25%, 50%, 75%, MAX)
    document.querySelectorAll('.inline-flex button').forEach(btn => {
      if (['25%', '50%', '75%', 'MAX'].includes(btn.textContent.trim())) {
        btn.onclick = function() {
          const container = this.parentElement;
          container.querySelectorAll('button').forEach(b => {
            b.classList.remove('bg-surface-elevated', 'text-luxury-primary', 'font-medium', 'shadow-sm');
            b.classList.add('text-luxury-secondary');
          });
          this.classList.add('bg-surface-elevated', 'text-luxury-primary', 'font-medium', 'shadow-sm');
          this.classList.remove('text-luxury-secondary');
          toast(`Allocation set to ${this.textContent.trim()}`, 'ph-chart-pie-slice');
        };
      }
    });

    // Radio surface cards selection
    document.querySelectorAll('.grid-cols-1.xs\\:grid-cols-2 > div, .grid-cols-2 > div').forEach(card => {
      const parent = card.parentElement;
      if (parent && parent.querySelectorAll('.rounded-full.border-2, .rounded-full.border').length > 0) {
        card.onclick = function() {
          parent.querySelectorAll('> div').forEach(c => {
            c.classList.remove('bg-surface-elevated', 'border-accent-peach/50');
            c.classList.add('bg-surface-input', 'border-luxury-border');
            const dotContainer = c.querySelector('.rounded-full');
            if (dotContainer) {
              dotContainer.className = 'w-3.5 h-3.5 rounded-full border border-luxury-border';
              dotContainer.innerHTML = '';
            }
          });
          this.classList.remove('bg-surface-input', 'border-luxury-border');
          this.classList.add('bg-surface-elevated', 'border-accent-peach/50');
          const dot = this.querySelector('.rounded-full');
          if (dot) {
            dot.className = 'w-3.5 h-3.5 rounded-full border-2 border-accent-peach flex items-center justify-center';
            dot.innerHTML = '<div class="w-1.5 h-1.5 rounded-full bg-accent-peach"></div>';
          }
          const title = this.querySelector('.font-medium');
          if (title) toast(`Selected: ${title.textContent.trim()}`, 'ph-check');
        };
      }
    });
  }

  let telemetryInterval = null;
  function startTelemetryPulse() {
    if (telemetryInterval) clearInterval(telemetryInterval);
    telemetryInterval = setInterval(() => {
      const downEl = document.querySelector('.hw-wan-down');
      const upEl = document.querySelector('.hw-wan-up');
      if (!downEl || !upEl) return;
      const baseDown = 148;
      const baseUp = 42;
      const randDown = (baseDown + (Math.random() * 2 - 1)).toFixed(1);
      const randUp = (baseUp + (Math.random() * 0.8 - 0.4)).toFixed(1);
      downEl.textContent = `${randDown} Mbit/s`;
      upEl.textContent = `${randUp} Mbit/s`;
    }, 3500);
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

  // --- Tactile Hardware Interactivity Functions ---

  function toggleHardwareSlider(trackEl) {
    const thumb = trackEl.querySelector('.hw-slider-thumb');
    const card = trackEl.closest('.component-card, div');
    const statusText = card ? card.querySelector('.hw-radio-status') : null;
    if (!thumb) return;

    const isOff = trackEl.classList.contains('hw-off');

    if (!isOff) {
      // Transition to OFF (thumb slides to left)
      trackEl.classList.add('hw-off');
      trackEl.style.backgroundColor = 'var(--bg-surface-elevated)';
      trackEl.style.borderColor = 'var(--border-hairline)';
      thumb.style.transform = 'translateX(0%)';
      thumb.style.backgroundColor = 'var(--bg-surface-hover)';
      thumb.style.color = 'var(--text-muted)';
      if (statusText) statusText.textContent = 'Off';
      toast('2.4GHz Radio turned OFF', 'ph-power');
    } else {
      // Transition to ON (thumb slides to right)
      trackEl.classList.remove('hw-off');
      trackEl.style.backgroundColor = '#8B5E0D';
      trackEl.style.borderColor = 'rgba(245, 166, 35, 0.4)';
      thumb.style.transform = 'translateX(100%)';
      thumb.style.backgroundColor = '#F5A623';
      thumb.style.color = '#FFFFFF';
      if (statusText) statusText.textContent = 'On';
      toast('2.4GHz Radio turned ON', 'ph-wifi-high');
    }
  }

  function triggerReboot(btn) {
    if (!btn || btn.disabled) return;
    const card = btn.closest('.hw-reboot-card') || btn.parentElement;
    if (!card) return;
    const icon = card.querySelector('.hw-reboot-icon');
    const iconWrap = card.querySelector('.hw-reboot-icon-wrap');
    const statusText = card.querySelector('.hw-reboot-status');

    // 1. Lock button immediately
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');

    // 2. Start spinning icon with accent ring
    if (icon) icon.classList.add('animate-spin');
    if (iconWrap) iconWrap.classList.add('ring-2', 'ring-blue-500/40', 'scale-105');
    if (statusText) statusText.innerHTML = '<span class="text-blue-400 font-mono">Rebooting in progress...</span>';

    // 3. Countdown
    let timeLeft = 3;
    btn.textContent = `Rebooting (${timeLeft}s)...`;
    toast('Reboot sequence initiated', 'ph-arrow-clockwise');

    const interval = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        btn.textContent = `Rebooting (${timeLeft}s)...`;
      } else {
        clearInterval(interval);
        // Complete reboot sequence & unlock
        if (icon) icon.classList.remove('animate-spin');
        if (iconWrap) iconWrap.classList.remove('ring-2', 'ring-blue-500/40', 'scale-105');
        if (statusText) statusText.innerHTML = 'Online &bull; <span class="text-accent-emerald font-semibold">Ready</span>';
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        btn.textContent = 'Press';
        toast('Node rebooted & verified online', 'ph-check-circle');
      }
    }, 1000);
  }

  function setCapsuleColor(hex, el) {
    const widget = el.closest('.hw-capsule-widget');
    if (!widget) return;
    const fill = widget.querySelector('.hw-capsule-fill');
    if (fill) fill.style.backgroundColor = hex;

    // Update active swatch ring
    const grid = widget.querySelector('.hw-swatches-grid');
    if (grid) {
      grid.querySelectorAll('button').forEach(b => {
        b.classList.remove('ring-white', 'ring-offset-2', 'ring-offset-surface-card');
        b.classList.add('ring-transparent');
      });
      el.classList.remove('ring-transparent');
      el.classList.add('ring-white', 'ring-offset-2', 'ring-offset-surface-card');
    }
    toast(`Scene color updated`, 'ph-palette');
  }

  function cycleCapsuleBrightness(btn) {
    const widget = btn.closest('.hw-capsule-widget');
    if (!widget) return;
    const fill = widget.querySelector('.hw-capsule-fill');
    const valEl = widget.querySelector('.hw-capsule-val');
    const lblEl = widget.querySelector('.hw-capsule-lbl');

    const currentVal = parseInt(valEl ? valEl.textContent : '75', 10);
    const steps = [25, 50, 75, 100];
    let next = steps.find(s => s > currentVal);
    if (!next) next = steps[0];

    if (fill) fill.style.height = next + '%';
    if (valEl) valEl.textContent = next + '%';
    if (lblEl) lblEl.textContent = 'Now';
    toast(`Brightness set to ${next}%`, 'ph-sun-dim');
  }

  function toggleCapsulePower(btn) {
    const widget = btn.closest('.hw-capsule-widget');
    if (!widget) return;
    const fill = widget.querySelector('.hw-capsule-fill');
    const valEl = widget.querySelector('.hw-capsule-val');
    const lblEl = widget.querySelector('.hw-capsule-lbl');

    const currentVal = parseInt(valEl ? valEl.textContent : '75', 10);
    if (currentVal > 0) {
      widget.setAttribute('data-prev-val', currentVal);
      if (fill) fill.style.height = '0%';
      if (valEl) valEl.textContent = '0%';
      if (lblEl) lblEl.textContent = 'Off';
      toast('Capsule light turned OFF', 'ph-power');
    } else {
      const prev = parseInt(widget.getAttribute('data-prev-val') || '75', 10);
      if (fill) fill.style.height = prev + '%';
      if (valEl) valEl.textContent = prev + '%';
      if (lblEl) lblEl.textContent = 'Now';
      toast(`Capsule light turned ON (${prev}%)`, 'ph-sun');
    }
  }

  function cycleCapsuleColor(btn) {
    const widget = btn.closest('.hw-capsule-widget');
    if (!widget) return;
    const swatches = widget.querySelectorAll('.hw-swatches-grid button');
    if (!swatches.length) return;
    const currentActiveIndex = Array.from(swatches).findIndex(b => b.classList.contains('ring-white'));
    const nextIndex = (currentActiveIndex + 1) % swatches.length;
    swatches[nextIndex].click();
  }

  function runSpeedTest(tile) {
    const downEl = tile.querySelector('.hw-wan-down');
    const upEl = tile.querySelector('.hw-wan-up');
    const downIcon = tile.querySelector('.hw-wan-down-icon i');
    const upIcon = tile.querySelector('.hw-wan-up-icon i');

    if (downIcon) downIcon.classList.add('animate-spin');
    if (upIcon) upIcon.classList.add('animate-spin');
    toast('Testing WAN broadband throughput...', 'ph-gauge');

    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      if (downEl) downEl.textContent = `${(100 + Math.random() * 150).toFixed(1)} Mbit/s`;
      if (upEl) upEl.textContent = `${(30 + Math.random() * 35).toFixed(1)} Mbit/s`;

      if (counter >= 10) {
        clearInterval(interval);
        const finalDown = (180 + Math.random() * 45).toFixed(1);
        const finalUp = (45 + Math.random() * 15).toFixed(1);
        if (downEl) downEl.textContent = `${finalDown} Mbit/s`;
        if (upEl) upEl.textContent = `${finalUp} Mbit/s`;
        if (downIcon) downIcon.classList.remove('animate-spin');
        if (upIcon) upIcon.classList.remove('animate-spin');
        toast(`Test complete: ${finalDown} Mbit/s down / ${finalUp} Mbit/s up`, 'ph-check-circle');
      }
    }, 120);
  }

  return {
    init,
    register,
    toggleTheme,
    viewCode,
    copyCodeSnippet,
    toggleHardwareSlider,
    triggerReboot,
    setCapsuleColor,
    cycleCapsuleBrightness,
    toggleCapsulePower,
    cycleCapsuleColor,
    runSpeedTest,
    toast
  };
})();
