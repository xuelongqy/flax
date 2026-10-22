import type {} from '@flax/fetch/globals';
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

export function createFetchExample(): Widget {
  return new FetchExample();
}

class FetchExample extends StatefulWidget {
  createState(): State<FetchExample> {
    return new FetchState();
  }
}

class FetchState extends State<FetchExample> {
  endpoint!: TextEditingController;
  focus!: FocusNode;
  request: AbortController | undefined;
  status = 'Fetch ready';
  response = 'Your response will appear here.';

  initState(): void {
    super.initState();
    this.endpoint = TextEditingController({ text: '/status' });
    this.focus = FocusNode();
  }

  build(_context: BuildContext): Widget {
    return examplePage(
      'Fetch / requests & cancellation',
      'Ask. Receive. Explore.',
      'Send a real HTTP request, inspect the response and cancel work you no longer need.',
      [
        section(
          'Request playground',
          'The example command starts a local Dart server. Try /status, or enter a complete HTTP URL.',
          Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              input(this.endpoint, this.focus, 'Request URL', 'fetch-url', () => {
                void this.send();
              }),
              SizedBox({ height: 18 }),
              Wrap({
                spacing: 12,
                runSpacing: 12,
                children: [
                  action('Send request', () => {
                    void this.send();
                  }),
                  action('Try slow request', () => {
                    this.endpoint.text = '/slow';
                    void this.send();
                  }),
                  action('Cancel request', () => this.request?.abort()),
                ],
              }),
              SizedBox({ height: 22 }),
              text(this.status, 17),
            ],
          }),
        ),
        section(
          'Response',
          'HTTP status and response content stay visible after the request finishes.',
          text(this.response),
        ),
      ],
    );
  }

  async send(): Promise<void> {
    this.request?.abort();
    const request = (this.request = new AbortController());
    this.setState(() => (this.status = 'Sending request…'));
    try {
      const response = await fetch(this.endpoint.text, { signal: request.signal });
      const body = await response.text();
      if (!this.mounted || this.request !== request) return;
      let formatted = body;
      try {
        formatted = JSON.stringify(JSON.parse(body), null, 2);
      } catch {
        /* Show non-JSON responses unchanged. */
      }
      this.setState(() => {
        this.status = `HTTP ${response.status} · ${response.ok ? 'Received' : 'Request failed'}`;
        this.response = formatted || '(Empty response)';
      });
    } catch (error) {
      if (!this.mounted || this.request !== request) return;
      this.setState(() => {
        this.status = request.signal.aborted
          ? 'Request cancelled.'
          : 'Could not connect.';
        this.response = request.signal.aborted
          ? 'You can send another request whenever you like.'
          : `${String(error)}\n\nKeep the example command running, or enter another URL.`;
      });
    }
  }

  dispose(): void {
    this.request?.abort();
    this.focus.dispose();
    this.endpoint.dispose();
    super.dispose();
  }
}
