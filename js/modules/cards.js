/**
 * Module: Cards & Surfaces
 * Layered surfaces, tone-based depth, zero heavy borders, refined typography.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Cards & Surfaces',
    icon: 'ph-cards',
    description: 'Tone-layered cards, audio widgets, financial balances, and telemetry monitors.'
  };

  const components = [
    {
      title: 'Luxury Studio Audio Card',
      badge: 'Interactive',
      tags: ['card', 'audio', 'media', 'player'],
      note: 'Reference luxury card with dynamic dark/light surface tokens.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3 shadow-sm transition-all duration-200">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center text-accent-peach">
        <i class="ph ph-sliders text-xl"></i>
      </div>
      <div>
        <h4 class="text-xs font-semibold text-luxury-primary tracking-tight">Audio Processing</h4>
        <p class="text-[11px] text-luxury-secondary">Studio Master Profile</p>
      </div>
    </div>
    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] bg-accent-emerald/10 text-accent-emerald font-medium">
      <span class="w-1.5 h-1.5 rounded-full bg-accent-emerald"></span>
      Active
    </span>
  </div>
  <div class="flex items-center gap-1.5 h-6 px-1">
    <div class="h-3 w-1 bg-accent-peach rounded-full"></div>
    <div class="h-5 w-1 bg-accent-peach rounded-full"></div>
    <div class="h-2 w-1 bg-surface-elevated rounded-full"></div>
    <div class="h-4 w-1 bg-accent-peach rounded-full"></div>
    <div class="h-6 w-1 bg-accent-peach rounded-full"></div>
    <div class="h-3 w-1 bg-accent-peach rounded-full"></div>
    <div class="h-1.5 w-1 bg-surface-elevated rounded-full"></div>
    <div class="h-4 w-1 bg-accent-peach rounded-full"></div>
  </div>
</div>
      `
    },
    {
      title: 'KPI Metric & Trend Card',
      badge: 'Analytics',
      tags: ['card', 'metric', 'kpi', 'stats'],
      note: 'Subtle micro-contrast with muted delta indicator.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 shadow-sm">
  <div class="flex items-center justify-between text-xs text-luxury-secondary mb-1">
    <span>Throughput</span>
    <i class="ph ph-arrow-up-right text-accent-emerald"></i>
  </div>
  <div class="text-2xl font-semibold tracking-tight text-luxury-primary font-mono">4.82 Gbps</div>
  <div class="flex items-center gap-2 mt-2 text-[11px]">
    <span class="text-accent-emerald font-medium">+14.2%</span>
    <span class="text-luxury-secondary">vs previous epoch</span>
  </div>
</div>
      `
    },
    {
      title: 'Vault Financial Balance',
      badge: 'Fintech',
      tags: ['card', 'finance', 'balance', 'vault'],
      note: 'Masked balance with quick-action hairline pills.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3 shadow-sm">
  <div class="flex items-center justify-between">
    <span class="text-xs text-luxury-secondary">Primary Liquidity</span>
    <i class="ph ph-eye-slash text-xs text-luxury-secondary cursor-pointer hover:text-luxury-primary transition-colors"></i>
  </div>
  <div class="text-xl font-bold font-mono tracking-tight text-luxury-primary">$248,910.45</div>
  <div class="flex items-center gap-2 pt-1">
    <button class="flex-1 py-1.5 text-xs font-medium rounded-lg bg-surface-elevated hover:bg-surface-hover text-luxury-primary border border-luxury-border transition-colors">
      Transfer
    </button>
    <button class="flex-1 py-1.5 text-xs font-medium rounded-lg bg-surface-elevated hover:bg-surface-hover text-luxury-primary border border-luxury-border transition-colors">
      Deposit
    </button>
  </div>
</div>
      `
    },
    {
      title: 'Team Member Profile Card',
      badge: 'Identity',
      tags: ['card', 'profile', 'avatar', 'user'],
      note: 'Monochrome avatar ring, status dot, and role badge.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 flex items-center justify-between shadow-sm">
  <div class="flex items-center gap-3">
    <div class="relative">
      <div class="w-10 h-10 rounded-full bg-surface-elevated border border-luxury-border flex items-center justify-center font-medium text-xs text-accent-peach">
        EL
      </div>
      <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-accent-emerald ring-2 ring-surface-card"></span>
    </div>
    <div>
      <h5 class="text-xs font-semibold text-luxury-primary">Elena Rostova</h5>
      <p class="text-[11px] text-luxury-secondary">Lead Architect</p>
    </div>
  </div>
  <button class="w-8 h-8 rounded-lg bg-surface-elevated hover:bg-surface-hover text-luxury-secondary hover:text-luxury-primary flex items-center justify-center transition-colors">
    <i class="ph ph-dots-three-vertical text-base"></i>
  </button>
</div>
      `
    },
    {
      title: 'Cluster Telemetry Monitor',
      badge: 'Systems',
      tags: ['card', 'telemetry', 'cluster', 'status'],
      note: 'Latency, CPU core distribution with hairline dividers.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-2.5 shadow-sm">
  <div class="flex items-center justify-between text-xs">
    <span class="font-medium text-luxury-primary">Node Cluster alpha-09</span>
    <span class="text-[10px] font-mono text-accent-emerald">12ms ping</span>
  </div>
  <div class="w-full bg-surface-elevated h-1.5 rounded-full overflow-hidden flex">
    <div class="bg-accent-peach h-full" style="width: 45%"></div>
    <div class="bg-accent-indigo h-full" style="width: 25%"></div>
  </div>
  <div class="flex justify-between text-[10px] text-luxury-secondary font-mono pt-1">
    <span>MEM: 45%</span>
    <span>CPU: 25%</span>
    <span>DISC: 12%</span>
  </div>
</div>
      `
    },
    {
      title: 'Atmospheric Node Status',
      badge: 'Ambient',
      tags: ['card', 'ambient', 'weather', 'status'],
      note: 'Ambient zone telemetry with soft temperature & uptime stats.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-2 shadow-sm">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <i class="ph ph-cloud-sun text-lg text-accent-peach"></i>
      <span class="text-xs font-semibold text-luxury-primary">Zurich DC-02</span>
    </div>
    <span class="font-mono text-xs text-luxury-primary font-medium">18.4°C</span>
  </div>
  <div class="flex items-center justify-between text-[11px] text-luxury-secondary pt-1 border-t border-luxury-border">
    <span>Uptime: 99.995%</span>
    <span class="text-accent-emerald">PUE 1.08</span>
  </div>
</div>
      `
    },
    {
      title: 'Code Snippet Card',
      badge: 'Developer',
      tags: ['card', 'code', 'snippet'],
      note: 'Adaptive code card with syntax highlighting tokens.',
      html: `
<div class="w-full bg-surface-input border border-luxury-border rounded-2xl overflow-hidden font-mono text-xs shadow-sm">
  <div class="flex items-center justify-between px-3 py-2 bg-surface-elevated border-b border-luxury-border text-[11px] text-luxury-secondary">
    <span>config.production.ts</span>
    <i class="ph ph-copy text-xs hover:text-luxury-primary cursor-pointer transition-colors"></i>
  </div>
  <div class="p-3 text-[11px] space-y-1">
    <div><span class="text-accent-indigo font-semibold">export const</span> <span class="text-accent-peach">tier</span> = <span class="text-accent-emerald">'ultra-premium'</span>;</div>
    <div><span class="text-accent-indigo font-semibold">export const</span> <span class="text-accent-peach">latency</span> = <span class="text-luxury-primary">0.42</span>;</div>
  </div>
</div>
      `
    }
  ];

  window.Playground.register('cards', categoryMeta, components);
})();
