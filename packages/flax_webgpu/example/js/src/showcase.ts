import type {} from '@flax/core/host';
import { signal } from '@flax/core';
import { CanvasView } from '@flax/core/bindings';
import { action, exampleKey, examplePage, section, text } from '@flax/example-core/ui';
import { Alignment } from '@flax/flutter/painting';
import {
  Align,
  Column,
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
import {
  Studio,
  scenes,
  qualities,
  resolutions,
  palettes,
  benchmarkCases,
  type Telemetry,
  type BenchmarkResult,
  type Settings,
} from './studio.js';

declare global {
  var __studioSourceSha256: string;
  var __webGpuStudio:
    | { studio: Studio; benchmarkCase(index: number): Promise<BenchmarkResult> }
    | undefined;
  var __webGpuStudioReport: ((value: string) => void) | undefined;
  var __webGpuStudioCaptureDone: (() => void) | undefined;
}
export function createWebGpuExample(): Widget {
  return new WebGpuExample();
}
class WebGpuExample extends StatefulWidget {
  createState(): State<WebGpuExample> {
    return new WebGpuState();
  }
}
class WebGpuState extends State<WebGpuExample> {
  canvas = new OffscreenCanvas(960, 540);
  studio: Studio | undefined;
  telemetry: Telemetry | undefined;
  readonly statistics = signal('Paused · move the scene or press Play motion');
  message = 'Starting the GPU…';
  result = '';
  alive = true;
  generation = 0;
  initState() {
    super.initState();
    void this.start();
  }
  async start() {
    const generation = ++this.generation;
    this.studio?.close();
    this.studio = undefined;
    this.canvas = new OffscreenCanvas(960, 540);
    this.setState(() => {
      this.telemetry = undefined;
      this.message = 'Starting the GPU…';
      this.result = '';
    });
    try {
      const studio = await Studio.create(this.canvas, (value) => {
        if (!this.alive || generation !== this.generation) return;
        const previous = this.telemetry;
        this.telemetry = value;
        this.statistics.value = value.playing
          ? `${value.submittedFps.toFixed(1)} scene FPS · ${value.completedFps.toFixed(1)} GPU completions/s · CPU ${value.encodeMs.toFixed(2)} ms`
          : value.measuring
            ? 'Sampling: 60 warmup frames, then 8 seconds…'
            : 'Paused · move the scene or press Play motion';
        // Counter refreshes update one text binding; controls change only with state.
        if (
          previous?.playing !== value.playing ||
          previous?.measuring !== value.measuring ||
          previous?.error !== value.error
        )
          this.setState(() => {});
      });
      if (!this.alive || generation !== this.generation) {
        studio.close();
        return;
      }
      this.setState(() => {
        this.studio = studio;
        this.message = `${studio.adapter.device || studio.adapter.description || studio.adapter.vendor} · ready`;
      });
      globalThis.__webGpuStudio = {
        studio,
        benchmarkCase: (index) => this.benchmark(index),
      };
      if (globalThis.__webGpuStudioReport) void this.runSuite();
    } catch (error) {
      if (this.alive && generation === this.generation)
        this.setState(() => {
          this.message = `GPU unavailable: ${String(error)}`;
        });
      globalThis.__webGpuStudioReport?.(JSON.stringify({ error: String(error) }));
    }
  }
  configure(change: Partial<Settings>) {
    if (!this.studio || this.studio.measuring) return;
    this.studio.configure(change);
    this.setState(() => {
      this.result = '';
    });
  }
  async benchmark(index?: number) {
    const studio = this.studio;
    if (!studio) throw new Error('The GPU is not ready');
    const entry = index === undefined ? undefined : benchmarkCases[index];
    if (index !== undefined && !entry) throw new RangeError('Unknown benchmark case');
    const result = await studio.benchmark(
      entry?.name ?? 'Current scene',
      entry ?? studio.settings,
    );
    if (this.alive)
      this.setState(() => {
        this.result = `${result.submittedFps.toFixed(1)} submitted FPS · ${result.completedFps.toFixed(1)} GPU-completed FPS · CPU P95 ${result.encodeMs.p95.toFixed(2)} ms`;
      });
    return result;
  }
  async runSuite() {
    try {
      for (let index = 0; index < benchmarkCases.length; index++) {
        const result = await this.benchmark(index);
        await new Promise<void>((resolve) => {
          globalThis.__webGpuStudioCaptureDone = resolve;
          this.studio!.draw();
          globalThis.__webGpuStudioReport!(
            JSON.stringify({ kind: 'case', index, result }),
          );
        });
      }
      globalThis.__webGpuStudioReport!(
        JSON.stringify({
          kind: 'done',
          sourceSha256: globalThis.__studioSourceSha256,
          adapter: {
            vendor: this.studio!.adapter.vendor,
            description: this.studio!.adapter.description,
            device: this.studio!.adapter.device,
          },
        }),
      );
    } catch (error) {
      globalThis.__webGpuStudioReport?.(JSON.stringify({ error: String(error) }));
    }
  }
  choices(
    values: readonly string[],
    key: 'scene' | 'quality' | 'resolution' | 'palette',
  ) {
    return Wrap({
      spacing: 10,
      runSpacing: 10,
      children: values.map((value, index) =>
        action(
          `${this.studio?.settings[key] === index ? '● ' : ''}${value}`,
          () => this.configure({ [key]: index }),
          `webgpu-${key}-${index}`,
        ),
      ),
    });
  }
  build(_context: BuildContext): Widget {
    const studio = this.studio,
      stats = this.telemetry;
    return examplePage(
      'WebGPU / Spectrum studio',
      'A little world, on the GPU.',
      'Drag to shape a particle field, orbit a cube city, or wander through a prism. The same renderer runs here and in HTML.',
      [
        LayoutBuilder({
          builder: (_context, constraints) => {
            const width = Math.min(880, constraints.maxWidth);
            const move = (x: number, y: number) =>
              studio?.move((x / width) * 2 - 1, -((y / ((width * 9) / 16)) * 2 - 1));
            return Align({
              alignment: Alignment.center,
              child: Semantics({
                label:
                  'Interactive GPU scene. Drag to reshape or orbit. Center view resets the pointer.',
                child: GestureDetector({
                  key: exampleKey('webgpu-viewport'),
                  behavior: HitTestBehavior.opaque,
                  onTapDown: (e) => move(e.localPosition.dx, e.localPosition.dy),
                  onPanStart: (e) => move(e.localPosition.dx, e.localPosition.dy),
                  onPanUpdate: (e) => move(e.localPosition.dx, e.localPosition.dy),
                  child: CanvasView(this.canvas, {
                    key: exampleKey('webgpu-surface'),
                    width,
                    height: (width * 9) / 16,
                  }),
                }),
              }),
            });
          },
        }),
        SizedBox({ height: 14 }),
        text(stats?.error || this.message, 13),
        text(
          studio
            ? studio.detail
            : 'Preparing compute, render, depth and texture resources.',
          13,
          'muted',
        ),
        text(this.statistics.bind, 14, 'green', true),
        SizedBox({ height: 16 }),
        Wrap({
          spacing: 10,
          runSpacing: 10,
          children: [
            action(
              studio?.playing ? 'Pause motion' : 'Play motion',
              () => {
                if (!studio || studio.measuring) return;
                studio.playing ? studio.pause() : studio.play();
              },
              'webgpu-motion',
            ),
            action('Center view', () => studio?.move(0, 0), 'webgpu-center'),
            action(
              'Reset studio',
              () => {
                studio?.reset();
                this.setState(() => {
                  this.result = '';
                });
              },
              'webgpu-reset',
            ),
            action(
              'Restart GPU',
              () => {
                if (!studio?.measuring) void this.start();
              },
              'webgpu-restart',
            ),
          ],
        }),
        SizedBox({ height: 24 }),
        section(
          '01 / Choose a world',
          'Three real GPU workloads, with no CPU drawing fallback.',
          this.choices(scenes, 'scene'),
        ),
        section(
          '02 / Set the pace',
          'Use the same quality and pixel resolution when comparing HTML.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              this.choices(qualities, 'quality'),
              SizedBox({ height: 12 }),
              this.choices(resolutions, 'resolution'),
              SizedBox({ height: 12 }),
              action(
                `Cube submission: ${studio?.settings.individual ? 'per-object' : 'instanced'}`,
                () => this.configure({ individual: !studio?.settings.individual }),
                'webgpu-submission',
              ),
              SizedBox({ height: 10 }),
              text(
                'Instancing draws the same cube field with one call. Per-object mode shows the cost of many API calls.',
                13,
                'muted',
              ),
            ],
          }),
        ),
        section(
          '03 / Color the atmosphere',
          'A sampled GPU palette texture shared by all three worlds.',
          this.choices(palettes, 'palette'),
        ),
        section(
          '04 / Measure this scene',
          'The sample counts submissions and GPU completion notifications separately. It does not measure screen presentations.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              action(
                studio?.measuring ? 'Sampling…' : 'Run 8-second sample',
                () => {
                  if (studio && !studio.measuring)
                    void this.benchmark().catch((e) =>
                      this.setState(() => {
                        this.result = String(e);
                      }),
                    );
                },
                'webgpu-sample',
              ),
              SizedBox({ height: 12 }),
              text(
                this.result ||
                  'Choose a world and load, then run the same sample in HTML.',
                13,
              ),
            ],
          }),
        ),
      ],
    );
  }
  dispose() {
    this.alive = false;
    this.generation++;
    globalThis.__webGpuStudio = undefined;
    this.studio?.close();
    super.dispose();
  }
}
