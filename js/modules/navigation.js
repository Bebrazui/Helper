/**
 * Module: Navigation & Wayfinding
 * Floating dock, segmented pill controls, breadcrumbs, steppers, sidebar items.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Navigation & Wayfinding',
    icon: 'ph-compass',
    description: 'macOS style floating docks, segmented controls, breadcrumbs, steppers, and sidebar links.'
  };

  const components = [
    {
      title: 'Floating Linear Dock',
      badge: 'Floating',
      tags: ['navigation', 'dock', 'bar', 'floating'],
      note: 'Ultra-subtle floating dock with icon hovers and divider.',
      html: `
<div class="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-surface-card/90 backdrop-blur-md border border-luxury-border shadow-xl">
  <button class="w-9 h-9 rounded-xl bg-surface-elevated text-accent-peach flex items-center justify-center text-lg transition-transform duration-200 hover:scale-110 active:scale-95">
    <i class="ph ph-house"></i>
  </button>
  <button class="w-9 h-9 rounded-xl text-luxury-secondary hover:text-luxury-primary hover:bg-surface-elevated flex items-center justify-center text-lg transition-transform duration-200 hover:scale-110 active:scale-95">
    <i class="ph ph-folder-notch"></i>
  </button>
  <button class="w-9 h-9 rounded-xl text-luxury-secondary hover:text-luxury-primary hover:bg-surface-elevated flex items-center justify-center text-lg transition-transform duration-200 hover:scale-110 active:scale-95">
    <i class="ph ph-chart-line-up"></i>
  </button>
  <span class="w-[1px] h-5 bg-luxury-border mx-0.5"></span>
  <button class="w-9 h-9 rounded-xl text-luxury-secondary hover:text-luxury-primary hover:bg-surface-elevated flex items-center justify-center text-lg transition-transform duration-200 hover:scale-110 active:scale-95">
    <i class="ph ph-gear"></i>
  </button>
</div>
      `
    },
    {
      title: 'Segmented Control Pill Tabs',
      badge: 'Interactive',
      tags: ['tabs', 'segmented', 'filter'],
      note: 'Tactile switcher with sliding tone indicator.',
      html: `
<div class="segmented-control inline-flex items-center p-1 rounded-xl bg-surface-input border border-luxury-border">
  <button class="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-elevated text-luxury-primary shadow-sm transition-all duration-200">
    Overview
  </button>
  <button class="px-3 py-1.5 rounded-lg text-xs font-medium text-luxury-secondary hover:text-luxury-primary transition-colors">
    Security
  </button>
  <button class="px-3 py-1.5 rounded-lg text-xs font-medium text-luxury-secondary hover:text-luxury-primary transition-colors">
    API Keys
  </button>
</div>
      `
    },
    {
      title: 'Hairline Breadcrumb Trail',
      badge: 'Hierarchy',
      tags: ['breadcrumbs', 'path', 'trail'],
      note: 'Subtle chevron separators with trailing active node.',
      html: `
<nav class="flex items-center gap-1.5 text-xs">
  <a href="#" class="text-luxury-secondary hover:text-luxury-primary transition-colors">Projects</a>
  <i class="ph ph-caret-right text-[10px] text-luxury-muted"></i>
  <a href="#" class="text-luxury-secondary hover:text-luxury-primary transition-colors">Infrastructure</a>
  <i class="ph ph-caret-right text-[10px] text-luxury-muted"></i>
  <span class="text-luxury-primary font-medium">Cluster-01</span>
</nav>
      `
    },
    {
      title: 'Progress Stepper Tracker',
      badge: 'Wizard',
      tags: ['stepper', 'progress', 'steps'],
      note: 'Completed, active, and upcoming phase indicators.',
      html: `
<div class="flex items-center gap-2 w-full max-w-xs">
  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-accent-peach text-surface-bg text-[10px] font-bold">
    <i class="ph ph-check"></i>
  </div>
  <div class="flex-1 h-0.5 bg-accent-peach"></div>
  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-surface-elevated border border-accent-peach text-accent-peach text-[10px] font-bold">
    2
  </div>
  <div class="flex-1 h-0.5 bg-luxury-border"></div>
  <div class="flex items-center justify-center w-6 h-6 rounded-full bg-surface-input border border-luxury-border text-luxury-muted text-[10px]">
    3
  </div>
</div>
      `
    },
    {
      title: 'Minimalist Pagination',
      badge: 'Pagination',
      tags: ['pagination', 'pager', 'footer'],
      note: 'Hairline arrow buttons with monospace page counter.',
      html: `
<div class="inline-flex items-center gap-2">
  <button class="w-8 h-8 rounded-lg bg-surface-elevated border border-luxury-border text-luxury-secondary hover:text-luxury-primary flex items-center justify-center text-xs transition-colors">
    <i class="ph ph-caret-left"></i>
  </button>
  <span class="text-xs font-mono text-luxury-secondary">Page 3 / 18</span>
  <button class="w-8 h-8 rounded-lg bg-surface-elevated border border-luxury-border text-luxury-secondary hover:text-luxury-primary flex items-center justify-center text-xs transition-colors">
    <i class="ph ph-caret-right"></i>
  </button>
</div>
      `
    },
    {
      title: 'Vertical Sidebar Navigation Node',
      badge: 'Sidebar',
      tags: ['sidebar', 'nav', 'node', 'vertical'],
      note: 'Linear-inspired vertical item with pill indicator.',
      html: `
<div class="w-full max-w-xs space-y-1">
  <a href="#" class="flex items-center justify-between px-3 py-2 rounded-xl bg-surface-elevated text-luxury-primary text-xs font-medium border border-luxury-border">
    <div class="flex items-center gap-2.5">
      <i class="ph ph-database text-accent-peach text-sm"></i>
      <span>Data Warehouses</span>
    </div>
    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-card text-luxury-secondary">8</span>
  </a>
  <a href="#" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-surface-elevated text-luxury-secondary hover:text-luxury-primary text-xs transition-colors">
    <div class="flex items-center gap-2.5">
      <i class="ph ph-cpu text-sm"></i>
      <span>Edge Compute</span>
    </div>
  </a>
</div>
      `
    },
    {
      title: 'Command Bar Quick-Trigger',
      badge: 'Raycast style',
      tags: ['command', 'quick', 'palette'],
      note: 'Raycast inspired bottom status trigger.',
      html: `
<div class="inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-surface-card border border-luxury-border text-xs shadow-sm">
  <span class="flex items-center gap-1.5 text-luxury-primary font-medium">
    <i class="ph ph-terminal text-sm text-accent-peach"></i>
    <span>Execute Action</span>
  </span>
  <span class="w-[1px] h-3 bg-luxury-border"></span>
  <div class="flex items-center gap-1 text-[10px] font-mono text-luxury-secondary">
    <kbd class="px-1 py-0.5 rounded bg-surface-elevated border border-luxury-border">↵</kbd>
    <span>Enter</span>
  </div>
</div>
      `
    }
  ];

  window.Playground.register('navigation', categoryMeta, components);
})();
