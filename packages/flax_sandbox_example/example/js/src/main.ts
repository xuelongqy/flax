import type {} from '@flax/local-storage/globals';
import { getHomePath } from '@flax/core';
import type {} from '@flax/core/host';
import { File } from '@flax/dart/io';
import { action, exampleKey, input, text } from '@flax/example-core/ui';
import { EdgeInsets } from '@flax/flutter/painting';
import {
  Column,
  CrossAxisAlignment,
  FocusNode,
  Image,
  Padding,
  registerPage,
  SingleChildScrollView,
  SizedBox,
  State,
  StatefulWidget,
  TextEditingController,
  Wrap,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';

type SandboxConfiguration = {
  label: string;
  enabled: boolean;
  ordinaryHome: string;
  hostFile: string;
  peerFile: string;
};

class SandboxApp extends StatefulWidget {
  constructor(readonly configuration: SandboxConfiguration) {
    super();
  }

  createState(): State<SandboxApp> {
    return new SandboxState();
  }
}

class SandboxState extends State<SandboxApp> {
  note!: TextEditingController;
  focus!: FocusNode;
  home = '';
  dataHome = '';
  value = '(no file yet)';
  count = 0;
  image: File | null = null;
  busy = false;
  status = 'Starting…';
  readonly storageChanged = () => {
    if (this.mounted) {
      this.setState(() => (this.count = Number(localStorage.getItem('count') ?? '0')));
    }
  };

  initState(): void {
    super.initState();
    const config = this.widget.configuration;
    this.note = TextEditingController({ text: `A note from ${config.label}` });
    this.focus = FocusNode();
    this.count = Number(localStorage.getItem('count') ?? '0');
    addEventListener('storage', this.storageChanged);
    void this.perform(async () => {
      this.home = await getHomePath();
      this.dataHome = config.enabled ? this.home : config.ordinaryHome;
      const file = File(`${this.dataHome}/note.txt`);
      this.value = (await file.exists()) ? await file.readAsString() : '(no file yet)';
      const image = File(`${this.dataHome}/pixel.png`);
      if (await image.exists()) this.image = image;
      return `Ready ${config.label}`;
    });
  }

  async perform(operation: () => Promise<string> | string): Promise<void> {
    if (this.busy) return;
    const config = this.widget.configuration;
    this.setState(() => (this.busy = true));
    try {
      const message = await operation();
      if (this.mounted) this.setState(() => (this.status = message));
    } catch (error) {
      const denied = error as { code?: string; message?: string };
      if (this.mounted) {
        this.setState(() => {
          this.status = `${config.label}: ${denied.code ?? 'ERROR'} · ${denied.message ?? String(error)}`;
        });
      }
    } finally {
      if (this.mounted) this.setState(() => (this.busy = false));
    }
  }

  build(_context: BuildContext): Widget {
    const config = this.widget.configuration;
    const label = config.label;
    const button = (
      caption: string,
      id: string,
      operation: () => Promise<string> | string,
    ) => action(caption, () => void this.perform(operation), `sandbox-${id}-${label}`);
    return SingleChildScrollView({
      child: Padding({
        padding: EdgeInsets.all(8),
        child: Column({
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            text(
              `App ${label} · ${config.enabled ? 'sandbox enabled' : 'ordinary mode'}`,
              22,
              'ink',
              true,
            ),
            text(`getHomePath(): ${this.home || 'loading…'}`, 12),
            ...(!config.enabled ? [text(`Demo files: ${this.dataHome}`, 12)] : []),
            SizedBox({ height: 14 }),
            input(
              this.note,
              this.focus,
              `File contents ${label}`,
              `sandbox-note-${label}`,
            ),
            SizedBox({ height: 10 }),
            Wrap({
              spacing: 8,
              runSpacing: 8,
              children: [
                button('Save file', 'save', async () => {
                  await File(`${this.dataHome}/note.txt`).writeAsString(this.note.text);
                  this.value = await File(`${this.dataHome}/note.txt`).readAsString();
                  return `${label}: file saved`;
                }),
                button('Read file', 'read', async () => {
                  this.value = await File(`${this.dataHome}/note.txt`).readAsString();
                  return `${label}: file read`;
                }),
                button('Write PNG / Image.file', 'write-image', async () => {
                  const file = File(`${this.dataHome}/pixel.png`);
                  await file.writeAsBytes(
                    Uint8Array.from(
                      atob(
                        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
                      ),
                      (character) => character.charCodeAt(0),
                    ),
                  );
                  this.image = file;
                  return `${label}: Image.file ready`;
                }),
              ],
            }),
            SizedBox({ height: 10 }),
            text(`File ${label}: ${this.value}`),
            ifImage(this.image, label),
            SizedBox({ height: 14 }),
            text(`Stored ${label}: ${this.count}`, 20),
            text('Same namespace and key in both apps.', 12),
            Wrap({
              spacing: 8,
              runSpacing: 8,
              children: [
                button('Store +1', 'store', () => {
                  this.count = Number(localStorage.getItem('count') ?? '0') + 1;
                  localStorage.setItem('count', String(this.count));
                  return `${label}: localStorage saved`;
                }),
                button('Reset counter', 'reset', () => {
                  localStorage.removeItem('count');
                  this.count = 0;
                  return `${label}: counter reset`;
                }),
              ],
            }),
            SizedBox({ height: 14 }),
            text('Boundary probes (demo fixtures only)', 16, 'ink', true),
            Wrap({
              spacing: 8,
              runSpacing: 8,
              children: [
                button(
                  'Read host file',
                  'host-read',
                  async () =>
                    `${label}: host read allowed · ${await File(config.hostFile).readAsString()}`,
                ),
                button('Write host file', 'host-write', async () => {
                  await File(config.hostFile).writeAsString(`Written by ${label}`);
                  return `${label}: host write allowed`;
                }),
                button(
                  'Read other app file',
                  'peer-read',
                  async () =>
                    `${label}: peer read allowed · ${await File(config.peerFile).readAsString()}`,
                ),
              ],
            }),
            SizedBox({ height: 12 }),
            text(this.busy ? `${label}: working…` : this.status, 13),
          ],
        }),
      }),
    });
  }

  dispose(): void {
    removeEventListener('storage', this.storageChanged);
    this.note.dispose();
    this.focus.dispose();
    super.dispose();
  }
}

function ifImage(file: File | null, label: string): Widget {
  return file
    ? Image.file(file, {
        key: exampleKey(`sandbox-image-${label}`),
        width: 56,
        height: 56,
        semanticLabel: `Image.file preview ${label}`,
      })
    : SizedBox({ height: 0 });
}

registerPage(
  'sandbox',
  (params) => new SandboxApp(params.value as SandboxConfiguration),
);
