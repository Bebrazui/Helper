/**
 * Module: Tactile Hardware & Smart IoT Surfaces
 * Authentic smart home & hardware control elements inspired by HomeKit & hardware hubs.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Hardware & IoT Surfaces',
    icon: 'ph-sliders-horizontal',
    description: 'Chunky capsule sliders, long orange hardware toggles, WAN telemetry tiles, and press pads.'
  };

  const components = [
    {
      title: 'Long Orange Hardware Slider (Radio Toggle)',
      badge: 'Hardware Switch',
      tags: ['slider', 'toggle', 'hardware', 'radio', 'amber', 'iot'],
      note: 'Chunky physical slider switch with 50% width amber thumb and power glyph.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3.5 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="w-11 h-11 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center text-xl shrink-0">
      <i class="ph ph-wifi-high"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-sm font-semibold text-luxury-primary leading-tight">2.4GHz Radio</span>
      <span class="text-xs text-luxury-secondary hw-radio-status">On</span>
    </div>
  </div>

  <!-- Long Tactile Slider Track (Clickable Toggle) -->
  <div class="hw-slider-track w-full h-14 rounded-2xl bg-[#543b0d] dark:bg-[#543b0d] p-1 flex items-center relative cursor-pointer select-none border border-[#F59E0B]/30 transition-colors duration-200" onclick="Playground.toggleHardwareSlider(this)">
    <div class="hw-slider-thumb w-1/2 h-full rounded-xl bg-[#F59E0B] shadow-md flex items-center justify-center text-white ml-auto transition-all duration-200 active:scale-[0.98]">
      <i class="ph ph-power text-2xl"></i>
    </div>
  </div>
</div>
      `
    },
    {
      title: 'Hardware Press Trigger Tile',
      badge: 'Action Tile',
      tags: ['reboot', 'press', 'hardware', 'action', 'tile'],
      note: 'Hardware telemetry tile with full-width tactile press button.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3.5 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="w-11 h-11 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-xl shrink-0">
      <i class="ph ph-arrow-clockwise"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-sm font-semibold text-luxury-primary leading-tight">Reboot Node</span>
      <span class="text-xs text-luxury-secondary">Online &bull; Ready</span>
    </div>
  </div>

  <!-- Large Tactile Press Pad -->
  <button onclick="Playground.toast('Reboot sequence initiated', 'ph-arrow-clockwise')" class="w-full py-3 rounded-2xl bg-surface-elevated hover:bg-surface-hover text-luxury-primary font-medium text-sm border border-luxury-border transition-all duration-200 active:scale-[0.97] shadow-sm flex items-center justify-center">
    Press
  </button>
</div>
      `
    },
    {
      title: 'WAN Telemetry Tile (Speed Gauges)',
      badge: 'Metrics Tile',
      tags: ['wan', 'speed', 'telemetry', 'network', 'gauge'],
      note: 'Circular speed gauge tile with stacked label and transfer rate.',
      html: `
<div class="grid grid-cols-2 gap-2.5 w-full">
  <div class="p-3.5 rounded-2xl bg-surface-card border border-luxury-border flex items-center gap-3 shadow-sm">
    <div class="w-10 h-10 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-lg shrink-0">
      <i class="ph ph-gauge"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs text-luxury-secondary leading-tight">Down</span>
      <span class="text-xs font-mono font-semibold text-luxury-primary truncate mt-0.5">148.4 Mbit/s</span>
    </div>
  </div>

  <div class="p-3.5 rounded-2xl bg-surface-card border border-luxury-border flex items-center gap-3 shadow-sm">
    <div class="w-10 h-10 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-lg shrink-0">
      <i class="ph ph-gauge"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs text-luxury-secondary leading-tight">Up</span>
      <span class="text-xs font-mono font-semibold text-luxury-primary truncate mt-0.5">42.1 Mbit/s</span>
    </div>
  </div>
</div>
      `
    },
    {
      title: 'Giant Vertical Capsule Slider & Palette',
      badge: 'Physical UI',
      tags: ['capsule', 'slider', 'smart-home', 'level', 'swatches'],
      note: 'Full vertical light controller with 75% level, control dock, and 8 color swatches.',
      html: `
<div class="flex flex-col items-center gap-3.5 py-1 w-full max-w-[220px] mx-auto">
  <div class="text-center">
    <div class="font-display font-extrabold text-2xl sm:text-3xl text-luxury-primary tracking-tight">75%</div>
    <div class="text-[11px] font-medium text-luxury-secondary">Now</div>
  </div>

  <!-- Giant Vertical Capsule Slider -->
  <div class="relative w-24 h-52 rounded-[32px] bg-surface-elevated border border-luxury-border overflow-hidden flex flex-col justify-end p-2 shadow-inner">
    <div class="w-full bg-[#65A30D] dark:bg-[#84CC16] rounded-[24px] flex items-start justify-center pt-2.5 transition-all duration-300" style="height: 75%">
      <!-- Inset Drag Notch Handle -->
      <span class="w-8 h-1.5 rounded-full bg-white/95 shadow-sm"></span>
    </div>
  </div>

  <!-- Micro Control Dock -->
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

  <!-- 8 Circular Color Preset Swatches -->
  <div class="grid grid-cols-4 gap-2.5 pt-1">
    <button class="w-7 h-7 rounded-full bg-[#EA580C] ring-2 ring-white/20 transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#F59E0B] transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#FED7AA] transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#FFFFFF] transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#818CF8] transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#C084FC] transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#F472B6] transition-transform active:scale-95 shadow-sm"></button>
    <button class="w-7 h-7 rounded-full bg-[#EF4444] transition-transform active:scale-95 shadow-sm"></button>
  </div>
</div>
      `
    }
  ];

  window.Playground.register('hardware', categoryMeta, components);
})();
