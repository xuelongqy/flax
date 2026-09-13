import {
  Column,
  Duration,
  EventSink,
  Stream,
  StreamBuilder,
  StreamConsumer,
  StreamController,
  StreamIterator,
  StreamTransformer,
  StreamTransformerBase,
  StreamView,
  Text,
  registerPage,
} from '@flax/core/flutter';
import { signal } from '@flax/core';

const hooks: Record<string, unknown> = {
  sourceIterations: 0,
  sourceNext: 0,
  sourceReturns: 0,
  transformed: [] as number[],
};

const source = {
  [Symbol.asyncIterator]() {
    hooks.sourceIterations = (hooks.sourceIterations as number) + 1;
    let value = 0;
    return {
      async next() {
        hooks.sourceNext = (hooks.sourceNext as number) + 1;
        value++;
        return value <= 2
          ? { value, done: false as const }
          : { value: undefined, done: true as const };
      },
      async return() {
        hooks.sourceReturns = (hooks.sourceReturns as number) + 1;
        return { value: undefined, done: true as const };
      },
    };
  },
};

const asyncSource = Stream.fromAsyncIterable(source);
const pendingSource = {
  [Symbol.asyncIterator]() {
    return {
      next() {
        hooks.pendingSourceNext = Number(hooks.pendingSourceNext ?? 0) + 1;
        return new Promise<IteratorResult<number>>(() => {});
      },
      async return() {
        hooks.pendingSourceReturns = Number(hooks.pendingSourceReturns ?? 0) + 1;
        return { value: undefined, done: true as const };
      },
    };
  },
};
const pendingStream = Stream.fromAsyncIterable(pendingSource);
const pausedSource = {
  [Symbol.asyncIterator]() {
    let value = 0;
    return {
      async next() {
        hooks.pausedSourceNext = Number(hooks.pausedSourceNext ?? 0) + 1;
        value++;
        return value <= 2
          ? { value, done: false as const }
          : { value: undefined, done: true as const };
      },
    };
  },
};
const pausedStream = Stream.fromAsyncIterable(pausedSource);
Object.assign(hooks, {
  asyncSource,
  listenAsyncSource() {
    const values: number[] = [];
    hooks.asyncValues = values;
    return new Promise<void>((resolve, reject) => {
      asyncSource.listen((value) => values.push(value), {
        onError: reject,
        onDone: resolve,
      });
    });
  },
  async cancelPendingSource() {
    const subscription = pendingStream.listen(() => {});
    await subscription.cancel();
    hooks.pendingSourceCancelled = true;
  },
  startPausedSource() {
    const values: number[] = [];
    hooks.pausedSourceValues = values;
    hooks.pausedSourceDone = false;
    const subscription = pausedStream.listen((value) => values.push(value), {
      onDone() {
        hooks.pausedSourceDone = true;
      },
    });
    hooks.pausedSourceSubscription = subscription;
    subscription.pause();
  },
  resumePausedSource() {
    (hooks.pausedSourceSubscription as { resume(): void }).resume();
  },
  startCloseResources() {
    const controller = StreamController<number>({ sync: true });
    const values: number[] = [];
    controller.stream.listen((value) => values.push(value));
    pendingStream.listen(() => {});
    Object.assign(hooks, {
      closeController: controller,
      closeValues: values,
      closeResourcesStarted: true,
    });
  },
  async runOperators() {
    const result: Record<string, unknown> = {};
    hooks.operatorStage = 'start';
    result.empty = await Stream.empty<number>().isEmpty;
    result.value = await Stream.value(7).first;
    result.future = await Stream.fromFuture(Promise.resolve(8)).single;
    result.futures = (
      await Stream.fromFutures([Promise.resolve(1), Promise.resolve(2)]).toList()
    ).toArray();
    result.multi = (
      await Stream.multi<number>((controller) => {
        controller.addSync(3);
        controller.closeSync();
      }).toList()
    ).toArray();
    result.periodic = (
      await Stream.periodic<number>(Duration({ milliseconds: 1 }), (index) => index)
        .take(2)
        .toList()
    ).toArray();
    result.eventTransformed = (
      await Stream.eventTransformed<number>(Stream.fromIterable([1, 2]), (sink) =>
        EventSink.implement<number>([], {
          add(value) {
            sink.add(value * 3);
          },
          addError(error, stackTrace) {
            sink.addError(error, stackTrace);
          },
          close() {
            sink.close();
          },
        }),
      ).toList()
    ).toArray();
    hooks.operatorStage = 'factories';
    const values = () => Stream.fromIterable([1, 2, 2, 3]);
    hooks.operatorStage = 'where';
    result.filtered = (
      await values()
        .where((value) => value > 1)
        .toList()
    ).toArray();
    hooks.operatorStage = 'map';
    result.mapped = (
      await values()
        .map((value) => value * 2)
        .toList()
    ).toArray();
    hooks.operatorStage = 'asyncMap';
    hooks.syncAsyncMapCallbacks = 0;
    result.syncAsyncMapped = (
      await values()
        .asyncMap((value) => {
          hooks.syncAsyncMapCallbacks = Number(hooks.syncAsyncMapCallbacks) + 1;
          return value + 1;
        })
        .toList()
    ).toArray();
    hooks.operatorStage = 'asyncMap-promise';
    hooks.asyncMapCallbacks = 0;
    result.asyncMapped = (
      await values()
        .asyncMap(async (value) => {
          hooks.asyncMapCallbacks = Number(hooks.asyncMapCallbacks) + 1;
          return value + 1;
        })
        .toList()
    ).toArray();
    hooks.operatorStage = 'asyncExpand';
    result.asyncExpanded = (
      await Stream.fromIterable([1, 2])
        .asyncExpand((value) => Stream.fromIterable([value, value + 10]))
        .toList()
    ).toArray();
    hooks.operatorStage = 'expand';
    result.expanded = (
      await Stream.fromIterable([1, 2])
        .expand((value) => [value, value + 10])
        .toList()
    ).toArray();
    hooks.operatorStage = 'handleError';
    let handledStack = false;
    result.handled = (
      await Stream.error<number>(new Error('handled'))
        .handleError((_error, stack) => {
          handledStack = stack !== undefined && stack.toString().length >= 0;
        })
        .toList()
    ).toArray();
    result.handledStack = handledStack;
    hooks.operatorStage = 'transformations';
    result.reduce = await values().reduce((a, b) => a + b);
    result.fold = await values().fold(10, (a, b) => a + b);
    result.join = await values().join('-');
    result.contains = await values().contains(3);
    let forEachTotal = 0;
    await values().forEach((value) => {
      forEachTotal += value;
    });
    result.forEach = forEachTotal;
    result.every = await values().every((value) => value > 0);
    result.any = await values().any((value) => value === 3);
    result.length = await values().length;
    result.last = await values().last;
    result.list = (await values().toList()).toArray();
    result.set = [...(await values().toSet()).toSet()];
    result.drain = await values().drain(12);
    result.take = (await values().take(2).toList()).toArray();
    result.takeWhile = (
      await values()
        .takeWhile((value) => value < 3)
        .toList()
    ).toArray();
    result.skip = (await values().skip(2).toList()).toArray();
    result.skipWhile = (
      await values()
        .skipWhile((value) => value < 3)
        .toList()
    ).toArray();
    result.distinct = (await values().distinct().toList()).toArray();
    result.firstWhere = await values().firstWhere((value) => value > 1);
    result.firstWhereFallback = await values().firstWhere((value) => value > 9, {
      orElse: () => 99,
    });
    result.lastWhere = await values().lastWhere((value) => value < 3);
    result.singleWhere = await values().singleWhere((value) => value === 3);
    result.elementAt = await values().elementAt(2);
    hooks.operatorStage = 'aggregates';
    result.cast = await Stream.castFrom<number, number>(values()).last;
    result.castInstance = await values().cast<number>().first;
    result.view = await StreamView(values()).first;

    const iterator = StreamIterator(Stream.fromIterable([4, 5]));
    const iterated: number[] = [];
    while (await iterator.moveNext()) iterated.push(iterator.current);
    result.iterator = iterated;
    hooks.operatorStage = 'iterator';

    const base = StreamTransformerBase.implement<number, number>([], {
      bind(stream) {
        return stream.map((value) => value + 20);
      },
    });
    result.baseTransformer = (
      await values().transform(base).take(1).toList()
    ).toArray();
    const directTransformer = StreamTransformer<number, number>(
      (stream, cancelOnError) =>
        stream.map((value) => value + 30).listen(null, { cancelOnError }),
    );
    result.directTransformer = (
      await values().transform(directTransformer).take(1).toList()
    ).toArray();
    result.fromBind = (
      await values()
        .transform(
          StreamTransformer.fromBind<number, number>((stream) =>
            stream.map((value) => value + 40),
          ),
        )
        .take(1)
        .toList()
    ).toArray();
    hooks.operatorStage = 'proxy-transformer';

    const piped: number[] = [];
    const consumer = StreamConsumer.implement<number>([], {
      async addStream(stream) {
        await stream.forEach((value) => piped.push(value));
        return null;
      },
      async close() {
        result.consumerClosed = true;
        return null;
      },
    });
    await Stream.fromIterable([6, 7]).pipe(consumer);
    result.broadcast = (
      await Stream.fromIterable([8, 9]).asBroadcastStream().toList()
    ).toArray();
    const timeoutController = StreamController<number>();
    const timeoutValues = timeoutController.stream
      .timeout(Duration({ milliseconds: 1 }), {
        onTimeout(sink) {
          sink.add(10);
          sink.close();
        },
      })
      .toList();
    result.timeout = (await timeoutValues).toArray();
    await timeoutController.close();
    hooks.operatorStage = 'pipe';
    result.piped = piped;
    Object.assign(hooks, { operatorResult: result, operatorsDone: true });
  },
  async runControllers() {
    const result: Record<string, unknown> = {};
    const lifecycle: string[] = [];
    const values: number[] = [];
    let resumePause!: () => void;
    let resumed!: () => void;
    const resumedEvent = new Promise<void>((resolve) => {
      resumed = resolve;
    });
    const controller = StreamController<number>({
      sync: true,
      onListen: () => lifecycle.push('listen'),
      onPause: () => lifecycle.push('pause'),
      onResume: () => lifecycle.push('resume'),
      onCancel: () => {
        lifecycle.push('cancel');
      },
    });
    result.initial = [
      controller.hasListener,
      controller.isPaused,
      controller.isClosed,
      typeof controller.onListen,
    ];
    const subscription = controller.stream.listen((value) => values.push(value));
    result.sinkIdentity = controller.sink === controller;
    lifecycle.push('before-add');
    controller.sink.add(1);
    lifecycle.push(`after-add:${values.join(',')}`);
    subscription.onData((value) => {
      values.push(value * 10);
      if (value === 3) resumed();
    });
    controller.add(2);
    const resumeSignal = new Promise<void>((resolve) => {
      resumePause = resolve;
    });
    subscription.pause(resumeSignal);
    subscription.pause();
    controller.add(3);
    result.paused = subscription.isPaused;
    result.beforeResume = [...values];
    subscription.resume();
    result.nestedPaused = subscription.isPaused;
    resumePause();
    await resumedEvent;
    result.afterResume = [...values];
    await subscription.cancel();
    result.afterCancel = [controller.hasListener, controller.isPaused];
    const controllerDone = controller.done;
    await controller.close();
    await controllerDone;
    result.afterClose = controller.isClosed;
    result.lifecycle = lifecycle;

    const asyncValues: number[] = [];
    let finishAsync!: () => void;
    const asyncDone = new Promise<void>((resolve) => {
      finishAsync = resolve;
    });
    const asyncController = StreamController<number>();
    asyncController.stream.listen((value) => asyncValues.push(value), {
      onDone: finishAsync,
    });
    asyncController.add(4);
    result.asyncImmediate = [...asyncValues];
    void asyncController.close();
    await asyncDone;
    result.asyncValues = asyncValues;

    const errors: string[] = [];
    const afterError: number[] = [];
    let finishErrors!: () => void;
    const errorsDone = new Promise<void>((resolve) => {
      finishErrors = resolve;
    });
    const errorController = StreamController<number>({ sync: true });
    errorController.stream.listen((value) => afterError.push(value), {
      onError(error, stackTrace) {
        errors.push(`${String(error)}:${stackTrace !== undefined}`);
      },
      onDone: finishErrors,
      cancelOnError: false,
    });
    errorController.addError(new Error('controller-error'));
    errorController.add(5);
    void errorController.close();
    await errorsDone;
    result.errors = errors;
    result.afterError = afterError;

    const first: number[] = [];
    const second: number[] = [];
    const broadcast = StreamController.broadcast<number>({ sync: true });
    broadcast.add(0);
    const firstSubscription = broadcast.stream.listen((value) => first.push(value));
    broadcast.stream.listen((value) => second.push(value));
    broadcast.add(6);
    await firstSubscription.cancel();
    broadcast.add(7);
    await broadcast.close();
    result.broadcastFirst = first;
    result.broadcastSecond = second;

    const futureController = StreamController<number>({ sync: true });
    const futureSubscription = futureController.stream.listen(null);
    const completion = futureSubscription.asFuture(12);
    futureController.add(8);
    void futureController.close();
    result.asFuture = await completion;

    let releaseCancel!: () => void;
    let cancelCompleted = false;
    const cancelController = StreamController<number>({
      sync: true,
      onCancel: () =>
        new Promise<void>((resolve) => {
          releaseCancel = resolve;
        }),
    });
    const cancelSubscription = cancelController.stream.listen(() => {});
    const cancelFuture = cancelSubscription.cancel().then(() => {
      cancelCompleted = true;
    });
    await Promise.resolve();
    result.cancelPending = !cancelCompleted;
    releaseCancel();
    await cancelFuture;
    await cancelController.close();
    result.cancelCompleted = cancelCompleted;

    const addedValues: number[] = [];
    let finishAdded!: () => void;
    const addedDone = new Promise<void>((resolve) => {
      finishAdded = resolve;
    });
    const addedController = StreamController<number>({ sync: true });
    addedController.stream.listen((value) => addedValues.push(value), {
      onDone: finishAdded,
    });
    await addedController.addStream(Stream.fromIterable([13, 14]));
    void addedController.close();
    await addedDone;
    result.addedValues = addedValues;
    result.streamFlags = [
      Stream.empty<number>().isBroadcast,
      Stream.empty<number>({ broadcast: true }).isBroadcast,
    ];

    Object.assign(hooks, { controllerResult: result, controllersDone: true });
  },
});

