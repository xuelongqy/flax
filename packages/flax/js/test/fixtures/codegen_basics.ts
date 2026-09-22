import * as interop from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { CoreValuePeer } from '../../../.dart_tool/flax/ui/repeated_bindings.js';
import { DateTime, Uri, StringBuffer } from '@flax/dart/core';
import { Text, registerPage } from '@flax/flutter/widgets';
import type {
  CodegenOnChangedInput,
  CodegenNamesInput,
  CodegenAttributesInput,
  CodegenTransformInput,
  CodegenMapperInput,
  CodegenItems,
  CodegenItemsInput,
  CodegenGenericMapperInput,
  CodegenConverterInput,
  CodegenAsyncMapperInput,
  CodegenAsyncGenericMapperInput,
} from '../../../.dart_tool/flax/ui/interop_bindings.js';
import type { ValueChangedInput, ValueGetterInput } from '@flax/flutter/foundation';

function genericAliasRoundtrip() {
  const consumer = interop.CodegenGenericAliasConsumer();
  const mapper: CodegenMapperInput<number> = (value) => value + 2;
  const generic: CodegenGenericMapperInput = <T>(value: T): T => value;
  const converter: CodegenConverterInput<number> = <U extends number>(
    value: U,
  ): number => value + 1;
  const items: CodegenItemsInput<number> = [1, 2];
  const keepItems: CodegenMapperInput<CodegenItems<number>> = (values) => values;
  const later: CodegenAsyncMapperInput<number> = async (value) => value + 3;
  const genericLater: CodegenAsyncGenericMapperInput = async <T>(
    value: T,
  ): Promise<T> => value;
  let changed = 0;
  const onChanged: ValueChangedInput<number> = (value) => {
    changed = value;
  };
  const getter: ValueGetterInput<number> = () => 23;
  consumer.foundation(onChanged, getter);
  consumer.callbacks.add(generic);
  return {
    consumer,
    mapped: consumer.map(mapper, 3),
    generic: consumer.generic(generic, 7),
    inline: consumer.inline(generic, 7),
    converted: consumer.convert(converter, 8),
    items: consumer.collection(keepItems, items),
    changed,
    returned: consumer.identity<number>(11),
    later: consumer.later(later, 10),
    genericLater: consumer.genericLater(genericLater, 17),
  };
}

function aliasRoundtrip() {
  let seen = 0;
  const onChanged: CodegenOnChangedInput = (value) => {
    seen = value;
  };
  const names: CodegenNamesInput = ['one', 'two'];
  const attributes: CodegenAttributesInput = { key: 'value' };
  const consumer = interop.CodegenAliasConsumer(onChanged, names, attributes);
  consumer.notify(7);
  const transform: CodegenTransformInput = (values) => [`length=${values.length}`];
  return { seen, consumer, result: consumer.transform(transform) };
}

function recordRoundtrip() {
  const records = interop.RecordInterop();
  const token = interop.Token(41);
  const input = { $1: 7, $2: 'seven' };
  const positional = records.echo(input);
  const named = records.echoNamed({ id: 8, name: 'eight' });
  const mixed = records.echoMixed({ $1: 9, enabled: true, name: 'nine' });
  const nullable = records.echoNullable({ $1: null, $2: 'nullable' });
  const nullValue = records.echoNullable(null);
  const nested = records.nested({
    $1: { $1: 10, $2: 'ten' },
    token,
  });
  const sameToken = records.sameToken({ $1: token, $2: 1 }, token);
  const list = records.echoList([{ $1: 11, $2: 'eleven' }]);
  const callback = records.apply(
    (value) => ({ $1: value.$1 + 1, $2: `${value.$2}!` }),
    { $1: 12, $2: 'twelve' },
  );
  const extraInput = { $1: 13, $2: 'thirteen', ignored: true };
  const extra = records.echo(extraInput);
  const future = records.later({ $1: 14, $2: 'fourteen' });
  return {
    records,
    token,
    input,
    positional,
    named,
    mixed,
    nullable,
    nullValue,
    nested,
    sameToken,
    list,
    callback,
    extra,
    future,
  };
}

Object.assign(globalThis, {
  interop,
  CoreValuePeer,
  DateTime,
  Uri,
  StringBuffer,
  aliasRoundtrip,
  genericAliasRoundtrip,
  recordRoundtrip,
});
registerPage('codegen-basics', () => Text('Codegen basics'));
