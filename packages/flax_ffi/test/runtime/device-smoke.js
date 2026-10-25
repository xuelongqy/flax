import {
  DynamicLibrary,
  NativeFinalizer,
  struct,
  view,
  Buffer,
  toBuffer,
  abi,
} from '../../js/index.js';

const lib = new DynamicLibrary(null);
const bind = (name, args, result) =>
  lib.getFunction('flax_static_' + name, {
    arguments: args,
    return: result,
  });
const memoryStat = bind('memory_stat', ['uint32'], 'uint32');
globalThis.flaxFfiSmokeStats = () => [memoryStat(0), memoryStat(1), memoryStat(2)];
globalThis.flaxFfiSmoke = () => {
  let checks = 0;
  const check = (ok, reason) => {
    if (!ok) throw new Error(reason);
    ++checks;
  };
  check(abi.callbackBackend === 'precompiled-libffi-table', 'callback backend');
  check(bind('add', ['int32', 'int32'], 'int32')(20, 22) === 42, 'integer call');
  const Point = struct({ x: 'double', y: 'double' });
  const input = Buffer.alloc(16);
  Object.assign(view(Point, input), { x: 2, y: 5 });
  const point = view(Point, bind('point', [Point, 'double'], Point)(input, 3));
  check(point.x === 5 && point.y === 2, 'aggregate argument and return');
  const callback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    (x) => x + 2,
  );
  try {
    check(
      bind('call_callback', ['pointer', 'int32'], 'int32')(callback, 40) === 42,
      'precompiled callback',
    );
  } finally {
    lib.unregisterCallback(callback);
  }
  const pointer = bind('memory_alloc', ['uint32'], 'pointer')(4);
  check(pointer !== 0n, 'native allocation');
  const owner = {};
  const finalizer = new NativeFinalizer(bind('memory_free', ['pointer'], 'void'));
  finalizer.attach(owner, pointer);
  globalThis.flaxFfiSmokeOwner = owner;
  const bytes = toBuffer(pointer, 4, false);
  bytes[0] = 42;
  check(
    bind('memory_read', ['pointer', 'uint32'], 'uint8')(pointer, 0) === 42,
    'borrowed bytes',
  );
  check(toBuffer(pointer, 4)[0] === 42, 'copied bytes');
  return { checks, stats: flaxFfiSmokeStats() };
};
