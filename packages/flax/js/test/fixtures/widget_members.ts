import { dartType, dartTypes } from '@flax/core/bindings';
import {
  ComputedWidget,
  FinalComputedWidget,
  WidgetMemberBase,
  GenericComputedWidget,
  createGenericComputedWidget,
  createReturnedComputedWidget,
  AggregateComputedWidget,
  createListComputedWidget,
  createSetComputedWidget,
} from '../../../.dart_tool/flax/ui/widget_members_bindings.js';
import { Column, registerPage } from '@flax/flutter/widgets';

let widget: ReturnType<typeof ComputedWidget> | undefined = ComputedWidget('hello');
let finalWidget: ReturnType<typeof FinalComputedWidget> | undefined =
  FinalComputedWidget('final');
let returned: ReturnType<typeof createReturnedComputedWidget> | undefined =
  createReturnedComputedWidget();
let pending = 0;
let rejected = 0;

registerPage('widgetMembers', () =>
  Column({ children: [widget!, finalWidget!, returned!] }),
);
Object.assign(globalThis, {
  widgetMemberHooks: {
    trackedLength: () => widget!.trackedLength,
    pending: () => pending,
    rejected: () => rejected,
    exercise() {
      const generic = dartType(GenericComputedWidget, dartTypes.string)('typed');
      const aggregate = dartType(
        AggregateComputedWidget,
        dartTypes.list(dartTypes.string),
      )(['list']);
      if (
        widget!.uppercase !== 'HELLO' ||
        widget!.textLength() !== 5 ||
        widget!.repeatLength(2) !== 11 ||
        widget!.repeatLength(2, { extra: 3 }) !== 13 ||
        widget!.callWith((value) => value + 1) !== 6 ||
        widget!.echo(widget!) !== widget ||
        widget!.asBase() !== widget ||
        !(widget instanceof ComputedWidget) ||
        !(widget instanceof WidgetMemberBase) ||
        finalWidget!.uppercase !== 'FINAL' ||
        finalWidget!.textLength() !== 5 ||
        returned!.uppercase !== 'RETURNED' ||
        ComputedWidget.named('named').uppercase !== 'NAMED' ||
        generic.value !== 'typed' ||
        generic.echo('next') !== 'next' ||
        createGenericComputedWidget().value !== 'generic' ||
        aggregate.items.get(0) !== 'list' ||
        aggregate.echo(['next']).get(0) !== 'next' ||
        createListComputedWidget().items.get(0) !== 'list' ||
        !createSetComputedWidget().items.contains('set')
      )
        throw new Error('Automatic Widget members');
      for (const invoke of [
        () => ComputedWidget(undefined as never),
        () => ComputedWidget(null as never),
        () => ComputedWidget(3 as never),
        () => Reflect.construct(ComputedWidget, ['invalid']),
        () => widget!.repeatLength('invalid' as never),
        () => Reflect.apply(widget!.repeatLength, widget, []),
        () => Reflect.apply(widget!.repeatLength, widget, [1, {}, 3]),
        () => widget!.textLength.call({} as never),
        () => widget!.echo(finalWidget as never),
        () => widget!.failure,
      ]) {
        try {
          invoke();
        } catch {
          rejected++;
          continue;
        }
        throw new Error('Invalid Widget operation accepted');
      }
      widget!.later().then((value) => {
        if (value !== 'HELLO') throw new Error('Widget Future result');
        pending++;
      });
      (async () => {
        for await (const value of widget!.lengths) {
          if (value !== 5) throw new Error('Widget Stream result');
        }
        pending++;
      })();
    },
    release() {
      widget = undefined;
      finalWidget = undefined;
      returned = undefined;
    },
  },
});
