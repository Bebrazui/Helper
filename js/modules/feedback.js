/**
 * Module: Feedback, Overlays & States
 * Interactive toast notifications, modal dialogs, empty states, skeletons, and alert banners.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Feedback & Overlays',
    icon: 'ph-bell-ringing',
    description: 'System feedback, toast triggers, confirmation modals, empty states, and skeleton loaders.'
  };

  const components = [
    {
      title: 'Interactive Toast Notification',
      badge: 'Interactive',
      tags: ['toast', 'notification', 'feedback'],
      note: 'Click button below to trigger dynamic toast notification in the corner.',
      html: `
<button onclick="Playground.toast('Deployment pipeline initiated', 'ph-rocket-launch')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover text-luxury-primary text-xs font-medium border border-luxury-border transition-all duration-200 active:scale-95 shadow-sm">
  <i class="ph ph-bell-simple text-sm text-accent-peach"></i>
  <span>Trigger Toast Alert</span>
</button>
      `
    },
    {
      title: 'Confirmation Dialog Card',
      badge: 'Modal',
      tags: ['modal', 'dialog', 'confirm'],
      note: 'Quiet luxury confirmation sheet with non-aggressive accents.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3 shadow-sm">
  <div class="flex items-center gap-2.5">
    <div class="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-peach">
      <i class="ph ph-shield-warning text-base"></i>
    </div>
    <span class="text-xs font-semibold text-luxury-primary">Revoke Master Key?</span>
  </div>
  <p class="text-[11px] text-luxury-secondary leading-relaxed">
    Existing active sessions using this token will terminate immediately.
  </p>
  <div class="flex items-center justify-end gap-2 pt-1">
    <button class="px-2.5 py-1.5 text-xs text-luxury-secondary hover:text-luxury-primary transition-colors">Cancel</button>
    <button class="px-3 py-1.5 text-xs font-medium rounded-lg bg-accent-peach text-surface-bg hover:bg-accent-peach-hover transition-colors">Revoke</button>
  </div>
</div>
      `
    },
    {
      title: 'Contextual Tooltip Pill',
      badge: 'Tooltip',
      tags: ['tooltip', 'hint', 'micro'],
      note: 'Elevated luxury tooltip with hairline border and caret.',
      html: `
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-elevated border border-luxury-border shadow-lg text-[11px] text-luxury-primary">
  <i class="ph ph-info text-accent-peach"></i>
  <span>Zero data egress fees applied</span>
</div>
      `
    },
    {
      title: 'System Alert Banner',
      badge: 'Banner',
      tags: ['banner', 'alert', 'notice'],
      note: 'Non-intrusive notification strip with action pill.',
      html: `
<div class="w-full p-2.5 rounded-xl bg-surface-card border border-luxury-border flex items-center justify-between text-xs shadow-sm">
  <div class="flex items-center gap-2">
    <i class="ph ph-sparkle text-accent-peach"></i>
    <span class="text-luxury-primary font-medium">New Engine 2.1 Available</span>
  </div>
  <button class="px-2 py-0.5 rounded-lg bg-surface-elevated hover:bg-surface-hover text-luxury-secondary hover:text-luxury-primary text-[11px] font-medium transition-colors">
    Update
  </button>
</div>
      `
    },
    {
      title: 'Empty State Surface',
      badge: 'Empty State',
      tags: ['empty', 'placeholder', 'zero'],
      note: 'Restrained empty state with soft icon container.',
      html: `
<div class="w-full py-5 px-4 rounded-xl border border-dashed border-luxury-border flex flex-col items-center justify-center text-center">
  <div class="w-8 h-8 rounded-xl bg-surface-elevated flex items-center justify-center text-luxury-secondary mb-2">
    <i class="ph ph-folder-dashed text-base"></i>
  </div>
  <span class="text-xs font-medium text-luxury-primary">No artifacts recorded</span>
  <span class="text-[10px] text-luxury-secondary mt-0.5">Generate a report to start monitoring</span>
</div>
      `
    },
    {
      title: 'Subtle Skeleton Shimmer',
      badge: 'Skeleton',
      tags: ['skeleton', 'loader', 'placeholder'],
      note: 'Ultra-muted placeholder blocks without blinding white flashes.',
      html: `
<div class="w-full space-y-2.5 animate-pulse">
  <div class="flex items-center gap-3">
    <div class="w-8 h-8 rounded-full bg-surface-elevated"></div>
    <div class="space-y-1.5 flex-1">
      <div class="h-2.5 bg-surface-elevated rounded-full w-24"></div>
      <div class="h-2 bg-surface-input rounded-full w-36"></div>
    </div>
  </div>
  <div class="h-2 bg-surface-input rounded-full w-full"></div>
</div>
      `
    }
  ];

  window.Playground.register('feedback', categoryMeta, components);
})();
