import { createCanvasExample } from '@flax/example-canvas/showcase';
import { createCoreExample } from '@flax/example-core/showcase';
import { exampleColors, examplePalette, exampleKey, text } from '@flax/example-core/ui';
import {
  createCupertinoExample,
  cupertinoCollections,
} from '@flax/example-cupertino-ui/showcase';
import { createFetchExample } from '@flax/example-fetch/showcase';
import { createStorageExample } from '@flax/example-local-storage/showcase';
import {
  createMaterialExample,
  materialCollections,
} from '@flax/example-material-ui/showcase';
import { createWebSocketExample } from '@flax/example-websocket/showcase';
import { Brightness, Color, FontWeight } from '@flax/dart/ui';
import {
  Alignment,
  BorderRadius,
  BoxDecoration,
  EdgeInsets,
  RoundedRectangleBorder,
  TextStyle,
} from '@flax/flutter/painting';
import { BoxConstraints } from '@flax/flutter/rendering';
import {
  Center,
  Column,
  ConstrainedBox,
  Container,
  CrossAxisAlignment,
  Expanded,
  LayoutBuilder,
  Navigator,
  Padding,
  Row,
  Semantics,
  SingleChildScrollView,
  SizedBox,
  StatelessWidget,
  Text,
  Wrap,
  runApp,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';
import {
  AppBar,
  BackButton,
  Card,
  ColorScheme,
  InkWell,
  MaterialApp,
  MaterialPageRoute,
  Scaffold,
  TextButton,
  ThemeData,
} from '@flax/material-ui';
import { materialTextButton } from './shared_material';

if (materialTextButton !== TextButton) {
  throw new Error('Host-provided Material module was initialized more than once');
}

// Entrances only: demonstrations and their state remain in the owning examples.
const examples = [
  {
    id: 'core',
    title: 'Core & signals',
    mark: '01',
    color: 0xff245c48,
    tag: 'START HERE',
    description: 'Reactive state, computed values and real Flutter composition.',
    create: createCoreExample,
  },
  {
    id: 'material',
    title: 'Material UI',
    mark: 'M',
    color: 0xff54683b,
    tag: `${materialCollections.length} COLLECTIONS`,
    description: 'Expressive buttons, forms, selection, feedback and surfaces.',
    create: createMaterialExample,
  },
  {
    id: 'cupertino',
    title: 'Cupertino UI',
    mark: 'C',
    color: 0xff456da7,
    tag: `${cupertinoCollections.length} COLLECTIONS`,
    description: 'Thoughtful iOS-style controls, grouped lists and native overlays.',
    create: createCupertinoExample,
  },
  {
    id: 'canvas',
    title: 'Canvas 2D',
    mark: '2D',
    color: 0xffa36a4b,
    tag: 'CREATIVE TOOLS',
    description: 'Shape a light sculpture, animate it and capture a PNG postcard.',
    create: createCanvasExample,
  },
  {
    id: 'fetch',
    title: 'Fetch',
    mark: '↗',
    color: 0xff7c6494,
    tag: 'CONNECT',
    description: 'Send requests, inspect responses and cancel unfinished work.',
    create: createFetchExample,
  },
  {
    id: 'websocket',
    title: 'WebSocket',
    mark: '↔',
    color: 0xff337c7e,
    tag: 'REAL TIME',
    description: 'Open a connection and exchange messages with an echo server.',
    create: createWebSocketExample,
  },
  {
    id: 'storage',
    title: 'Local storage',
    mark: 'S',
    color: 0xff9a7041,
    tag: 'PERSIST',
    description: 'Save a note, keep a counter and pick up where you left off.',
    create: createStorageExample,
  },
] as const;

class GalleryHome extends StatelessWidget {
  build(context: BuildContext): Widget {
    const colors = examplePalette(context);
    return Scaffold({
      backgroundColor: colors.background,
      body: LayoutBuilder({
        builder: (_context, constraints) => {
          const narrow = constraints.maxWidth < 680;
          const width = Math.min(constraints.maxWidth - (narrow ? 32 : 64), 1120);
          const columns = narrow ? 1 : constraints.maxWidth >= 1000 ? 3 : 2;
          const cardWidth = (width - 20 * (columns - 1)) / columns;
          return SingleChildScrollView({
            child: Center({
              child: ConstrainedBox({
                constraints: BoxConstraints({ maxWidth: 1184 }),
                child: Padding({
                  padding: EdgeInsets.all(narrow ? 16 : 32),
                  child: Column({
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container({
                        width,
                        padding: EdgeInsets.all(narrow ? 26 : 40),
                        decoration: BoxDecoration({
                          color: exampleColors.green,
                          borderRadius: BorderRadius.circular(28),
                        }),
                        child: Column({
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('FLAX / THE PLAYGROUND', {
                              style: TextStyle({
                                color: Color(0xffc0d7ba),
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                letterSpacing: 2,
                              }),
                            }),
                            SizedBox({ height: 24 }),
                            Text('A little JavaScript.\nA lot of Flutter.', {
                              style: TextStyle({
                                color: exampleColors.surface,
                                fontSize: narrow ? 34 : 52,
                                height: 1.12,
                                fontWeight: FontWeight.w600,
                                letterSpacing: -1.5,
                              }),
                            }),
                            SizedBox({ height: 20 }),
                            Text('Real widgets. Familiar patterns. Room to explore.', {
                              style: TextStyle({
                                color: Color(0xffd3e3ce),
                                fontSize: 16,
                                height: 1.5,
                              }),
                            }),
                            SizedBox({ height: 26 }),
                            Wrap({
                              spacing: 10,
                              runSpacing: 10,
                              children: [
                                this.badge(`${examples.length} modules`),
                                this.badge('Live interactions'),
                                this.badge('Native rendering'),
                              ],
                            }),
                          ],
                        }),
                      }),
                      SizedBox({ height: 36 }),
                      text('Choose your playground', 26, colors.ink, true),
                      SizedBox({ height: 8 }),
                      text(
                        'Open a module. Try the controls. Make it your own.',
                        15,
                        colors.muted,
                      ),
                      SizedBox({ height: 24 }),
                      Wrap({
                        spacing: 20,
                        runSpacing: 20,
                        children: examples.map((entry) => {
                          const open = () => {
                            const preview = entry.create();
                            void Navigator.of(context).push(
                              MaterialPageRoute({
                                builder: (routeContext) =>
                                  Scaffold({
                                    appBar: AppBar({
                                      leading: BackButton({
                                        key: exampleKey('gallery-back'),
                                        onPressed: () =>
                                          Navigator.of(routeContext).pop(),
                                      }),
                                      title: Text(entry.title),
                                      backgroundColor:
                                        examplePalette(routeContext).background,
                                      scrolledUnderElevation: 0,
                                    }),
                                    body: preview,
                                  }),
                              }),
                            );
                          };
                          return SizedBox({
                            width: cardWidth,
                            child: Semantics({
                              button: true,
                              label: `Explore ${entry.title}`,
                              onTap: open,
                              excludeSemantics: true,
                              child: Card({
                                margin: EdgeInsets.zero,
                                elevation: 0,
                                color: colors.surface,
                                shape: RoundedRectangleBorder({
                                  borderRadius: BorderRadius.circular(20),
                                }),
                                child: InkWell({
                                  key: exampleKey(`open-${entry.id}`),
                                  borderRadius: BorderRadius.circular(20),
                                  onTap: open,
                                  child: Padding({
                                    padding: EdgeInsets.all(24),
                                    child: Column({
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row({
                                          children: [
                                            Container({
                                              width: 44,
                                              height: 44,
                                              alignment: Alignment.center,
                                              decoration: BoxDecoration({
                                                color: Color(entry.color),
                                                borderRadius: BorderRadius.circular(13),
                                              }),
                                              child: text(
                                                entry.mark,
                                                21,
                                                exampleColors.surface,
                                                true,
                                              ),
                                            }),
                                            SizedBox({ width: 14 }),
                                            Expanded({
                                              child: text(
                                                entry.tag,
                                                10,
                                                colors.muted,
                                                true,
                                              ),
                                            }),
                                            text('↗', 23, colors.muted),
                                          ],
                                        }),
                                        SizedBox({ height: 24 }),
                                        text(entry.title, 23, colors.ink, true),
                                        SizedBox({ height: 8 }),
                                        text(entry.description, 14, colors.muted),
                                        SizedBox({ height: 18 }),
                                        text(
                                          `Explore ${entry.title}`,
                                          13,
                                          colors.green,
                                          true,
                                        ),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          });
                        }),
                      }),
                      SizedBox({ height: 32 }),
                      text(
                        'One gallery. Independent examples. Built with Flax.',
                        12,
                        colors.muted,
                      ),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
      }),
    });
  }

  badge(value: string): Widget {
    return Container({
      padding: EdgeInsets.symmetric({ horizontal: 12, vertical: 7 }),
      decoration: BoxDecoration({
        color: Color(0xff386c56),
        borderRadius: BorderRadius.circular(30),
      }),
      child: text(value, 12, exampleColors.surface),
    });
  }
}

runApp(
  MaterialApp({
    title: 'Flax Playground',
    debugShowCheckedModeBanner: false,
    theme: ThemeData({
      colorScheme: ColorScheme.fromSeed({ seedColor: exampleColors.green }),
      useMaterial3: true,
    }),
    darkTheme: ThemeData({
      colorScheme: ColorScheme.fromSeed({
        seedColor: exampleColors.green,
        brightness: Brightness.dark,
      }),
      useMaterial3: true,
    }),
    home: new GalleryHome(),
  }),
);
