import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  Container,
  Expanded,
  ListView,
  Navigator,
  PreferredSize,
  Row,
  Size,
  StatelessWidget,
  Text,
  TextEditingController,
  FocusNode,
  ValueKey,
  registerPage,
  type BuildContext,
} from '@flax/core/flutter';
import {
  AlertDialog,
  AppBar,
  Scaffold,
  TextButton,
  TextField,
  Theme,
  showDialog,
} from '@flax/material-ui';

class DemoToolbar extends StatelessWidget {
  build(context: BuildContext) {
    return Row({
      children: [
        TextButton({
          onPressed: () => Navigator.of(context).pop(),
          child: Text('Back to host'),
        }),
        Text('Custom JS toolbar'),
      ],
    });
  }
}

registerPage('scaffold', (_, lifecycle) => {
  const controller = TextEditingController({ text: 'Page-owned input' });
  const focus = FocusNode();
  lifecycle.onDispose(() => {
    focus.dispose();
    controller.dispose();
  });
  const title = signal('JS Scaffold');
  const height = signal(56);
  const bottom = signal(false);
  const custom = signal(false);
  const count = signal(0);
  const dialogCount = signal(0);
  const dialogResult = signal('No dialog result');
  const body = Column({
    children: [
      TextField({ key: ValueKey('scaffold-input'), controller, focusNode: focus }),
      Builder({
        builder: (context) =>
          Row({
            children: [
              TextButton({
                child: Text('Open generated dialog'),
                onPressed: async () => {
                  const result = await showDialog({
                    context,
                    builder: (dialogContext) =>
                      AlertDialog({
                        title: Text('Generated dialog'),
                        content: Text(bind(() => `Dialog count: ${dialogCount.value}`)),
                        actions: [
                          TextButton({
                            onPressed: () => dialogCount.value++,
                            child: Text('Update dialog value'),
                          }),
                          TextButton({
                            onPressed: () =>
                              Navigator.of(dialogContext).pop({
                                count: dialogCount.value,
                              }),
                            child: Text('Accept generated dialog'),
                          }),
                        ],
                      }),
                  });
                  dialogResult.value = `Dialog result: ${JSON.stringify(result)}`;
                },
              }),
              Text(dialogResult.bind),
            ],
          }),
      }),
      Row({
        children: [
          TextButton({ onPressed: () => count.value++, child: Text('Page count') }),
          Text(bind(() => `Page count: ${count.value}`)),
          TextButton({
            onPressed: () =>
              (title.value =
                title.value === 'JS Scaffold' ? 'Updated JS title' : 'JS Scaffold'),
            child: Text('Change title'),
          }),
        ],
      }),
      Row({
        children: [
          TextButton({
            onPressed: () => (height.value = height.value === 56 ? 96 : 56),
            child: Text('Change bar height'),
          }),
          TextButton({
            onPressed: () => (bottom.value = !bottom.value),
            child: Text('Toggle bar bottom'),
          }),
          TextButton({
            onPressed: () => (custom.value = !custom.value),
            child: Text('Toggle custom bar'),
          }),
        ],
      }),
      Text('Static page content'),
      Expanded({
        child: ListView.builder({
          itemCount: 100,
          itemExtent: 40,
          itemBuilder: (_, index) =>
            Text(`Page row ${index}`, { key: ValueKey(index) }),
        }),
      }),
    ],
  });
  return Builder({
    builder: (context) => {
      const scheme = Theme.of(context).colorScheme;
      return Scaffold({
        appBar: bind(() =>
          custom.value
            ? PreferredSize({
                key: ValueKey('custom-bar'),
                preferredSize: Size.fromHeight(height.value),
                child: Container({ color: scheme.surface, child: new DemoToolbar() }),
              })
            : AppBar({
                key: ValueKey('app-bar'),
                toolbarHeight: height.value,
                backgroundColor: bottom.value ? scheme.primary : scheme.surface,
                foregroundColor: bottom.value ? scheme.onPrimary : scheme.onSurface,
                title: Text(title.bind),
                bottom: bottom.value
                  ? PreferredSize({
                      preferredSize: Size.fromHeight(24),
                      child: Text('Extra bar content'),
                    })
                  : null,
              }),
        ),
        body,
      });
    },
  });
});