const transformed: number[] = hooks.transformed as number[];
let escapedSink: { add(value: number): void } | null = null;
const transformer = StreamTransformer.fromHandlers<number, number>({
  handleData(value, sink) {
    escapedSink = sink;
    sink.add(value * 2);
  },
  handleError(error, _stack, sink) {
    escapedSink = sink;
    sink.add(-1);
  },
});
Stream.fromIterable([1, 2])
  .transform(transformer)
  .listen((value) => transformed.push(value), {
    onDone() {
      hooks.transformDone = true;
    },
  });

Object.assign(hooks, {
  useEscapedSink() {
    escapedSink?.add(9);
  },
});

registerPage('streams', (_params, lifecycle) => {
  const controller = StreamController<number>({ sync: true });
  const alternate = StreamController<number>({ sync: true });
  const selected = signal(controller.stream);
  lifecycle.onDispose(() => {
    void controller.close();
    void alternate.close();
  });
  Object.assign(hooks, {
    controller,
    add(value: number) {
      controller.add(value);
    },
    addError() {
      controller.addError(new Error('stream fixture error'));
    },
    replaceStream() {
      selected.value = alternate.stream;
    },
    addAlternate(value: number) {
      alternate.add(value);
    },
    closeAlternate() {
      return alternate.close();
    },
  });
  return Column({
    children: [
      Text('static-stream-sibling'),
      StreamBuilder<number>({
        stream: selected.bind,
        initialData: 0,
        builder: (_context, snapshot) =>
          Text(
            snapshot.hasError
              ? `error:${String(snapshot.error)}`
              : `${snapshot.connectionState.name}:${snapshot.data}`,
          ),
      }),
    ],
  });
});

Object.assign(globalThis, { streamHooks: hooks });
