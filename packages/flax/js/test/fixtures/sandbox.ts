import { getHomePath, signal } from '@flax/core';
import { File as IoFile, Directory, FileStat, FileSystemEntity } from '@flax/dart/io';
import { FileImage, AssetImage } from '@flax/flutter/painting';
import { getRootBundle, MethodChannel } from '@flax/flutter/services';
import { runApp, Text, Image, Column, Widget } from '@flax/flutter/widgets';

const children = signal<Widget[]>([Text('Sandbox root')]);

function denied(action: () => unknown): string {
  try {
    action();
    return 'allowed';
  } catch (e) {
    return String((e as { code?: unknown }).code);
  }
}
Object.assign(globalThis, {
  sandboxResults: null,
  async sandboxFiles(outside: string) {
    const home = await getHomePath();
    const file = IoFile(`${home}/note.txt`);
    const written = await file.writeAsString('scoped');
    const text = await written.readAsString();
    const listed = await Directory(home).list().toList();
    const first = listed.get(0);
    const copied = await file.copy(`${home}/copy.txt`);
    const result = {
      home,
      text,
      same: written === file,
      listed: await FileSystemEntity.isFile(first.path),
      copy: await copied.readAsString(),
      stat: (await FileStat.stat(file.path)).size,
      outside: denied(() => IoFile(outside)),
      raw: denied(() => IoFile.fromRawPath(new Uint8Array())),
      current: denied(() => Directory.current),
      bundle: getRootBundle().loadString('message.txt').then(String),
    };
    let open = 'allowed';
    try {
      await file.open();
    } catch (e) {
      open = String((e as { code?: unknown }).code);
    }
    const asset = AssetImage('message.txt');
    FileImage(file);
    Object.assign(result, { open, assetBundle: asset.bundle === getRootBundle() });
    const resolved = { ...result, bundle: await result.bundle };
    (globalThis as any).sandboxResults = JSON.stringify(resolved);
  },
  sandboxFfi: () => {
    const host = globalThis as any;
    return [
      denied(() => host.__flaxBaseCall('ffiInstall')),
      denied(() => host.__flaxBaseCall('ffiAsset', 'host')),
      typeof host.__flaxFfiDlopen,
      typeof host.__flaxFfiMemory,
    ].join(',');
  },
  sandboxChannel: () => denied(() => MethodChannel('host.files')),
  sandboxImage: (path: string) => {
    children.value = [Image.file(IoFile(path))];
  },
});
runApp(Column({ children: children.bind }));
