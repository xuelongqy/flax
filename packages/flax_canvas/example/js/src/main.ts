import type {} from '@flax/canvas/globals';
import { runApp, Text, Column } from '@flax/flutter/widgets';
import { CanvasView } from '@flax/canvas';

const canvas = new OffscreenCanvas(80, 40);
const context = canvas.getContext('2d');
if (context === null) throw new Error('Canvas 2D is unavailable');
context.fillStyle = '#336699';
context.fillRect(0, 0, 80, 40);
runApp(Column({ children: [CanvasView(canvas), Text('Canvas ready')] }));
