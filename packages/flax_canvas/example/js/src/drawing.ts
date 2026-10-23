import type {} from '@flax/canvas/globals';
import type { ImageBitmap } from '@flax/canvas';

export const width = 880;
export const height = 480;
const tau = Math.PI * 2;
export const palettes = [
  { name: 'Aurora', colors: ['#64f4ce', '#8c91ff', '#ffadcf'] },
  { name: 'Ember', colors: ['#ffc775', '#ff7c7c', '#d2a1ff'] },
  { name: 'Tidal', colors: ['#95deff', '#339fdf', '#b8ffdf'] },
] as const;
export const compositions = ['Bloom', 'Orbit', 'Weave'] as const;

// Both hosts use this exact Canvas implementation; only presentation and input differ.
export class Afterglow {
  readonly ctx: OffscreenCanvasRenderingContext2D;
  readonly star = new Path2D(
    'M 0 -12 Q 2 -2 12 0 Q 2 2 0 12 Q -2 2 -12 0 Q -2 -2 0 -12 Z',
  );
  sparkle!: ImageBitmap;
  palette = 0;
  composition = 0;
  dreamy = false;
  phase = 0;
  center = { x: 440, y: 254 };

  constructor(readonly canvas = new OffscreenCanvas(width, height)) {
    this.ctx = canvas.getContext('2d')!;
    const sprite = new OffscreenCanvas(40, 40);
    const brush = sprite.getContext('2d')!;
    brush.translate(20, 20);
    brush.fillStyle = '#e5fff8';
    brush.shadowColor = '#93ffe2';
    brush.shadowBlur = 8;
    brush.fill(this.star);
    this.sparkle = sprite.transferToImageBitmap();
  }

  draw(): void {
    const ctx = this.ctx;
    const colors = palettes[this.palette]!.colors;
    const { x, y } = this.center;
    ctx.reset();
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, 22);
    ctx.clip();
    const background = ctx.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, '#102e37');
    background.addColorStop(0.55, '#131d34');
    background.addColorStop(1, '#271f3c');
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#ffffff09';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let gx = 32; gx < width; gx += 32) {
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, height);
    }
    for (let gy = 32; gy < height; gy += 32) {
      ctx.moveTo(0, gy);
      ctx.lineTo(width, gy);
    }
    ctx.stroke();

    const halo = ctx.createRadialGradient(x, y, 8, x, y, 290);
    halo.addColorStop(0, `${colors[0]}30`);
    halo.addColorStop(1, `${colors[0]}00`);
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.filter = this.dreamy ? 'blur(1.8px) saturate(140%)' : 'none';
    ctx.translate(x, y);
    const ink = ctx.createLinearGradient(-170, -160, 180, 180);
    ink.addColorStop(0, colors[0]);
    ink.addColorStop(0.48, colors[1]);
    ink.addColorStop(1, colors[2]);
    ctx.strokeStyle = ink;
    ctx.fillStyle = ink;
    ctx.lineWidth = 1.3;
    if (this.composition === 0) {
      for (let i = 0; i < 36; i++) {
        ctx.save();
        ctx.rotate((i / 36) * tau + this.phase * 0.16);
        const reach = 144 + 34 * Math.sin(i * 0.7 + this.phase);
        ctx.beginPath();
        ctx.moveTo(0, 16);
        ctx.bezierCurveTo(-102, -35, -56, -reach, 0, -reach);
        ctx.bezierCurveTo(56, -reach, 102, -35, 0, 16);
        ctx.globalAlpha = 0.045;
        ctx.fill();
        ctx.globalAlpha = 0.48;
        ctx.stroke();
        ctx.restore();
      }
    } else if (this.composition === 1) {
      for (let i = 0; i < 28; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 190, 28 + i * 3.3, i * 0.11 + this.phase * 0.12, 0, tau);
        ctx.globalAlpha = 0.42;
        ctx.stroke();
      }
    } else {
      for (let i = 0; i < 55; i++) {
        const offset = (i - 27) * 6;
        ctx.beginPath();
        ctx.moveTo(-x, offset * 0.42);
        ctx.bezierCurveTo(
          -110,
          offset - 160 * Math.sin(this.phase * 0.5 + i * 0.025),
          110,
          offset + 140,
          width - x,
          offset * 0.42,
        );
        ctx.globalAlpha = 0.55;
        ctx.stroke();
      }
    }
    ctx.restore();

    // Reuse one ImageBitmap for every mote; animation does no pixel readback.
    for (let i = 0; i < 22; i++) {
      const angle = i * 2.39996 + this.phase * 0.05;
      const radius = 66 + ((i * 37) % 215);
      const size = i % 5 === 0 ? 21 : 9;
      ctx.globalAlpha = 0.3 + (i % 4) * 0.15;
      ctx.drawImage(
        this.sparkle,
        x + Math.cos(angle) * radius - size / 2,
        y + Math.sin(angle) * radius * 0.7 - size / 2,
        size,
        size,
      );
    }
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(x, y);
    ctx.shadowColor = colors[0];
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#ffffff';
    ctx.scale(0.5, 0.5);
    ctx.fill(this.star);
    ctx.restore();
    ctx.setLineDash([2, 5]);
    ctx.strokeStyle = '#ffffff75';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, tau);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#effff9';
    ctx.font = '600 15px sans-serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('A F T E R G L O W', 30, 40);
    ctx.letterSpacing = '0px';
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#b2c5d1';
    const edition = `0${this.composition + 1} / ${compositions[this.composition]!.toUpperCase()}`;
    ctx.textAlign = 'right';
    ctx.fillText(edition, width - 30, 40);
    ctx.textAlign = 'left';
    ctx.fillText('DRAG THE LIGHT. FIND YOUR OWN FORM.', 30, height - 28);
    ctx.textAlign = 'right';
    ctx.fillText(
      `${palettes[this.palette]!.name.toUpperCase()} / ${this.dreamy ? 'SOFT' : 'CRISP'}`,
      width - 30,
      height - 28,
    );
    ctx.restore();
  }

  reshape(dx: number, dy: number, viewWidth: number): void {
    this.center = {
      x: Math.max(50, Math.min(width - 50, (dx * width) / viewWidth)),
      y: Math.max(70, Math.min(height - 65, (dy * width) / viewWidth)),
    };
    this.draw();
  }

  reset(): void {
    this.phase = 0;
    this.palette = 0;
    this.composition = 0;
    this.dreamy = false;
    this.center = { x: 440, y: 254 };
    this.draw();
  }

  dispose(): void {
    this.sparkle.close();
  }
}
