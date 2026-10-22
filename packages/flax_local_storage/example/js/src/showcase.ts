import type {} from '@flax/local-storage/globals';
import { action, examplePage, input, section, text } from '@flax/example-core/ui';
import {
  Column,
  CrossAxisAlignment,
  FocusNode,
  SizedBox,
  State,
  StatefulWidget,
  TextEditingController,
  Wrap,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';

export function createStorageExample(): Widget {
  return new StorageExample();
}

class StorageExample extends StatefulWidget {
  createState(): State<StorageExample> {
    return new StorageState();
  }
}

class StorageState extends State<StorageExample> {
  count = 0;
  note!: TextEditingController;
  focus!: FocusNode;
  status = 'Your changes stay in this example’s storage area.';
  readonly refresh = (event: StorageEvent) => {
    if (!this.mounted) return;
    if (event.key !== null && event.key !== 'count' && event.key !== 'note') return;
    this.setState(() => {
      if (event.key === null || event.key === 'count')
        this.count = Number(localStorage.getItem('count') ?? '0');
      if (event.key === null || event.key === 'note')
        this.note.text = localStorage.getItem('note') ?? '';
      this.status = 'Updated from another view in the same storage area.';
    });
  };

  initState(): void {
    super.initState();
    this.count = Number(localStorage.getItem('count') ?? '0');
    this.note = TextEditingController({ text: localStorage.getItem('note') ?? '' });
    this.focus = FocusNode();
    addEventListener('storage', this.refresh);
  }

  build(_context: BuildContext): Widget {
    return examplePage(
      'Local storage / saved state',
      'A little memory goes a long way.',
      'Save a note, keep a counter and reopen the example. Views sharing a storage area stay in sync.',
      [
        section(
          'Persistent counter',
          'Changes are written immediately and survive remounting.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              text(`Stored: ${this.count}`, 28),
              SizedBox({ height: 20 }),
              Wrap({
                spacing: 12,
                runSpacing: 12,
                children: [
                  action('Store +1', () => {
                    const next = Number(localStorage.getItem('count') ?? '0') + 1;
                    localStorage.setItem('count', String(next));
                    this.setState(() => (this.count = next));
                  }),
                  action('Clear area', () => {
                    localStorage.clear();
                    this.setState(() => {
                      this.count = 0;
                      this.note.text = '';
                      this.status = 'This example’s storage area was cleared.';
                    });
                  }),
                ],
              }),
            ],
          }),
        ),
        section(
          'A note for later',
          'Only Save writes the note; editing alone does not change saved data.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              input(this.note, this.focus, 'Saved note', 'storage-note'),
              SizedBox({ height: 18 }),
              action('Save note', () => {
                localStorage.setItem('note', this.note.text);
                this.setState(
                  () => (this.status = 'Note saved. You can leave and come back.'),
                );
              }),
              SizedBox({ height: 20 }),
              text(this.status),
            ],
          }),
        ),
      ],
    );
  }

  dispose(): void {
    removeEventListener('storage', this.refresh);
    this.note.dispose();
    this.focus.dispose();
    super.dispose();
  }
}
