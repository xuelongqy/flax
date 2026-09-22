import type {} from '@flax/local-storage/globals';
import type {} from '@flax/fetch/globals';
import type {} from '@flax/websocket/globals';
import type {} from '@flax/canvas/globals';
import { signal } from '@flax/core';
import {
  Column,
  Navigator,
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
  TextEditingController,
  ValueKey,
  runApp,
  type BuildContext,
} from '@flax/flutter/widgets';
import {
  AppBar,
  Brightness,
  ColorScheme,
  MaterialApp,
  MaterialPageRoute,
  Scaffold,
  TextButton,
  TextField,
  ThemeData,
  ThemeMode,
} from '@flax/flutter/material';
import { Color } from '@flax/flutter/services';
import { CanvasView } from '@flax/canvas';

const themeMode = signal(ThemeMode.system);

class HomePage extends StatefulWidget {
  createState(): State<HomePage> {
    return new HomeState();
  }
}

class HomeState extends State<HomePage> {
  count = 0;
  readonly title = signal('Flax standalone');
  readonly result = signal('No result yet');
  readonly network = signal(
    'Fetch available; configure FLAX_FETCH_BASE_URL for a local server',
  );
  readonly request = new AbortController();
  editing!: TextEditingController;
  socket: WebSocket | undefined;
  readonly socketStatus = signal('WebSocket ready');

  initState(): void {
    super.initState();
    this.editing = TextEditingController({
      text:
        typeof localStorage === 'undefined'
          ? 'Hello from JS'
          : (localStorage.getItem('draft') ?? 'Hello from JS'),
    });
  }

  async openDetails(): Promise<void> {
    const result = await Navigator.of(this.context).push(
      MaterialPageRoute({ builder: () => new DetailsPage(this.editing.text) }),
    );
    if (!this.mounted) return;
    this.result.value =
      result !== null &&
      typeof result === 'object' &&
      !Array.isArray(result) &&
      result['accepted'] === true
        ? 'Result accepted'
        : 'Returned without a result';
  }

  async checkNetwork(): Promise<void> {
    this.network.value = 'Loading status';
    try {
      const response = await fetch('/status', { signal: this.request.signal });
      const data = (await response.json()) as { message: string };
      if (this.mounted) this.network.value = data.message;
    } catch (error) {
      if (this.mounted) this.network.value = String(error);
    }
  }

  checkSocket(): void {
    this.socket?.close();
    try {
      const socket = (this.socket = new WebSocket('/socket'));
      socket.onopen = () => socket.send('Local WebSocket verified');
      socket.onmessage = (event) => {
        if (this.mounted) this.socketStatus.value = String(event.data);
        socket.close(1000, 'Done');
      };
      socket.onerror = () => {
        if (this.mounted) this.socketStatus.value = 'WebSocket connection failed';
      };
    } catch (error) {
      this.socketStatus.value = String(error);
    }
  }

  build(_context: BuildContext) {
    return Scaffold({
      appBar: AppBar({ title: Text(this.title.bind, { key: ValueKey('app-title') }) }),
      body: Column({
        children: [
          TextField({
            key: ValueKey('editor'),
            controller: this.editing,
            onChanged: (text) => {
              if (typeof localStorage !== 'undefined')
                localStorage.setItem('draft', text);
            },
          }),
          Text(`Count: ${this.count}`),
          TextButton({
            onPressed: () => this.setState(() => this.count++),
            child: Text('Increment'),
          }),
          TextButton({
            onPressed: () => (this.title.value = 'Updated title'),
            child: Text('Change title'),
          }),
          TextButton({
            onPressed: () =>
              (themeMode.value =
                themeMode.value === ThemeMode.dark ? ThemeMode.light : ThemeMode.dark),
            child: Text('Toggle theme'),
          }),
          TextButton({
            onPressed: () => this.openDetails(),
            child: Text('Open details'),
          }),
          TextButton({
            onPressed: () =>
              Navigator.of(this.context).push(
                MaterialPageRoute({ builder: () => new CanvasPage() }),
              ),
            child: Text('Open canvas'),
          }),
          Text(this.result.bind),
          TextButton({
            onPressed: () => this.checkNetwork(),
            child: Text('Fetch status'),
          }),
          Text(this.network.bind),
          TextButton({
            onPressed: () => this.checkSocket(),
            child: Text('WebSocket echo'),
          }),
          Text(this.socketStatus.bind),
          Text('Static application content', { key: ValueKey('static') }),
        ],
      }),
    });
  }

  dispose(): void {
    this.socket?.close();
    this.request.abort();
    this.editing.dispose();
    super.dispose();
  }
}

class DetailsPage extends StatelessWidget {
  constructor(readonly message: string) {
    super();
  }
  build(context: BuildContext) {
    return Scaffold({
      appBar: AppBar({ title: Text('Details') }),
      body: Column({
        children: [
          Text(this.message),
          TextButton({
            onPressed: () =>
              Navigator.of(context).pop({ accepted: true, values: [1, 'JS'] }),
            child: Text('Accept and return'),
          }),
          TextButton({
            onPressed: () => (themeMode.value = ThemeMode.light),
            child: Text('Use light theme'),
          }),
        ],
      }),
    });
  }
}

const seedColor = Color(0xff386a20);

class CanvasPage extends StatelessWidget {
  readonly canvas = new OffscreenCanvas(120, 80);
  constructor() {
    super();
    const context = this.canvas.getContext('2d')!;
    context.fillStyle = '#315cba';
    context.fillRect(10, 10, 40, 40);
  }
  build(_context: BuildContext) {
    return Scaffold({
      appBar: AppBar({ title: Text('Canvas') }),
      body: CanvasView(this.canvas, { width: 120, height: 80 }),
    });
  }
}

runApp(
  MaterialApp({
    title: 'Flax Standalone',
    theme: ThemeData({ colorScheme: ColorScheme.fromSeed({ seedColor }) }),
    darkTheme: ThemeData({
      colorScheme: ColorScheme.fromSeed({ seedColor, brightness: Brightness.dark }),
    }),
    themeMode: themeMode.bind,
    debugShowCheckedModeBanner: false,
    home: new HomePage({ key: ValueKey('home') }),
  }),
);
