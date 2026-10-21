import {
  Column,
  FutureBuilder,
  Image,
  State,
  StatefulWidget,
  Text,
  type BuildContext,
} from '@flax/flutter/widgets';
import { getAssetBundle } from '@flax/core/assets';
import { AppBar, Scaffold } from '@flax/material-ui';

export class AssetsPage extends StatefulWidget {
  createState(): State<AssetsPage> {
    return new AssetsState();
  }
}

class AssetsState extends State<AssetsPage> {
  configuration!: Promise<string>;

  initState(): void {
    super.initState();
    this.configuration = getAssetBundle().loadString('assets/data/example.json');
  }

  build(_context: BuildContext) {
    return Scaffold({
      appBar: AppBar({ title: Text('Application assets') }),
      body: Column({
        spacing: 16,
        children: [
          Image.asset('assets/images/flutter.png', {
            width: 96,
            height: 96,
            semanticLabel: 'Bundled Flutter image',
          }),
          FutureBuilder<string>({
            future: this.configuration,
            builder: (_context, snapshot) => {
              if (snapshot.hasError)
                return Text(`JSON asset failed: ${String(snapshot.error)}`);
              if (!snapshot.hasData) return Text('Loading JSON asset');
              try {
                const data: unknown = JSON.parse(snapshot.requireData);
                if (
                  data === null ||
                  typeof data !== 'object' ||
                  !('message' in data) ||
                  typeof data.message !== 'string'
                ) {
                  return Text('JSON asset must contain a string message');
                }
                return Text(data.message);
              } catch (error) {
                return Text(`JSON asset failed: ${String(error)}`);
              }
            },
          }),
        ],
      }),
    });
  }
}
