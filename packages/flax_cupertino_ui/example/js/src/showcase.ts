import { Brightness, Color } from '@flax/dart/ui';
import {
  exampleColors,
  exampleKey,
  examplePage,
  section,
  text,
} from '@flax/example-core/ui';
import { EdgeInsets } from '@flax/flutter/painting';
import {
  Center,
  Column,
  CrossAxisAlignment,
  Navigator,
  SafeArea,
  SizedBox,
  State,
  StatefulWidget,
  Text,
  TextEditingController,
  Wrap,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';
import {
  CupertinoActionSheet,
  CupertinoActionSheetAction,
  CupertinoActivityIndicator,
  CupertinoAlertDialog,
  CupertinoApp,
  CupertinoButton,
  CupertinoDialogAction,
  CupertinoListSection,
  CupertinoListTile,
  CupertinoNavigationBar,
  CupertinoPageRoute,
  CupertinoPageScaffold,
  CupertinoSearchTextField,
  CupertinoSegmentedControl,
  CupertinoSlider,
  CupertinoSlidingSegmentedControl,
  CupertinoSwitch,
  CupertinoTextField,
  CupertinoThemeData,
  showCupertinoDialog,
  showCupertinoModalPopup,
} from '@flax/cupertino-ui';

export const cupertinoCollections = ['Controls', 'Forms', 'Lists', 'Overlays'] as const;
type Collection = (typeof cupertinoCollections)[number];

export function createCupertinoExample(): Widget {
  return CupertinoApp({
    title: 'Cupertino collection',
    debugShowCheckedModeBanner: false,
    theme: CupertinoThemeData({
      primaryColor: Color(0xff2566d8),
      brightness: Brightness.light,
    }),
    home: new CupertinoCollection(),
  });
}

class CupertinoCollection extends StatefulWidget {
  createState(): State<CupertinoCollection> {
    return new CupertinoCollectionState();
  }
}

class CupertinoCollectionState extends State<CupertinoCollection> {
  collection: Collection = 'Controls';
  enabled = true;
  volume = 0.5;
  segment = 'Today';
  clicks = 0;
  result = 'Choose an action to see its result.';
  query = '';
  editing!: TextEditingController;

  initState(): void {
    super.initState();
    this.editing = TextEditingController({ text: 'Alex Morgan' });
  }

  build(_context: BuildContext): Widget {
    const content = {
      Controls: () => this.controls(),
      Forms: () => this.forms(),
      Lists: () => this.lists(),
      Overlays: () => this.overlays(),
    };
    return CupertinoPageScaffold({
      backgroundColor: exampleColors.background,
      navigationBar: CupertinoNavigationBar({ middle: Text('Cupertino collection') }),
      child: SafeArea({
        child: examplePage(
          'Cupertino UI / component collection',
          'Quiet details. Native feel.',
          'Explore iOS-style controls, grouped lists, forms and overlays. Everything here is interactive.',
          [
            CupertinoSegmentedControl<string>({
              children: new Map(cupertinoCollections.map((name) => [name, Text(name)])),
              groupValue: this.collection,
              onValueChanged: (value) =>
                this.setState(() => (this.collection = value as Collection)),
            }),
            SizedBox({ height: 24 }),
            content[this.collection](),
          ],
        ),
      }),
    });
  }

  controls(): Widget {
    return section(
      'Familiar at first touch',
      'Buttons, a switch, a slider and a sliding segmented control.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap({
            spacing: 12,
            runSpacing: 12,
            children: [
              CupertinoButton.filled({
                onPressed: () => this.setState(() => this.clicks++),
                child: Text('Filled button'),
              }),
              CupertinoButton.tinted({
                onPressed: () => this.setState(() => this.clicks++),
                child: Text('Tinted button'),
              }),
              CupertinoButton({
                onPressed: () => this.setState(() => this.clicks++),
                child: Text('Plain button'),
              }),
              CupertinoButton({ onPressed: null, child: Text('Disabled') }),
            ],
          }),
          SizedBox({ height: 18 }),
          text(`Button presses: ${this.clicks}`),
          SizedBox({ height: 22 }),
          CupertinoSwitch({
            key: exampleKey('cupertino-switch'),
            value: this.enabled,
            onChanged: (value) => this.setState(() => (this.enabled = value)),
          }),
          SizedBox({ height: 10 }),
          text(this.enabled ? 'Notifications on' : 'Notifications off'),
          SizedBox({ height: 18 }),
          text(`Volume: ${Math.round(this.volume * 100)}%`),
          CupertinoSlider({
            value: this.volume,
            divisions: 10,
            onChanged: (value) => this.setState(() => (this.volume = value)),
          }),
          SizedBox({ height: 18 }),
          CupertinoSlidingSegmentedControl<string>({
            children: new Map([
              ['Today', Text('Today')],
              ['Week', Text('Week')],
              ['Month', Text('Month')],
            ]),
            groupValue: this.segment,
            onValueChanged: (value) => {
              if (value !== null) this.setState(() => (this.segment = value));
            },
          }),
          SizedBox({ height: 12 }),
          text(`Showing: ${this.segment}`),
        ],
      }),
    );
  }

  forms(): Widget {
    return section(
      'Space for your words',
      'Text editing, clear buttons, search and live results.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          text('Your name', 14),
          SizedBox({ height: 10 }),
          CupertinoTextField({
            key: exampleKey('cupertino-name'),
            controller: this.editing,
            placeholder: 'Your name',
            padding: EdgeInsets.all(16),
            onChanged: () => this.setState(() => {}),
          }),
          SizedBox({ height: 16 }),
          text(`Hello, ${this.editing.text || 'friend'}.`, 18),
          SizedBox({ height: 24 }),
          CupertinoSearchTextField({
            key: exampleKey('cupertino-search'),
            placeholder: 'Search the collection',
            onChanged: (value) => this.setState(() => (this.query = value)),
          }),
          SizedBox({ height: 14 }),
          text(
            this.query
              ? `Searching for “${this.query}”`
              : 'Type to try live search feedback.',
          ),
        ],
      }),
    );
  }

  lists(): Widget {
    return section(
      'A place for everything',
      'Grouped settings, accessory text and a native page transition.',
      CupertinoListSection.insetGrouped({
        margin: EdgeInsets.zero,
        header: Text('YOUR WORKSPACE'),
        footer: Text('Settings remain local to this preview.'),
        children: [
          CupertinoListTile({
            title: Text('Profile'),
            subtitle: Text('Alex Morgan'),
            additionalInfo: Text('View'),
            onTap: () => {
              void Navigator.of(this.context).push(
                CupertinoPageRoute({
                  builder: (context) =>
                    CupertinoPageScaffold({
                      navigationBar: CupertinoNavigationBar({
                        middle: Text('Profile'),
                      }),
                      child: Center({
                        child: CupertinoButton({
                          onPressed: () => Navigator.of(context).pop(),
                          child: Text('Back to collection'),
                        }),
                      }),
                    }),
                }),
              );
            },
          }),
          CupertinoListTile({
            title: Text('Notifications'),
            trailing: CupertinoSwitch({
              value: this.enabled,
              onChanged: (value) => this.setState(() => (this.enabled = value)),
            }),
          }),
          CupertinoListTile({
            title: Text('Appearance'),
            additionalInfo: Text('Light'),
          }),
        ],
      }),
    );
  }

  overlays(): Widget {
    return section(
      'Small moments of focus',
      'Alerts, action sheets and progress feedback.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap({
            spacing: 12,
            runSpacing: 12,
            children: [
              CupertinoButton.filled({
                onPressed: () => {
                  void this.openAlert();
                },
                child: Text('Open alert'),
              }),
              CupertinoButton.tinted({
                onPressed: () => {
                  void this.openSheet();
                },
                child: Text('Open action sheet'),
              }),
            ],
          }),
          SizedBox({ height: 24 }),
          text(this.result),
          SizedBox({ height: 24 }),
          CupertinoActivityIndicator.partiallyRevealed({ progress: 0.7, radius: 16 }),
        ],
      }),
    );
  }

  async openAlert(): Promise<void> {
    const accepted = await showCupertinoDialog<boolean>({
      context: this.context,
      useRootNavigator: false,
      builder: (context) =>
        CupertinoAlertDialog({
          title: Text('Save this collection?'),
          content: Text('You can come back to your favorites anytime.'),
          actions: [
            CupertinoDialogAction({
              onPressed: () => Navigator.of(context).pop(false),
              child: Text('Cancel'),
            }),
            CupertinoDialogAction({
              isDefaultAction: true,
              onPressed: () => Navigator.of(context).pop(true),
              child: Text('Save'),
            }),
          ],
        }),
    });
    if (this.mounted)
      this.setState(
        () =>
          (this.result = accepted === true ? 'Collection saved.' : 'Nothing saved.'),
      );
  }

  async openSheet(): Promise<void> {
    const choice = await showCupertinoModalPopup<string>({
      context: this.context,
      useRootNavigator: false,
      builder: (context) =>
        CupertinoActionSheet({
          title: Text('Share your work'),
          message: Text('Choose how to share this collection.'),
          actions: [
            CupertinoActionSheetAction({
              onPressed: () => Navigator.of(context).pop('Link copied.'),
              child: Text('Copy link'),
            }),
          ],
          cancelButton: CupertinoActionSheetAction({
            onPressed: () => Navigator.of(context).pop(),
            child: Text('Cancel'),
          }),
        }),
    });
    if (this.mounted)
      this.setState(() => (this.result = choice ?? 'Sharing cancelled.'));
  }

  dispose(): void {
    this.editing.dispose();
    super.dispose();
  }
}
