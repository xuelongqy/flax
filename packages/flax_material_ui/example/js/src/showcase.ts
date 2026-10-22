import { Duration } from '@flax/dart/core';
import { Color } from '@flax/dart/ui';
import {
  exampleColors,
  exampleKey,
  examplePage,
  section,
  text,
} from '@flax/example-core/ui';
import { BorderRadius, EdgeInsets } from '@flax/flutter/painting';
import {
  Center,
  Column,
  CrossAxisAlignment,
  Expanded,
  Icon,
  Navigator,
  Padding,
  Row,
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
  AlertDialog,
  AppBar,
  Badge,
  Card,
  Checkbox,
  Chip,
  ChoiceChip,
  CircleAvatar,
  CircularProgressIndicator,
  ColorScheme,
  Divider,
  DropdownButton,
  DropdownMenuItem,
  ElevatedButton,
  FilledButton,
  FilterChip,
  IconButton,
  Icons,
  InputDecoration,
  LinearProgressIndicator,
  ListTile,
  MaterialApp,
  MaterialPageRoute,
  OutlinedButton,
  OutlineInputBorder,
  Scaffold,
  ScaffoldMessenger,
  Slider,
  SnackBar,
  Switch,
  TextButton,
  TextField,
  ThemeData,
  showDialog,
} from '@flax/material-ui';

export const materialCollections = [
  'Buttons',
  'Inputs',
  'Selection',
  'Feedback',
  'Surfaces',
] as const;
type Collection = (typeof materialCollections)[number];

export function createMaterialExample(): Widget {
  return MaterialApp({
    title: 'Material collection',
    debugShowCheckedModeBanner: false,
    theme: ThemeData({
      colorScheme: ColorScheme.fromSeed({ seedColor: exampleColors.green }),
      scaffoldBackgroundColor: exampleColors.background,
      useMaterial3: true,
    }),
    home: new MaterialCollection(),
  });
}

class MaterialCollection extends StatefulWidget {
  createState(): State<MaterialCollection> {
    return new MaterialCollectionState();
  }
}

class MaterialCollectionState extends State<MaterialCollection> {
  collection: Collection = 'Buttons';
  clicks = 0;
  enabled = true;
  checked = true;
  selected = false;
  progress = 0.6;
  destination = 'Design';
  feedback = 'Ready when you are.';
  name = 'Alex Morgan';
  editing!: TextEditingController;

  initState(): void {
    super.initState();
    this.editing = TextEditingController({ text: this.name });
  }

  build(_context: BuildContext): Widget {
    const content = {
      Buttons: () => this.buttons(),
      Inputs: () => this.inputs(),
      Selection: () => this.selection(),
      Feedback: () => this.feedbackControls(),
      Surfaces: () => this.surfaces(),
    };
    return Scaffold({
      body: examplePage(
        'Material UI / component collection',
        'Material, in full color.',
        'Native Material controls, live state and thoughtful defaults. Choose a collection and try every control.',
        [
          Wrap({
            spacing: 8,
            runSpacing: 8,
            children: materialCollections.map((name) =>
              ChoiceChip({
                key: exampleKey(`material-${name.toLowerCase()}`),
                label: Text(name),
                selected: this.collection === name,
                onSelected: () => this.setState(() => (this.collection = name)),
              }),
            ),
          }),
          SizedBox({ height: 24 }),
          content[this.collection](),
        ],
      ),
    });
  }

