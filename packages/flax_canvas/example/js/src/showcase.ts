import type {} from '@flax/canvas/globals';
import type {} from '@flax/core/host';
import { CanvasView, type ImageBitmap } from '@flax/canvas';
import {
  action,
  exampleColors,
  exampleKey,
  examplePage,
  section,
  text,
} from '@flax/example-core/ui';
import {
  Alignment,
  BorderRadius,
  BoxDecoration,
  EdgeInsets,
} from '@flax/flutter/painting';
import {
  Align,
  Column,
  Container,
  CrossAxisAlignment,
  GestureDetector,
  HitTestBehavior,
  LayoutBuilder,
  Semantics,
  SizedBox,
  State,
  StatefulWidget,
  Wrap,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';

import { Afterglow, width, height, palettes, compositions } from './drawing';

export function createCanvasExample(): Widget {
  return new CanvasExample();
}

class CanvasExample extends StatefulWidget {
  createState(): State<CanvasExample> {
    return new CanvasState();
  }
}

class CanvasState extends State<CanvasExample> {
  readonly scene = new Afterglow();
  readonly postcard = new OffscreenCanvas(330, 180);
  playing = false;
  frame: number | undefined;
  lastTime: number | undefined;
  status = 'Bloom · Aurora · ready to shape';
  captureStatus = 'A small keepsake of this moment.';
  capturing = false;
  captured = false;
  captureId = 0;

  initState(): void {
    super.initState();
    this.scene.draw();
  }

  update(change: () => void): void {
    this.setState(() => {
      change();
      this.status = `${compositions[this.scene.composition]} · ${palettes[this.scene.palette]!.name} · ${this.scene.dreamy ? 'soft glow' : 'crisp light'}`;
    });
    this.scene.draw();
  }

  tick = (time: number): void => {
    this.frame = undefined;
    if (!this.mounted || !this.playing) return;
    if (this.lastTime !== undefined)
      this.scene.phase += Math.min(time - this.lastTime, 50) / 1000;
    this.lastTime = time;
    this.scene.draw();
    this.frame = requestAnimationFrame(this.tick);
  };

  stop(): void {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.frame = undefined;
    this.lastTime = undefined;
    this.playing = false;
  }

  async capture(): Promise<void> {
    if (this.capturing) return;
    const id = ++this.captureId;
    this.setState(() => {
      this.capturing = true;
      this.captureStatus = 'Developing your postcard…';
    });
    let image: ImageBitmap | undefined;
    try {
      const blob = await this.scene.canvas.convertToBlob({ type: 'image/png' });
      const bytes = await blob.arrayBuffer();
      image = await createImageBitmap(blob, {
        resizeWidth: 330,
        resizeHeight: 180,
        resizeQuality: 'high',
      });
      if (!this.mounted || id !== this.captureId) return;
      const ctx = this.postcard.getContext('2d')!;
      ctx.reset();
      ctx.drawImage(image, 0, 0);
      this.setState(() => {
        this.captured = true;
        this.captureStatus = `PNG captured · ${Math.ceil(bytes.byteLength / 1024)} KB · 880 × 480`;
      });
    } catch (error) {
      if (this.mounted && id === this.captureId)
        this.setState(() => {
          this.captureStatus = `Capture failed: ${String(error)}`;
        });
    } finally {
      image?.close();
      if (this.mounted && id === this.captureId)
        this.setState(() => {
          this.capturing = false;
        });
    }
  }

  reset(): void {
    this.stop();
    this.captureId++;
    this.setState(() => {
      this.scene.reset();
      this.status = 'Bloom · Aurora · crisp light';
      this.capturing = false;
      this.captured = false;
      this.captureStatus = 'A small keepsake of this moment.';
      this.postcard.getContext('2d')!.reset();
    });
  }

  build(_context: BuildContext): Widget {
    return examplePage(
      'Canvas 2D / Afterglow studio',
      'Make light linger.',
      'A living light sculpture. Shape it with a touch, set it in motion, and keep a moment.',
      [
        LayoutBuilder({
          builder: (_context, constraints) => {
            const viewWidth = constraints.maxWidth;
            return Semantics({
              label:
                'Light sculpture. Drag to move the light, or use Center light below.',
              child: GestureDetector({
                key: exampleKey('light-field'),
                behavior: HitTestBehavior.opaque,
                onTapDown: (event) =>
                  this.scene.reshape(
                    event.localPosition.dx,
                    event.localPosition.dy,
                    viewWidth,
                  ),
                onPanStart: (event) =>
                  this.scene.reshape(
                    event.localPosition.dx,
                    event.localPosition.dy,
                    viewWidth,
                  ),
                onPanUpdate: (event) =>
                  this.scene.reshape(
                    event.localPosition.dx,
                    event.localPosition.dy,
                    viewWidth,
                  ),
                onPanEnd: () =>
                  this.setState(() => {
                    this.status = 'Light moved · your composition';
                  }),
                child: CanvasView(this.scene.canvas, {
                  width: viewWidth,
                  height: (viewWidth * height) / width,
                }),
              }),
            });
          },
        }),
        SizedBox({ height: 18 }),
        Wrap({
          spacing: 10,
          runSpacing: 10,
          children: [
            action(
              this.playing ? 'Pause motion' : 'Play motion',
              () => {
                this.setState(() => {
                  if (this.playing) this.stop();
                  else {
                    this.playing = true;
                    this.frame = requestAnimationFrame(this.tick);
                  }
                });
              },
              'motion',
            ),
            action('Center light', () =>
              this.update(() => {
                this.scene.center = { x: 440, y: 254 };
              }),
            ),
            action('Reset studio', () => this.reset()),
          ],
        }),
        SizedBox({ height: 14 }),
        text(this.status, 13),
        SizedBox({ height: 26 }),
        section(
          '01 / Shape the atmosphere',
          'Three compositions, three color stories. Every combination is yours.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              text('COMPOSITION', 11),
              SizedBox({ height: 10 }),
              Wrap({
                spacing: 10,
                runSpacing: 10,
                children: compositions.map((name, index) =>
                  action(
                    `${this.scene.composition === index ? '● ' : ''}${name}`,
                    () =>
                      this.update(() => {
                        this.scene.composition = index;
                      }),
                    `composition-${index}`,
                  ),
                ),
              }),
              SizedBox({ height: 22 }),
              text('COLOR & FINISH', 11),
              SizedBox({ height: 10 }),
              Wrap({
                spacing: 10,
                runSpacing: 10,
                children: [
                  ...palettes.map(({ name }, index) =>
                    action(
                      `${this.scene.palette === index ? '● ' : ''}${name}`,
                      () =>
                        this.update(() => {
                          this.scene.palette = index;
                        }),
                      `palette-${index}`,
                    ),
                  ),
                  action(
                    this.scene.dreamy ? 'Soft glow: on' : 'Soft glow: off',
                    () =>
                      this.update(() => {
                        this.scene.dreamy = !this.scene.dreamy;
                      }),
                    'soft-glow',
                  ),
                ],
              }),
            ],
          }),
        ),
        section(
          '02 / Keep a little light',
          'Capture a PNG postcard. Your keepsake stays still while the sculpture keeps moving.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              action(
                this.capturing ? 'Capturing…' : 'Capture postcard',
                () => {
                  void this.capture();
                },
                'capture',
              ),
              SizedBox({ height: 16 }),
              postcardPreview(this.captured, this.postcard),
              SizedBox({ height: 12 }),
              text(this.captureStatus, 13),
            ],
          }),
        ),
      ],
    );
  }

  dispose(): void {
    this.stop();
    this.captureId++;
    this.scene.dispose();
    super.dispose();
  }
}

function postcardPreview(captured: boolean, postcard: OffscreenCanvas): Widget {
  return LayoutBuilder({
    builder: (_context, constraints) => {
      const cardWidth = Math.min(330, constraints.maxWidth);
      return Align({
        alignment: Alignment.centerLeft,
        child: captured
          ? CanvasView(postcard, {
              key: exampleKey('postcard'),
              width: cardWidth,
              height: (cardWidth * 180) / 330,
            })
          : Container({
              width: cardWidth,
              padding: EdgeInsets.all(24),
              decoration: BoxDecoration({
                color: exampleColors.background,
                borderRadius: BorderRadius.circular(14),
              }),
              child: text('A moment, waiting to be kept.', 15),
            }),
      });
    },
  });
}
