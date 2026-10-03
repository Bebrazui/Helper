/**
 * Module: Data Visualizations & Metrics
 * Sparklines, progress dials, calendar pill selectors, and telemetry instruments.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Visualizations & Widgets',
    icon: 'ph-chart-polar',
    description: 'Micro sparklines, circular progress dials, date pills, and resource distribution meters.'
  };

  const components = [
    {
      title: 'Micro Sparkline Activity Bar',
      badge: 'Data Viz',
      tags: ['chart', 'sparkline', 'bars', 'activity'],
      note: 'Precision equalizer histogram with high-contrast inactive bars.',
      html: `
<div class="w-full space-y-2">
  <div class="flex items-center justify-between text-xs">
    <span class="text-luxury-secondary">Inference Velocity</span>
    <span class="font-mono text-luxury-primary font-semibold">1,420 req/s</span>
  </div>
  <div class="flex items-end gap-1.5 h-9 pt-1 px-0.5">
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[30%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[55%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[40%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[75%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[90%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-accent-peach h-[100%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[60%] rounded-sm transition-colors duration-150"></div>
    <div class="flex-1 bg-black/[0.10] dark:bg-white/[0.14] hover:bg-accent-peach h-[80%] rounded-sm transition-colors duration-150"></div>
  </div>
</div>
      `
    },
    {
      title: 'Precision Resource Distribution',
      badge: 'Distribution',
      tags: ['gauge', 'meter', 'distribution', 'resources'],
      note: 'Segmented continuous distribution bar with micro legend dots.',
      html: `
<div class="w-full space-y-2.5">
  <div class="flex items-center justify-between text-xs">
    <span class="text-luxury-primary font-medium">Memory Allocation</span>
    <span class="font-mono text-xs text-luxury-secondary">24 GB Total</span>
  </div>
  <div class="w-full h-2 rounded-full bg-black/[0.08] dark:bg-white/[0.10] overflow-hidden flex gap-0.5">
    <div class="bg-accent-peach h-full" style="width: 52%"></div>
    <div class="bg-accent-indigo h-full" style="width: 28%"></div>
    <div class="bg-accent-emerald h-full" style="width: 12%"></div>
  </div>
  <div class="flex items-center gap-4 text-[10px] text-luxury-secondary font-mono">
    <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-accent-peach"></span> Models 52%</span>
    <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span> Cache 28%</span>
    <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-accent-emerald"></span> VRAM 12%</span>
  </div>
</div>
      `
    },
    {
      title: 'Minimal Calendar Date Pill Strip',
      badge: 'Calendar',
      tags: ['calendar', 'date', 'picker', 'strip'],
      note: 'Raycast/Linear horizontal day strip selector.',
      html: `
<div class="flex items-center gap-1.5">
  <button class="flex flex-col items-center justify-center w-10 py-1.5 rounded-xl bg-surface-elevated border border-luxury-border text-xs transition-colors">
    <span class="text-[9px] uppercase font-mono text-luxury-muted">Mon</span>
    <span class="text-xs font-semibold text-luxury-primary">12</span>
  </button>
  <button class="flex flex-col items-center justify-center w-10 py-1.5 rounded-xl bg-accent-peach text-surface-bg text-xs font-semibold shadow-sm transition-transform duration-200 active:scale-95">
    <span class="text-[9px] uppercase font-mono text-surface-bg/70">Tue</span>
    <span class="text-xs font-bold">13</span>
  </button>
  <button class="flex flex-col items-center justify-center w-10 py-1.5 rounded-xl hover:bg-surface-elevated text-xs text-luxury-secondary transition-colors">
    <span class="text-[9px] uppercase font-mono text-luxury-muted">Wed</span>
    <span class="text-xs font-semibold">14</span>
  </button>
  <button class="flex flex-col items-center justify-center w-10 py-1.5 rounded-xl hover:bg-surface-elevated text-xs text-luxury-secondary transition-colors">
    <span class="text-[9px] uppercase font-mono text-luxury-muted">Thu</span>
    <span class="text-xs font-semibold">15</span>
  </button>
</div>
      `
    },
    {
      title: 'Precision Telemetry Beacon',
      badge: 'Telemetry',
      tags: ['telemetry', 'beacon', 'network', 'ping', 'latency'],
      note: 'Calm, steady instrument readout without cheap pulsing gimmicks.',
      html: `
<div class="flex items-center justify-between w-full max-w-xs px-3.5 py-2.5 rounded-xl bg-surface-card border border-luxury-border">
  <div class="flex items-center gap-2.5">
    <div class="w-2 h-2 rounded-full bg-accent-emerald ring-2 ring-accent-emerald/25"></div>
    <div class="flex flex-col">
      <span class="text-xs font-semibold text-luxury-primary leading-tight">Mesh Backbone</span>
      <span class="text-[10px] text-luxury-secondary">Frankfurt Node-01</span>
    </div>
  </div>
  <div class="flex items-center gap-2 text-right">
    <div class="flex flex-col items-end">
      <span class="text-xs font-mono font-medium text-luxury-primary">2.4 ms</span>
      <span class="text-[9px] font-mono text-luxury-muted">±0.1 jitter</span>
    </div>
    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-luxury-secondary border border-luxury-border">L4</span>
  </div>
</div>
      `
    }
  ];

  window.Playground.register('visualizations', categoryMeta, components);
})();
