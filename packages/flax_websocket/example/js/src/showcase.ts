import type {} from '@flax/websocket/globals';
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

export function createWebSocketExample(): Widget {
  return new SocketExample();
}

class SocketExample extends StatefulWidget {
  createState(): State<SocketExample> {
    return new SocketState();
  }
}

class SocketState extends State<SocketExample> {
  endpoint!: TextEditingController;
  message!: TextEditingController;
  endpointFocus!: FocusNode;
  messageFocus!: FocusNode;
  socket: WebSocket | undefined;
  status = 'WebSocket ready';
  received = 'Messages from the server appear here.';

  initState(): void {
    super.initState();
    this.endpoint = TextEditingController({ text: '/socket' });
    this.message = TextEditingController({ text: 'Hello from Flax!' });
    this.endpointFocus = FocusNode();
    this.messageFocus = FocusNode();
  }

  build(_context: BuildContext): Widget {
    return examplePage(
      'WebSocket / live messages',
      'A conversation, in real time.',
      'Connect to an echo server, send a message and see it arrive. Disconnect explicitly or leave this page.',
      [
        section(
          'Connection',
          'The example command starts a local Dart echo server at /socket. You can also enter a complete ws:// or wss:// URL.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              input(this.endpoint, this.endpointFocus, 'WebSocket URL', 'socket-url'),
              SizedBox({ height: 18 }),
              Wrap({
                spacing: 12,
                runSpacing: 12,
                children: [
                  action('Connect', () => this.connect()),
                  action('Disconnect', () =>
                    this.socket?.close(1000, 'User disconnected'),
                  ),
                ],
              }),
              SizedBox({ height: 22 }),
              text(this.status, 17),
            ],
          }),
        ),
        section(
          'Message playground',
          'An open connection is required before sending.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              input(this.message, this.messageFocus, 'Message', 'socket-message', () =>
                this.send(),
              ),
              SizedBox({ height: 18 }),
              action('Send message', () => this.send()),
              SizedBox({ height: 22 }),
              text(this.received),
            ],
          }),
        ),
      ],
    );
  }

  connect(): void {
    this.disconnect();
    try {
      const socket = (this.socket = new WebSocket(this.endpoint.text));
      this.setState(() => (this.status = 'Connecting…'));
      socket.onopen = () => {
        if (this.mounted && this.socket === socket)
          this.setState(() => (this.status = 'Connected. Say hello!'));
      };
      socket.onmessage = (event) => {
        if (this.mounted && this.socket === socket)
          this.setState(() => (this.received = `Received: ${String(event.data)}`));
      };
      socket.onerror = () => {
        if (this.mounted && this.socket === socket)
          this.setState(
            () => (this.status = 'Connection failed. Check the server URL.'),
          );
      };
      socket.onclose = (event) => {
        if (this.mounted && this.socket === socket)
          this.setState(() => (this.status = `Disconnected · ${event.code}`));
      };
    } catch (error) {
      this.setState(() => (this.status = String(error)));
    }
  }

  send(): void {
    if (this.socket?.readyState !== WebSocket.OPEN) {
      this.setState(() => (this.status = 'Connect to a server first.'));
      return;
    }
    this.socket.send(this.message.text);
  }

  disconnect(): void {
    const socket = this.socket;
    this.socket = undefined;
    if (!socket) return;
    socket.onopen = null;
    socket.onmessage = null;
    socket.onerror = null;
    socket.onclose = null;
    socket.close(1000, 'Leaving preview');
  }

  dispose(): void {
    this.disconnect();
    this.endpoint.dispose();
    this.message.dispose();
    this.endpointFocus.dispose();
    this.messageFocus.dispose();
    super.dispose();
  }
}
