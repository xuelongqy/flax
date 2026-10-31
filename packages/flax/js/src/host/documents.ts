import type { File } from '@flax/dart/io';

export interface FlaxDocuments {
  /** Requires the document plugin and a sandbox. Cancellation returns null. */
  open(options?: { mode?: 'read' | 'readWrite' }): Promise<File | null>;
}

declare global {
  var documents: FlaxDocuments;
}
