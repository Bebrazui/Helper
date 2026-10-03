/**
 * Module: Lists, Tables & Activity Feeds
 * Quiet luxury data presentation, subtle row dividers, inspector rows.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Lists & Data Display',
    icon: 'ph-list-dashes',
    description: 'Activity timelines, key-value inspectors, data rows, access controls, and notification feeds.'
  };

  const components = [
    {
      title: 'Audit Event Timeline Item',
      badge: 'Feed',
      tags: ['timeline', 'audit', 'event', 'log'],
      note: 'Connecting vertical line with micro icon dot.',
      html: `
<div class="w-full max-w-sm flex items-start gap-3 text-xs">
  <div class="w-6 h-6 rounded-full bg-surface-elevated border border-luxury-border flex items-center justify-center text-accent-peach shrink-0 mt-0.5">
    <i class="ph ph-git-commit text-xs"></i>
  </div>
  <div class="flex-1 space-y-0.5">
    <div class="flex items-center justify-between">
      <span class="font-medium text-luxury-primary">SSL Certificate Auto-renewed</span>
      <span class="text-[10px] font-mono text-luxury-secondary">2m ago</span>
    </div>
    <p class="text-[11px] text-luxury-secondary">Issued for *.api.antigravity.io by DigiCert</p>
  </div>
</div>
      `
    },
    {
      title: 'Linear-style Property Inspector',
      badge: 'Inspector',
      tags: ['inspector', 'properties', 'sidebar', 'key-value'],
      note: 'Compact 2-column key/value with subtle badges.',
      html: `
<div class="w-full space-y-2 text-xs">
  <div class="flex items-center justify-between py-1 border-b border-luxury-border">
    <span class="text-luxury-secondary flex items-center gap-1.5"><i class="ph ph-user"></i> Assignee</span>
    <span class="text-luxury-primary font-medium">Marc Vance</span>
  </div>
  <div class="flex items-center justify-between py-1 border-b border-luxury-border">
    <span class="text-luxury-secondary flex items-center gap-1.5"><i class="ph ph-lightning"></i> Priority</span>
    <span class="inline-flex items-center gap-1 text-[11px] text-accent-peach font-medium"><i class="ph ph-circle-fill text-[8px]"></i> Urgent</span>
  </div>
  <div class="flex items-center justify-between py-1">
    <span class="text-luxury-secondary flex items-center gap-1.5"><i class="ph ph-calendar"></i> Target</span>
    <span class="font-mono text-[11px] text-luxury-secondary">Oct 24, 2026</span>
  </div>
</div>
      `
    },
    {
      title: 'Compact Data Row',
      badge: 'Table',
      tags: ['table', 'row', 'data'],
      note: 'Hover lightness shift with hairline borders.',
      html: `
<div class="w-full flex items-center justify-between p-2.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-luxury-border transition-colors duration-200 text-xs shadow-sm">
  <div class="flex items-center gap-3">
    <i class="ph ph-cube text-base text-luxury-secondary"></i>
    <div>
      <div class="font-medium text-luxury-primary">redis-cache-eu</div>
      <div class="text-[10px] text-luxury-secondary font-mono">10.0.4.12:6379</div>
    </div>
  </div>
  <div class="flex items-center gap-3">
    <span class="font-mono text-[11px] text-accent-emerald font-medium">Healthy</span>
    <button class="text-luxury-secondary hover:text-luxury-primary">
      <i class="ph ph-caret-right"></i>
    </button>
  </div>
</div>
      `
    },
    {
      title: 'API Secret Token Inspector',
      badge: 'Security',
      tags: ['api', 'token', 'key', 'secret'],
      note: 'Masked string with single click copy feedback.',
      html: `
<div class="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-surface-input border border-luxury-border text-xs">
  <div class="flex items-center gap-2">
    <i class="ph ph-key text-accent-peach"></i>
    <span class="font-mono text-luxury-secondary text-[11px]">ag_live_••••••••901f</span>
  </div>
  <button class="text-luxury-secondary hover:text-luxury-primary transition-colors text-xs" title="Copy Token">
    <i class="ph ph-copy"></i>
  </button>
</div>
      `
    },
    {
      title: 'Notification Feed Item',
      badge: 'Interactive',
      tags: ['notification', 'alert', 'item'],
      note: 'Unread subtle dot indicator with quick dismissal action.',
      html: `
<div class="w-full p-3 rounded-xl bg-surface-card border border-luxury-border flex items-start gap-3 text-xs shadow-sm">
  <div class="w-2 h-2 rounded-full bg-accent-peach mt-1.5 shrink-0"></div>
  <div class="flex-1">
    <div class="text-luxury-primary font-medium">Backup completed successfully</div>
    <div class="text-[11px] text-luxury-secondary mt-0.5">Automated snapshot of DB-Primary verified.</div>
  </div>
  <button class="text-luxury-secondary hover:text-luxury-primary transition-colors" title="Dismiss">
    <i class="ph ph-x text-xs"></i>
  </button>
</div>
      `
    }
  ];

  window.Playground.register('tables', categoryMeta, components);
})();
