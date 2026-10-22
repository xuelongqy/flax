import type {} from '@flax/canvas/globals';
import { CanvasView } from '@flax/canvas';
import { action, examplePage, section, text } from '@flax/example-core/ui';
import { BoxFit } from '@flax/flutter/painting';
import {
  Column,
  CrossAxisAlignment,
  FittedBox,
  SizedBox,
  State,
  StatefulWidget,
  Wrap,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';

export function createCanvasExample(): Widget {
  return new CanvasExample();
}

class CanvasExample extends StatefulWidget {
  createState(): State<CanvasExample> {
    return new CanvasState();
  }
}

class CanvasState extends State<CanvasExample> {
  readonly canvas = new OffscreenCanvas(560, 280);
  readonly drawing = this.canvas.getContext('2d')!;
  palette = 0;
  status = 'Canvas ready';

  initState(): void {
    super.initState();
    this.draw();
  }

  draw(): void {
    const palettes = [
      ['#245c48', '#a8c6a1', '#e6ad78'],
      ['#255d90', '#a4cee6', '#f0cf7c'],
      ['#b35d49', '#dfb093', '#7e9f88'],
    ];
    const colors = palettes[this.palette]!;
    const ctx = this.drawing;
    ctx.fillStyle = '#f5f5f0';
    ctx.fillRect(0, 0, 560, 280);
    ctx.fillStyle = colors[0]!;
    ctx.fillRect(32, 32, 160, 216);
    ctx.fillStyle = colors[1]!;
    ctx.beginPath();
    ctx.arc(312, 140, 105, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colors[2]!;
    ctx.beginPath();
    ctx.arc(432, 140, 72, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    for (let y = 68; y < 230; y += 28) {
      ctx.beginPath();
      ctx.moveTo(55, y);
      ctx.lineTo(170, y);
      ctx.stroke();
    }
  }

  build(_context: BuildContext): Widget {
    return examplePage(
      'Canvas 2D / creative playground',
      'Make something a little different.',
      'Shapes, paths and color, drawn from JavaScript into a native Flutter canvas.',
      [
        section(
          'Color studies',
          'Choose a palette or clear the canvas. No animation loop runs in the background.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox({
                width: 560,
                height: 280,
                child: FittedBox({
                  fit: BoxFit.contain,
                  child: CanvasView(this.canvas, { width: 560, height: 280 }),
                }),
              }),
              SizedBox({ height: 22 }),
              Wrap({
                spacing: 10,
                runSpacing: 10,
                children: [
                  ...['Forest', 'Ocean', 'Sunset'].map((name, index) =>
                    action(name, () =>
                      this.setState(() => {
                        this.palette = index;
                        this.draw();
                        this.status = `${name} palette`;
                      }),
                    ),
                  ),
                  action('Clear canvas', () =>
                    this.setState(() => {
                      this.drawing.clearRect(0, 0, 560, 280);
                      this.status = 'Canvas cleared';
                    }),
                  ),
                ],
              }),
              SizedBox({ height: 20 }),
              text(this.status),
            ],
          }),
        ),
      ],
    );
  }
}
