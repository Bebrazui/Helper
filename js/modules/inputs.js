/**
 * Module: Form Controls & Inputs
 * Refined inputs, minimal borders, custom toggles, sliders, radio cards, and PIN inputs.
 * Full dark/light dynamic theme adaptation.
 */

(function() {
  const categoryMeta = {
    title: 'Form Controls & Inputs',
    icon: 'ph-textbox',
    description: 'Precision search inputs, quiet luxury toggles, range sliders, PIN cells, and radio cards.'
  };

  const components = [
    {
      title: 'Command Search Bar',
      badge: 'Interactive',
      tags: ['input', 'search', 'command', 'palette'],
      note: 'Adaptive input with inline shortcut badge.',
      html: `
<div class="relative w-full max-w-sm">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-luxury-secondary">
    <i class="ph ph-magnifying-glass text-base"></i>
  </div>
  <input type="text" placeholder="Search parameters, nodes..." class="w-full pl-9 pr-14 py-2 bg-surface-input border border-luxury-border rounded-xl text-xs text-luxury-primary placeholder-luxury-muted focus:outline-none focus:border-accent-peach transition-colors duration-200" />
  <div class="absolute inset-y-0 right-0 pr-2.5 flex items-center">
    <kbd class="px-1.5 py-0.5 text-[10px] font-mono text-luxury-secondary bg-surface-elevated border border-luxury-border rounded-md">⌘K</kbd>
  </div>
</div>
      `
    },
    {
      title: 'Quiet Luxury Toggle',
      badge: 'Micro-interaction',
      tags: ['switch', 'toggle', 'control'],
      note: 'Soft tactile toggle with subtle warm peach active state.',
      html: `
<div class="flex items-center justify-between w-full max-w-xs px-3.5 py-2.5 rounded-xl bg-surface-card border border-luxury-border shadow-sm">
  <div class="flex flex-col">
    <span class="text-xs font-medium text-luxury-primary">Telemetry Stream</span>
    <span class="text-[10px] text-luxury-secondary">Sub-millisecond trace logging</span>
  </div>
  <div class="switch-track active" role="button" tabindex="0">
    <div class="switch-thumb"></div>
  </div>
</div>
      `
    },
    {
      title: 'Precision Range Slider',
      badge: 'Control',
      tags: ['slider', 'range', 'audio'],
      note: 'Minimal slider with custom accent track and value indicator.',
      html: `
<div class="w-full max-w-xs space-y-2">
  <div class="flex justify-between items-center text-xs">
    <span class="text-luxury-secondary">Output Saturation</span>
    <span class="font-mono text-luxury-primary font-medium">68%</span>
  </div>
  <input type="range" min="0" max="100" value="68" class="w-full h-1.5 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-accent-peach" />
</div>
      `
    },
    {
      title: 'Radio Surface Cards',
      badge: 'Selection',
      tags: ['radio', 'selector', 'card'],
      note: 'Border-subtle selectable option card with radio dot indicator.',
      html: `
<div class="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-2.5 w-full">
  <div class="p-2.5 sm:p-3 rounded-xl bg-surface-elevated border border-accent-peach/50 cursor-pointer relative shadow-sm">
    <div class="flex items-center justify-between mb-1">
      <span class="text-xs font-medium text-luxury-primary">Standard</span>
      <div class="w-3.5 h-3.5 rounded-full border-2 border-accent-peach flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full bg-accent-peach"></div>
      </div>
    </div>
    <p class="text-[10px] text-luxury-secondary">Optimized for speed</p>
  </div>
  <div class="p-2.5 sm:p-3 rounded-xl bg-surface-input border border-luxury-border hover:bg-surface-elevated cursor-pointer transition-colors duration-200">
    <div class="flex items-center justify-between mb-1">
      <span class="text-xs font-medium text-luxury-primary">Extreme</span>
      <div class="w-3.5 h-3.5 rounded-full border border-luxury-border"></div>
    </div>
    <p class="text-[10px] text-luxury-secondary">Maximum fidelity</p>
  </div>
</div>
      `
    },
    {
      title: 'Currency / Value Stepper',
      badge: 'Numeric',
      tags: ['input', 'number', 'stepper'],
      note: 'Prefix unit with dedicated increment & decrement touch targets.',
      html: `
<div class="flex items-center rounded-xl bg-surface-input border border-luxury-border p-1 w-full max-w-xs shadow-sm">
  <span class="pl-2 text-xs font-mono text-luxury-secondary">$</span>
  <input type="text" value="1,240.00" class="w-full bg-transparent px-2 text-xs font-mono text-luxury-primary focus:outline-none" />
  <div class="flex items-center gap-0.5">
    <button class="w-6 h-6 rounded-lg bg-surface-elevated hover:bg-surface-hover text-luxury-primary flex items-center justify-center text-xs transition-colors">
      <i class="ph ph-minus"></i>
    </button>
    <button class="w-6 h-6 rounded-lg bg-surface-elevated hover:bg-surface-hover text-luxury-primary flex items-center justify-center text-xs transition-colors">
      <i class="ph ph-plus"></i>
    </button>
  </div>
</div>
      `
    },
    {
      title: 'Dropdown Select Trigger',
      badge: 'Dropdown',
      tags: ['select', 'dropdown', 'trigger'],
      note: 'Luxury select anchor with trailing chevron indicator.',
      html: `
<button class="w-full max-w-xs flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface-input border border-luxury-border hover:border-luxury-muted text-xs text-luxury-primary transition-all duration-200">
  <div class="flex items-center gap-2">
    <div class="w-2 h-2 rounded-full bg-accent-emerald"></div>
    <span>US-East (Virginia)</span>
  </div>
  <i class="ph ph-caret-down text-luxury-secondary"></i>
</button>
      `
    },
    {
      title: 'Security PIN / OTP Cells',
      badge: 'Security',
      tags: ['input', 'pin', 'otp', 'code'],
      note: 'Monospace high-precision 4-digit code cells.',
      html: `
<div class="flex items-center gap-1.5 sm:gap-2 justify-center">
  <input type="text" maxlength="1" value="4" class="w-8 sm:w-10 h-10 sm:h-11 text-center font-mono text-sm font-semibold rounded-xl bg-surface-input border border-luxury-border text-luxury-primary focus:border-accent-peach focus:outline-none" />
  <input type="text" maxlength="1" value="9" class="w-8 sm:w-10 h-10 sm:h-11 text-center font-mono text-sm font-semibold rounded-xl bg-surface-input border border-luxury-border text-luxury-primary focus:border-accent-peach focus:outline-none" />
  <input type="text" maxlength="1" value="1" class="w-8 sm:w-10 h-10 sm:h-11 text-center font-mono text-sm font-semibold rounded-xl bg-surface-input border border-luxury-border text-luxury-primary focus:border-accent-peach focus:outline-none" />
  <input type="text" maxlength="1" placeholder="•" class="w-8 sm:w-10 h-10 sm:h-11 text-center font-mono text-sm font-semibold rounded-xl bg-surface-input border border-luxury-border text-luxury-primary focus:border-accent-peach focus:outline-none" />
</div>
      `
    },
    {
      title: 'Segmented Allocation Stepper',
      badge: 'Segmented',
      tags: ['stepper', 'percentage', 'pills'],
      note: 'Quick percentage allocation pill triggers.',
      html: `
<div class="inline-flex items-center p-1 rounded-xl bg-surface-input border border-luxury-border text-xs">
  <button class="px-2.5 py-1 rounded-lg hover:bg-surface-elevated text-luxury-secondary hover:text-luxury-primary">25%</button>
  <button class="px-2.5 py-1 rounded-lg bg-surface-elevated text-luxury-primary font-medium shadow-sm">50%</button>
  <button class="px-2.5 py-1 rounded-lg hover:bg-surface-elevated text-luxury-secondary hover:text-luxury-primary">75%</button>
  <button class="px-2.5 py-1 rounded-lg hover:bg-surface-elevated text-luxury-secondary hover:text-luxury-primary">MAX</button>
</div>
      `
    }
  ];

  window.Playground.register('inputs', categoryMeta, components);
})();
