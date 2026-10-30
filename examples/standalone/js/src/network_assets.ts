import type {} from '@flax/core/host';
import {
  Column,
  FutureBuilder,
  Image,
  State,
  StatefulWidget,
  Text,
  type BuildContext,
} from '@flax/flutter/widgets';
import { AppBar, Scaffold } from '@flax/material-ui';

export class NetworkAssetsPage extends StatefulWidget {
  createState(): State<NetworkAssetsPage> {
    return new NetworkAssetsState();
  }
}

class NetworkAssetsState extends State<NetworkAssetsPage> {
  readonly request = new AbortController();
  configuration!: Promise<string>;

  initState(): void {
    super.initState();
    // Relative Fetch URLs use the host plugin's baseUrl.
    this.configuration = fetch('/assets/config.json', {
      signal: this.request.signal,
    }).then((response) => {
      if (!response.ok) {
        this.request.abort();
        throw new Error(`HTTP ${response.status}`);
      }
      return response.text();
    });
  }

  build(_context: BuildContext) {
    return Scaffold({
      appBar: AppBar({ title: Text('Network assets') }),
      body: FutureBuilder<string>({
        future: this.configuration,
        builder: (_context, snapshot) => {
          if (snapshot.hasError)
            return Text(`Network JSON failed: ${String(snapshot.error)}`);
          if (!snapshot.hasData) return Text('Loading network JSON');
          try {
            const data: unknown = JSON.parse(snapshot.requireData);
            if (
              data === null ||
              typeof data !== 'object' ||
              !('message' in data) ||
              typeof data.message !== 'string' ||
              !('imageUrl' in data) ||
              typeof data.imageUrl !== 'string'
            ) {
              return Text('Network JSON must contain message and imageUrl strings');
            }
            const imageUrl = new URL(data.imageUrl);
            if (imageUrl.protocol !== 'http:' && imageUrl.protocol !== 'https:') {
              return Text('Network imageUrl must be an absolute HTTP(S) URL');
            }
            return Column({
              spacing: 16,
              children: [
                Text(data.message),
                Image.network(imageUrl.href, {
                  width: 96,
                  height: 96,
                  semanticLabel: 'Network Flutter image',
                  errorBuilder: (_context, error) =>
                    Text(`Network image failed: ${String(error)}`),
                }),
              ],
            });
          } catch (error) {
            return Text(`Network JSON failed: ${String(error)}`);
          }
        },
      }),
    });
  }

  dispose(): void {
    this.request.abort();
    super.dispose();
  }
}
