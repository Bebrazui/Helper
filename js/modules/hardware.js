/**
 * Module: Tactile Hardware & Smart IoT Surfaces
 * Vertical capsule level meters, embedded radio tiles, telemetry twins, and swatch matrices.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Hardware & IoT Surfaces',
    icon: 'ph-sliders-horizontal',
    description: 'Capsule level sliders, embedded radio power tiles, WAN telemetry twins, and preset swatch matrices.'
  };

  const components = [
    {
      title: 'Vertical Capsule Level Slider',
      badge: 'Physical UI',
      tags: ['slider', 'capsule', 'iot', 'smart-home', 'level'],
      note: 'Control Center vertical capsule with inset drag bar notch and mode dock.',
      html: `
<div class="flex flex-col items-center gap-3 py-2 w-full max-w-[200px] mx-auto">
  <div class="text-center">
    <div class="font-display font-extrabold text-2xl text-luxury-primary tracking-tight">75%</div>
    <div class="text-[10px] font-mono uppercase tracking-wider text-luxury-muted">Output Level</div>
  </div>

  <!-- Vertical Capsule Track -->
  <div class="relative w-20 h-44 rounded-[28px] bg-surface-elevated border border-luxury-border overflow-hidden flex flex-col justify-end p-1.5 shadow-inner">
    <div class="w-full bg-[#10B981] dark:bg-[#10B981] rounded-[22px] flex items-start justify-center pt-2 transition-all duration-300" style="height: 75%">
      <!-- Inset Drag Handle Line -->
      <span class="w-7 h-1 rounded-full bg-white/90 shadow-sm"></span>
    </div>
  </div>

  <!-- Sub-Control Dock -->
  <div class="inline-flex items-center gap-2 p-1.5 rounded-full bg-surface-card border border-luxury-border shadow-sm">
    <button class="w-7 h-7 rounded-full bg-surface-elevated hover:bg-surface-hover text-luxury-secondary hover:text-luxury-primary flex items-center justify-center text-xs transition-colors">
      <i class="ph ph-power"></i>
    </button>
    <button class="w-7 h-7 rounded-full bg-surface-elevated text-luxury-primary flex items-center justify-center text-xs shadow-sm">
      <i class="ph ph-sun-dim"></i>
    </button>
    <button class="w-7 h-7 rounded-full bg-surface-elevated hover:bg-surface-hover text-accent-peach flex items-center justify-center text-xs transition-colors">
      <i class="ph ph-palette"></i>
    </button>
  </div>
</div>
      `
    },
    {
      title: 'Embedded Radio & Power Tile',
      badge: 'IoT Tile',
      tags: ['radio', 'wifi', 'hardware', 'tile', 'switch'],
      note: 'Hardware device tile with wide embedded power toggle slider.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-3.5 space-y-3 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="w-9 h-9 rounded-xl bg-accent-amber/15 text-accent-amber flex items-center justify-center text-lg">
      <i class="ph ph-wifi-high"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs font-semibold text-luxury-primary truncate">5GHz Mesh Radio</span>
      <span class="text-[10px] font-mono text-luxury-secondary">Channel 36 &bull; Operational</span>
    </div>
  </div>

  <!-- Wide Embedded Power Slider Track -->
  <div class="w-full p-1 rounded-xl bg-surface-elevated border border-luxury-border flex items-center justify-end cursor-pointer">
    <div class="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-amber text-[#14100c] text-xs font-semibold shadow-sm transition-transform active:scale-95">
      <i class="ph ph-power text-xs"></i>
      <span>Active</span>
    </div>
  </div>
</div>
      `
    },
    {
      title: 'Telemetry Twins (WAN Speeds)',
      badge: 'Metrics Duo',
      tags: ['network', 'speed', 'wan', 'telemetry', 'duo'],
      note: 'Paired side-by-side metric tiles for complementary streams.',
      html: `
<div class="w-full space-y-2">
  <div class="flex items-center gap-1.5 text-xs text-luxury-secondary px-0.5">
    <i class="ph ph-gauge text-sm text-accent-peach"></i>
    <span class="font-medium text-luxury-primary">Network Throughput</span>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <div class="p-3 rounded-xl bg-surface-card border border-luxury-border flex items-center gap-2.5 shadow-sm">
      <div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-emerald shrink-0">
        <i class="ph ph-arrow-down text-sm"></i>
      </div>
      <div class="flex flex-col min-w-0">
        <span class="text-[10px] font-mono uppercase text-luxury-muted">Down</span>
        <span class="text-xs font-mono font-semibold text-luxury-primary truncate">148.4 Mb/s</span>
      </div>
    </div>

    <div class="p-3 rounded-xl bg-surface-card border border-luxury-border flex items-center gap-2.5 shadow-sm">
      <div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-indigo shrink-0">
        <i class="ph ph-arrow-up text-sm"></i>
      </div>
      <div class="flex flex-col min-w-0">
        <span class="text-[10px] font-mono uppercase text-luxury-muted">Up</span>
        <span class="text-xs font-mono font-semibold text-luxury-primary truncate">42.1 Mb/s</span>
      </div>
    </div>
  </div>
</div>
      `
    },
    {
      title: 'Circular Preset & Swatch Matrix',
      badge: 'Presets',
      tags: ['swatches', 'palette', 'color', 'matrix', 'presets'],
      note: 'Tactile circular touch pads with hairline rings for lighting/modes.',
      html: `
<div class="w-full flex flex-col items-center gap-2 py-1">
  <div class="text-[11px] font-medium text-luxury-secondary self-start">Ambient Scenes</div>
  <div class="grid grid-cols-4 gap-2.5">
    <button class="w-7 h-7 rounded-full bg-[#EA580C] ring-2 ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#F59E0B] ring-2 ring-transparent hover:ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#FED7AA] ring-2 ring-transparent hover:ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#FFFFFF] ring-2 ring-transparent hover:ring-black/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#818CF8] ring-2 ring-transparent hover:ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#C084FC] ring-2 ring-transparent hover:ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#F472B6] ring-2 ring-transparent hover:ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#EF4444] ring-2 ring-transparent hover:ring-white/20 transition-transform hover:scale-110 active:scale-95 shadow-sm"></button>
  </div>
</div>
      `
    },
    {
      title: 'Action-Coupled Diagnostic Tile',
      badge: 'Action Tile',
      tags: ['hardware', 'action', 'diagnostic', 'button'],
      note: 'Diagnostic telemetry status paired directly with tactile push button.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-3.5 space-y-3 shadow-sm">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 rounded-xl bg-surface-elevated text-accent-peach flex items-center justify-center">
        <i class="ph ph-cpu text-base"></i>
      </div>
      <div>
        <div class="text-xs font-semibold text-luxury-primary">Memory Buffer</div>
        <div class="text-[10px] font-mono text-luxury-secondary">53% Allocated</div>
      </div>
    </div>
    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-luxury-secondary">Node-4</span>
  </div>
  <button class="w-full py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover text-luxury-primary text-xs font-medium border border-luxury-border transition-all active:scale-[0.97] shadow-sm">
    Purge &amp; Re-index
  </button>
</div>
      `
    }
  ];

  window.Playground.register('hardware', categoryMeta, components);
})();
