/**
 * Module: Motion Physics & Animation Code
 * Interactive easing curve visualizers, tactile physics triggers, and copyable CSS tokens.
 * Enforces quiet luxury: cubic-bezier(0.16, 1, 0.3, 1), no bouncing, no jumping.
 */

(function() {
  const categoryMeta = {
    title: 'Motion & Animation Code',
    icon: 'ph-waveform',
    description: 'Physics easing tokens, cubic-bezier curves, tactile press feedback, and ready-to-copy CSS animations.'
  };

  const components = [
    {
      title: 'Interactive Easing Physics Lab',
      badge: 'Interactive Lab',
      tags: ['animation', 'easing', 'physics', 'cubic-bezier', 'curve', 'motion'],
      note: 'Live motion physics comparison. Tap Play to see how Quiet Luxury curve settles vs linear.',
      html: `
<div class="w-full space-y-3.5 select-none motion-lab-widget">
  <div class="space-y-2.5">
    <!-- Runner 1: Linear -->
    <div class="space-y-1">
      <div class="flex justify-between text-[11px] font-mono text-luxury-secondary">
        <span>Linear (Mechanical)</span>
        <span class="text-luxury-muted">linear</span>
      </div>
      <div class="w-full h-7 bg-surface-elevated rounded-lg p-1 relative overflow-hidden border border-luxury-border">
        <div class="motion-pill-linear w-10 h-full rounded-md bg-surface-hover border border-luxury-border flex items-center justify-center text-[10px] font-mono text-luxury-muted transition-transform duration-700 ease-linear">
          1.0
        </div>
      </div>
    </div>

    <!-- Runner 2: Standard Ease-Out -->
    <div class="space-y-1">
      <div class="flex justify-between text-[11px] font-mono text-luxury-secondary">
        <span>Standard Web (ease-out)</span>
        <span class="text-luxury-muted">ease-out</span>
      </div>
      <div class="w-full h-7 bg-surface-elevated rounded-lg p-1 relative overflow-hidden border border-luxury-border">
        <div class="motion-pill-easeout w-10 h-full rounded-md bg-surface-hover border border-luxury-border flex items-center justify-center text-[10px] font-mono text-luxury-muted transition-transform duration-700 ease-out">
          std
        </div>
      </div>
    </div>

    <!-- Runner 3: Quiet Luxury Easing -->
    <div class="space-y-1">
      <div class="flex justify-between text-[11px] font-mono">
        <span class="text-accent-peach font-semibold">Quiet Luxury (0.16, 1, 0.3, 1)</span>
        <span class="text-accent-peach font-mono">--ease-luxury</span>
      </div>
      <div class="w-full h-8 bg-surface-card rounded-lg p-1 relative overflow-hidden border border-accent-peach/30 shadow-inner">
        <div class="motion-pill-luxury w-12 h-full rounded-md bg-accent-peach text-[#14100c] font-mono text-xs font-semibold flex items-center justify-center shadow-sm" style="transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);">
          lux
        </div>
      </div>
    </div>
  </div>

  <div class="pt-1 flex items-center justify-between">
    <button onclick="Playground.runMotionLab(this)" class="btn-luxury btn-luxury-primary text-xs py-1.5 px-3">
      <i class="ph ph-play text-sm"></i>
      <span>Trigger Motion Test</span>
    </button>
    <span class="text-[10px] font-mono text-luxury-muted">Duration: 700ms</span>
  </div>
</div>
      `
    },
    {
      title: 'Tactile Compression Spring Pad',
      badge: 'Micro-interaction',
      tags: ['tactile', 'press', 'active', 'scale', 'spring', 'button'],
      note: 'Subtle compression physics on press. Prevents bouncy rubber-banding.',
      html: `
<div class="w-full max-w-xs space-y-3 p-4 rounded-xl bg-surface-card border border-luxury-border">
  <div class="flex items-center justify-between text-xs text-luxury-secondary">
    <span>Tactile Physics</span>
    <span class="font-mono text-[10px] text-accent-peach">active:scale-[0.97]</span>
  </div>
  <button onclick="Playground.toast('Spring compression logged: 0.97 scale', 'ph-arrows-in-simple')" class="w-full py-3 rounded-xl bg-surface-elevated hover:bg-surface-hover text-luxury-primary font-medium text-xs border border-luxury-border shadow-sm flex items-center justify-center gap-2 select-none" style="transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1); active: transform 0.08s;" onpointerdown="this.style.transform='scale(0.96)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
    <i class="ph ph-hand-tap text-base text-accent-peach"></i>
    <span>Press &amp; Hold to Feel Compression</span>
  </button>
</div>
      `
    },
    {
      title: 'Hairline Border Hover Intensification',
      badge: 'Quiet Rule',
      tags: ['hover', 'border', 'hairline', 'anti-jump', 'luxury'],
      note: 'Hover response with ZERO physical displacement (no translateY) and no sudden shadows.',
      html: `
<div class="w-full p-4 rounded-2xl bg-surface-card border border-luxury-border hover:border-luxury-muted/70 transition-colors duration-200 cursor-pointer shadow-sm group">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-surface-elevated text-accent-peach flex items-center justify-center text-lg">
        <i class="ph ph-shield-check"></i>
      </div>
      <div>
        <h4 class="text-xs font-semibold text-luxury-primary leading-tight">Rock-Solid Elevation</h4>
        <p class="text-[11px] text-luxury-secondary">Borders intensify, container never jumps</p>
      </div>
    </div>
    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-luxury-muted group-hover:text-luxury-primary transition-colors">&Delta; border only</span>
  </div>
</div>
      `
    },
    {
      title: 'Serene Status Beacon (@keyframes)',
      badge: 'Ambient Pulse',
      tags: ['pulse', 'beacon', 'keyframes', 'telemetry', 'status'],
      note: 'Subtle 3-second breathing rhythm. Zero aggressive flashing rings.',
      html: `
<div class="flex items-center justify-between w-full p-3.5 rounded-xl bg-surface-card border border-luxury-border">
  <div class="flex items-center gap-2.5">
    <div class="relative flex items-center justify-center w-3 h-3">
      <span class="absolute w-2.5 h-2.5 rounded-full bg-accent-emerald/30 animate-ping"></span>
      <span class="relative w-2 h-2 rounded-full bg-accent-emerald"></span>
    </div>
    <span class="text-xs font-medium text-luxury-primary">Hardware Beacon Online</span>
  </div>
  <span class="text-[10px] font-mono text-luxury-secondary">3.0s gentle cycle</span>
</div>
      `
    },
    {
      title: 'CSS Tokens & Easing Code Snippet',
      badge: 'CSS Code',
      tags: ['css', 'tokens', 'code', 'snippet', 'cubic-bezier'],
      note: 'Copyable design system tokens for luxury easing and smooth transitions.',
      html: `
<div class="w-full p-3.5 rounded-xl bg-surface-input border border-luxury-border font-mono text-[11px] space-y-2 select-all">
  <div class="text-luxury-secondary">// Design System Motion Tokens</div>
  <div class="text-accent-peach">--ease-luxury: <span class="text-luxury-primary">cubic-bezier(0.16, 1, 0.3, 1);</span></div>
  <div class="text-accent-indigo">--duration-micro: <span class="text-luxury-primary">150ms;</span></div>
  <div class="text-accent-indigo">--duration-base: <span class="text-luxury-primary">250ms;</span></div>
  <div class="text-accent-emerald">transition: <span class="text-luxury-primary">all var(--duration-base) var(--ease-luxury);</span></div>
</div>
      `
    }
  ];

  window.Playground.register('animations', categoryMeta, components);
})();
