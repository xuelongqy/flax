import * as streams from 'web-streams-polyfill';

export const encodingStreams = {
  TextEncoderStream: class {
    readonly encoding = 'utf-8';
    readonly readable: streams.ReadableStream<Uint8Array>;
    readonly writable: streams.WritableStream<string>;
    constructor() {
      let suffix = '';
      const encoder = new TextEncoder();
      const stream = new streams.TransformStream<string, Uint8Array>({
        transform(chunk, controller) {
          let text = suffix + String(chunk);
          suffix = '';
          const last = text.charCodeAt(text.length - 1);
          if (last >= 0xd800 && last <= 0xdbff) {
            suffix = text.slice(-1);
            text = text.slice(0, -1);
          }
          if (text) controller.enqueue(encoder.encode(text));
        },
        flush(controller) {
          if (suffix) controller.enqueue(encoder.encode(suffix));
        },
      });
      this.readable = stream.readable;
      this.writable = stream.writable;
    }
  },
  TextDecoderStream: class {
    readonly readable: streams.ReadableStream<string>;
    readonly writable: streams.WritableStream<ArrayBuffer | ArrayBufferView>;
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
    constructor(label?: string, options?: { fatal?: boolean; ignoreBOM?: boolean }) {
      const decoder = new TextDecoder(label, options);
      this.encoding = decoder.encoding;
      this.fatal = decoder.fatal;
      this.ignoreBOM = decoder.ignoreBOM;
      const stream = new streams.TransformStream<ArrayBuffer | ArrayBufferView, string>(
        {
          transform(chunk, controller) {
            const text = decoder.decode(chunk, { stream: true });
            if (text) controller.enqueue(text);
          },
          flush(controller) {
            const text = decoder.decode();
            if (text) controller.enqueue(text);
          },
        },
      );
      this.readable = stream.readable;
      this.writable = stream.writable;
    }
  },
};
