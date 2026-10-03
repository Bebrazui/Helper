/**
 * Module: Buttons & Badges
 * Strict adherence to quiet luxury aesthetics, hairline borders, Phosphor icons.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Buttons & Badges',
    icon: 'ph-cursor-click',
    description: 'Primary, secondary, icon triggers, status badges, floating actions, and grouped pills.'
  };

  const components = [
    {
      title: 'Primary Luxury Button',
      badge: 'Accent',
      tags: ['button', 'primary', 'cta', 'action'],
      note: 'Warm peach accent (#FFC799) with deep dark text for high legibility.',
      html: `
<button class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-peach hover:bg-accent-peach-hover text-surface-bg text-sm font-medium tracking-tight transition-all duration-200 active:scale-[0.97]">
  <i class="ph ph-sparkle text-base"></i>
  <span>Generate Build</span>
</button>
      `
    },
    {
      title: 'Secondary Hairline Button',
      badge: 'Surface',
      tags: ['button', 'secondary', 'neutral'],
      note: 'Adaptive surface with micro-hairline border and ease-out hover.',
      html: `
<button class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover text-luxury-primary text-sm font-medium border border-luxury-border transition-all duration-200 active:scale-[0.97]">
  <i class="ph ph-gear text-base text-luxury-secondary"></i>
  <span>Configuration</span>
</button>
      `
    },
    {
      title: 'Ghost Action Button',
      badge: 'Minimal',
      tags: ['button', 'ghost', 'subtle'],
      note: 'Zero borders, subtle background reveal on hover.',
      html: `
<button class="inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-surface-elevated text-luxury-secondary hover:text-luxury-primary text-sm font-medium transition-colors duration-200">
  <i class="ph ph-arrow-counter-clockwise text-base"></i>
  <span>Discard Draft</span>
</button>
      `
    },
    {
      title: 'Icon Button Matrix',
      badge: 'Controls',
      tags: ['button', 'icon', 'square'],
      note: 'Balanced 36px square buttons with micro-state feedback.',
      html: `
<div class="flex items-center gap-2">
  <button class="w-9 h-9 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-luxury-border flex items-center justify-center text-luxury-primary transition-all duration-200 active:scale-[0.95]" title="Bookmark">
    <i class="ph ph-bookmark-simple text-base"></i>
  </button>
  <button class="w-9 h-9 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-luxury-border flex items-center justify-center text-luxury-primary transition-all duration-200 active:scale-[0.95]" title="Share">
    <i class="ph ph-share-network text-base"></i>
  </button>
  <button class="w-9 h-9 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-luxury-border flex items-center justify-center text-luxury-primary transition-all duration-200 active:scale-[0.95]" title="Options">
    <i class="ph ph-dots-three text-base"></i>
  </button>
</div>
      `
    },
    {
      title: 'Split Action Dropdown',
      badge: 'Compound',
      tags: ['button', 'split', 'dropdown'],
      note: 'Unified pill with divider hairline between main action & caret.',
      html: `
<div class="inline-flex items-center rounded-xl bg-surface-elevated border border-luxury-border overflow-hidden">
  <button class="px-3.5 py-2 text-sm font-medium text-luxury-primary hover:bg-surface-hover transition-colors duration-200 flex items-center gap-2">
    <i class="ph ph-cloud-arrow-up text-base text-luxury-secondary"></i>
    <span>Publish Release</span>
  </button>
  <span class="w-[1px] h-4 bg-luxury-border"></span>
  <button class="px-2.5 py-2 text-luxury-secondary hover:text-luxury-primary hover:bg-surface-hover transition-colors duration-200">
    <i class="ph ph-caret-down text-xs"></i>
  </button>
</div>
      `
    },
    {
      title: 'Refined Status Badges',
      badge: 'Badges',
      tags: ['badge', 'status', 'pill'],
      note: 'Muted indicator dots without loud neon fills.',
      html: `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
    <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
    Live
  </span>
  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#F2C94C]/15 text-[#D97706] dark:text-[#F2C94C] border border-[#F2C94C]/25">
    <span class="w-1.5 h-1.5 rounded-full bg-[#F2C94C]"></span>
    Pending
  </span>
  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-elevated text-luxury-secondary border border-luxury-border">
    <span class="w-1.5 h-1.5 rounded-full bg-luxury-secondary"></span>
    Archived
  </span>
</div>
      `
    },
    {
      title: 'Linear Floating Quick Action',
      badge: 'Floating',
      tags: ['button', 'pill', 'quick', 'action'],
      note: 'Compact floating pill with subtle shadow and border glow.',
      html: `
<button class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card hover:bg-surface-elevated text-luxury-primary border border-luxury-border transition-all duration-200 active:scale-95 text-xs font-medium">
  <span class="w-1.5 h-1.5 rounded-full bg-accent-peach"></span>
  <span>Sync Changes</span>
  <kbd class="ml-1 text-[10px] font-mono text-luxury-muted">⌘S</kbd>
</button>
      `
    },
    {
      title: 'Categorized Filter Chips',
      badge: 'Chips',
      tags: ['chip', 'filter', 'tags', 'counter'],
      note: 'Interactive filter chips with inline quantity badges.',
      html: `
<div class="flex items-center gap-1.5">
  <button class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-elevated text-luxury-primary border border-luxury-border text-xs font-medium transition-colors">
    <span>Production</span>
    <span class="px-1.5 py-0.2 rounded-full bg-surface-card text-[10px] text-luxury-secondary">14</span>
  </button>
  <button class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-surface-elevated text-luxury-secondary hover:text-luxury-primary text-xs transition-colors">
    <span>Staging</span>
    <span class="px-1.5 py-0.2 rounded-full bg-surface-card text-[10px] text-luxury-muted">3</span>
  </button>
</div>
      `
    }
  ];

  window.Playground.register('buttons', categoryMeta, components);
})();