  buttons(): Widget {
    const pressed = () => this.setState(() => this.clicks++);
    return section(
      'A button for every moment',
      'Filled, tonal, elevated, outlined, text, icon and disabled states.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap({
            spacing: 12,
            runSpacing: 14,
            children: [
              FilledButton({ onPressed: pressed, child: Text('Filled button') }),
              FilledButton.tonal({ onPressed: pressed, child: Text('Tonal button') }),
              ElevatedButton({ onPressed: pressed, child: Text('Elevated button') }),
              OutlinedButton({ onPressed: pressed, child: Text('Outlined button') }),
              TextButton({ onPressed: pressed, child: Text('Text button') }),
              IconButton({
                onPressed: pressed,
                tooltip: 'Add item',
                icon: Icon(Icons.add),
              }),
              FilledButton({ onPressed: null, child: Text('Disabled') }),
            ],
          }),
          SizedBox({ height: 26 }),
          text(`Button presses: ${this.clicks}`, 17, exampleColors.green, true),
        ],
      }),
    );
  }

  inputs(): Widget {
    return section(
      'Make it personal',
      'Text editing, decoration, dropdowns and read-only values.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TextField({
            key: exampleKey('material-name'),
            controller: this.editing,
            decoration: InputDecoration({
              labelText: 'Your name',
              hintText: 'How should we call you?',
              border: OutlineInputBorder({ borderRadius: BorderRadius.circular(12) }),
            }),
            onChanged: (value) => this.setState(() => (this.name = value)),
          }),
          SizedBox({ height: 18 }),
          text(`Hello, ${this.name || 'friend'}.`, 18, exampleColors.green, true),
          SizedBox({ height: 18 }),
          DropdownButton<string>({
            value: this.destination,
            isExpanded: true,
            items: ['Design', 'Development', 'Research'].map((value) =>
              DropdownMenuItem<string>({
                value,
                child: Text(value),
              }),
            ),
            onChanged: (value) => {
              if (value !== null) this.setState(() => (this.destination = value));
            },
          }),
          SizedBox({ height: 18 }),
          TextField({
            enabled: false,
            decoration: InputDecoration({
              labelText: 'Read-only preview',
              hintText: 'Unavailable field',
            }),
          }),
        ],
      }),
    );
  }

  selection(): Widget {
    return section(
      'A little more control',
      'Switch, checkbox, filter chip and a continuously updating slider.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row({
            children: [
              Switch({
                key: exampleKey('material-switch'),
                value: this.enabled,
                onChanged: (value) => this.setState(() => (this.enabled = value)),
              }),
              SizedBox({ width: 12 }),
              Expanded({
                child: text(this.enabled ? 'Notifications on' : 'Notifications off'),
              }),
            ],
          }),
          Row({
            children: [
              Checkbox({
                value: this.checked,
                onChanged: (value) =>
                  this.setState(() => (this.checked = value ?? false)),
              }),
              SizedBox({ width: 12 }),
              Expanded({
                child: text(
                  this.checked
                    ? 'Weekly digest selected'
                    : 'Weekly digest not selected',
                ),
              }),
            ],
          }),
          SizedBox({ height: 14 }),
          FilterChip({
            label: Text('Include archived'),
            selected: this.selected,
            onSelected: (value) => this.setState(() => (this.selected = value)),
          }),
          SizedBox({ height: 20 }),
          text(`Volume: ${Math.round(this.progress * 100)}%`),
          Slider({
            value: this.progress,
            divisions: 10,
            label: `${Math.round(this.progress * 100)}%`,
            onChanged: (value) => this.setState(() => (this.progress = value)),
          }),
        ],
      }),
    );
  }

  feedbackControls(): Widget {
    return section(
      'Keep people in the loop',
      'Dialogs, snackbars, badges and determinate progress.',
      Column({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap({
            spacing: 12,
            runSpacing: 12,
            children: [
              FilledButton({
                onPressed: () => {
                  void this.openDialog();
                },
                child: Text('Open dialog'),
              }),
              OutlinedButton({
                onPressed: () =>
                  ScaffoldMessenger.of(this.context).showSnackBar(
                    SnackBar({
                      content: Text('Saved. Your changes are up to date.'),
                      duration: Duration({ seconds: 3 }),
                    }),
                  ),
                child: Text('Show snackbar'),
              }),
              Badge({ label: Text('3'), child: Icon(Icons.notifications_outlined) }),
            ],
          }),
          SizedBox({ height: 24 }),
          text(this.feedback),
          SizedBox({ height: 24 }),
          LinearProgressIndicator({ value: 0.64 }),
          SizedBox({ height: 20 }),
          CircularProgressIndicator({ value: 0.64 }),
        ],
      }),
    );
  }

  async openDialog(): Promise<void> {
    const accepted = await showDialog<boolean>({
      context: this.context,
      useRootNavigator: false,
      builder: (context) =>
        AlertDialog({
          title: Text('Ready to publish?'),
          content: Text(
            'This is a real Flutter dialog opened by a JavaScript callback.',
          ),
          actions: [
            TextButton({
              onPressed: () => Navigator.of(context).pop(false),
              child: Text('Not yet'),
            }),
            FilledButton({
              onPressed: () => Navigator.of(context).pop(true),
              child: Text('Publish'),
            }),
          ],
        }),
    });
    if (this.mounted)
      this.setState(
        () =>
          (this.feedback =
            accepted === true ? 'Published. Looking good!' : 'Nothing published.'),
      );
  }

  surfaces(): Widget {
    return section(
      'Give content a home',
      'Cards, list tiles, avatars and native route transitions.',
      Card({
        color: Color(0xffeef3ea),
        elevation: 0,
        child: Padding({
          padding: EdgeInsets.all(16),
          child: Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Wrap({
                spacing: 8,
                children: [
                  Chip({ label: Text('Featured') }),
                  Chip({ label: Text('Native widgets') }),
                ],
              }),
              ListTile({
                contentPadding: EdgeInsets.zero,
                leading: CircleAvatar({ child: Text('AM') }),
                title: Text('An idea worth exploring'),
                subtitle: Text('Open a real Flutter route'),
                trailing: Icon(Icons.arrow_forward),
                onTap: () => {
                  void Navigator.of(this.context).push(
                    MaterialPageRoute({
                      builder: (context) =>
                        Scaffold({
                          appBar: AppBar({ title: Text('A closer look') }),
                          body: Center({
                            child: FilledButton({
                              onPressed: () => Navigator.of(context).pop(),
                              child: Text('Back to collection'),
                            }),
                          }),
                        }),
                    }),
                  );
                },
              }),
              Divider(),
              text(
                'A familiar interface, authored in JavaScript.',
                14,
                exampleColors.muted,
              ),
            ],
          }),
        }),
      }),
    );
  }

  dispose(): void {
    this.editing.dispose();
    super.dispose();
  }
}
