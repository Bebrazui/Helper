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
      note: 'Chunky physical hardware slider with 50% width amber thumb and power glyph. Drag or tap to toggle.',
      html: `
<div class="w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3.5 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-[#DF930D] text-white flex items-center justify-center text-xl shrink-0 shadow-sm">
      <i class="ph ph-wifi-high"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-sm font-semibold text-luxury-primary leading-tight">2.4GHz Radio</span>
      <span class="text-xs text-luxury-secondary hw-radio-status">On</span>
    </div>
  </div>

  <!-- Long Tactile Slider Track (Touch/Drag & Tap Toggle) -->
  <div class="hw-slider-track w-full h-14 rounded-2xl p-1 relative cursor-pointer select-none border transition-all duration-300 overflow-hidden touch-none" 
       style="background-color: #8B5E0D; border-color: rgba(245, 166, 35, 0.4);"
       onclick="Playground.toggleHardwareSlider(this)">
    <div class="hw-slider-thumb h-full rounded-xl shadow-md flex items-center justify-center text-white transition-transform duration-300 ease-out select-none" 
         style="width: 50%; min-width: 50%; transform: translateX(100%); background-color: #F5A623;">
      <i class="ph ph-power text-2xl font-bold pointer-events-none"></i>
    </div>
  </div>
</div>
      `
    },
    {
      title: 'Hardware Press Trigger Tile (Reboot Node)',
      badge: 'Action Tile',
      tags: ['reboot', 'press', 'hardware', 'action', 'tile'],
      note: 'Physical trigger pad. Locks button with countdown and spins status arrow.',
      html: `
<div class="hw-reboot-card w-full bg-surface-card border border-luxury-border rounded-2xl p-4 space-y-3.5 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="hw-reboot-icon-wrap w-11 h-11 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-xl shrink-0 transition-all duration-300">
      <i class="ph ph-arrow-clockwise hw-reboot-icon text-lg"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-sm font-semibold text-luxury-primary leading-tight">Reboot Node</span>
      <span class="text-xs text-luxury-secondary hw-reboot-status">Online &bull; Ready</span>
    </div>
  </div>

  <!-- Large Tactile Press Pad -->
  <button onclick="Playground.triggerReboot(this)" class="hw-reboot-btn w-full py-3 rounded-2xl bg-surface-elevated hover:bg-surface-hover text-luxury-primary font-medium text-sm border border-luxury-border transition-all duration-200 active:scale-[0.97] shadow-sm flex items-center justify-center">
    Press
  </button>
</div>
      `
    },
    {
      title: 'WAN Telemetry Tile (Speed Gauges)',
      badge: 'Metrics Tile',
      tags: ['wan', 'speed', 'telemetry', 'network', 'gauge'],
      note: 'Dynamic telemetry twins. Tap to execute real-time broadband speed test.',
      html: `
<div class="hw-wan-widget grid grid-cols-2 gap-2.5 w-full cursor-pointer select-none" onclick="Playground.runSpeedTest(this)" title="Tap to execute speed test">
  <div class="p-3.5 rounded-2xl bg-surface-card border border-luxury-border flex items-center gap-3 shadow-sm hover:border-luxury-muted transition-colors">
    <div class="hw-wan-down-icon w-10 h-10 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-lg shrink-0 transition-transform">
      <i class="ph ph-gauge"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs text-luxury-secondary leading-tight">Down</span>
      <span class="hw-wan-down text-xs font-mono font-semibold text-luxury-primary truncate mt-0.5">148.4 Mbit/s</span>
    </div>
  </div>

  <div class="p-3.5 rounded-2xl bg-surface-card border border-luxury-border flex items-center gap-3 shadow-sm hover:border-luxury-muted transition-colors">
    <div class="hw-wan-up-icon w-10 h-10 rounded-full bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-lg shrink-0 transition-transform">
      <i class="ph ph-gauge"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs text-luxury-secondary leading-tight">Up</span>
      <span class="hw-wan-up text-xs font-mono font-semibold text-luxury-primary truncate mt-0.5">42.1 Mbit/s</span>
    </div>
  </div>
</div>
      `
    },
    {
      title: 'Giant Vertical Capsule Slider & Palette',
      badge: 'Physical UI',
      tags: ['capsule', 'slider', 'smart-home', 'level', 'swatches'],
      note: 'Draggable fluid capsule slider (touch/mouse). Tap swatches to change hue.',
      html: `
<div class="hw-capsule-widget flex flex-col items-center gap-3.5 py-1 w-full max-w-[220px] mx-auto select-none">
  <div class="text-center">
    <div class="hw-capsule-val font-display font-extrabold text-2xl sm:text-3xl text-luxury-primary tracking-tight">75%</div>
    <div class="hw-capsule-lbl text-[11px] font-medium text-luxury-secondary">Now</div>
  </div>

  <!-- Giant Vertical Capsule Slider (Drag or Tap anywhere) -->
  <div class="hw-capsule-track relative w-24 h-52 rounded-[32px] bg-surface-elevated border border-luxury-border overflow-hidden flex flex-col justify-end p-2 shadow-inner cursor-pointer touch-none select-none">
    <div class="hw-capsule-fill w-full bg-[#84CC16] rounded-[24px] flex items-start justify-center pt-2.5 transition-all duration-75 pointer-events-none shadow-md" style="height: 75%">
      <!-- Inset Drag Notch Handle -->
      <span class="w-8 h-1.5 rounded-full bg-white/95 shadow-sm"></span>
    </div>
  </div>

  <!-- Micro Control Dock -->
  <div class="inline-flex items-center gap-2 p-1.5 rounded-full bg-surface-card border border-luxury-border shadow-sm">
    <button onclick="Playground.toggleCapsulePower(this)" class="w-7 h-7 rounded-full bg-surface-elevated hover:bg-surface-hover text-luxury-secondary hover:text-luxury-primary flex items-center justify-center text-xs transition-colors" title="Toggle Power">
      <i class="ph ph-power"></i>
    </button>
    <button onclick="Playground.cycleCapsuleBrightness(this)" class="w-7 h-7 rounded-full bg-surface-elevated hover:bg-surface-hover text-luxury-primary flex items-center justify-center text-xs shadow-sm transition-colors" title="Cycle Brightness (25% &bull; 50% &bull; 75% &bull; 100%)">
      <i class="ph ph-sun-dim"></i>
    </button>
    <button onclick="Playground.cycleCapsuleColor(this)" class="w-7 h-7 rounded-full bg-surface-elevated hover:bg-surface-hover text-accent-peach flex items-center justify-center text-xs transition-colors" title="Cycle Color Scene">
      <i class="ph ph-palette"></i>
    </button>
  </div>

  <!-- 8 Circular Color Preset Swatches -->
  <div class="hw-swatches-grid grid grid-cols-4 gap-2.5 pt-1">
    <button onclick="Playground.setCapsuleColor('#84CC16', this)" class="w-7 h-7 rounded-full bg-[#84CC16] ring-2 ring-white ring-offset-2 ring-offset-surface-card transition-all active:scale-90 shadow-sm" title="Studio Lime"></button>
    <button onclick="Playground.setCapsuleColor('#EA580C', this)" class="w-7 h-7 rounded-full bg-[#EA580C] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Warm Sunset"></button>
    <button onclick="Playground.setCapsuleColor('#F59E0B', this)" class="w-7 h-7 rounded-full bg-[#F59E0B] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Golden Amber"></button>
    <button onclick="Playground.setCapsuleColor('#FED7AA', this)" class="w-7 h-7 rounded-full bg-[#FED7AA] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Warm White"></button>
    <button onclick="Playground.setCapsuleColor('#FFFFFF', this)" class="w-7 h-7 rounded-full bg-[#FFFFFF] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Pure White"></button>
    <button onclick="Playground.setCapsuleColor('#818CF8', this)" class="w-7 h-7 rounded-full bg-[#818CF8] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Deep Indigo"></button>
    <button onclick="Playground.setCapsuleColor('#C084FC', this)" class="w-7 h-7 rounded-full bg-[#C084FC] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Soft Violet"></button>
    <button onclick="Playground.setCapsuleColor('#EF4444', this)" class="w-7 h-7 rounded-full bg-[#EF4444] ring-2 ring-transparent transition-all active:scale-90 shadow-sm" title="Crimson"></button>
  </div>
</div>
      `
    },
    {
      title: 'Smart Hub Telemetry Pair',
      badge: 'Hub Metrics',
      tags: ['devices', 'memory', 'hub', 'hardware', 'telemetry'],
      note: 'Paired telemetry tiles for active devices count and memory allocation.',
      html: `
<div class="grid grid-cols-2 gap-2.5 w-full select-none">
  <div class="p-3.5 rounded-2xl bg-surface-card border border-luxury-border flex items-center gap-3 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-lg shrink-0">
      <i class="ph ph-devices"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs text-luxury-secondary leading-tight truncate">Devices On-line</span>
      <span class="text-xs font-mono font-semibold text-luxury-primary mt-0.5">8 pcs</span>
    </div>
  </div>

  <div class="p-3.5 rounded-2xl bg-surface-card border border-luxury-border flex items-center gap-3 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center text-lg shrink-0">
      <i class="ph ph-cpu"></i>
    </div>
    <div class="flex flex-col min-w-0">
      <span class="text-xs text-luxury-secondary leading-tight truncate">Memory Usage</span>
      <span class="text-xs font-mono font-semibold text-luxury-primary mt-0.5">53%</span>
    </div>
  </div>
</div>
      `
    }
  ];

  window.Playground.register('hardware', categoryMeta, components);
})();
