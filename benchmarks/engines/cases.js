// Embedded as a plain script: no browser, Node, or polyfill dependencies.
globalThis.benchSetup = function (name, n, bytes, seed) {
  let checksum = 0;
  let expected = 0;
  let last;
  let completed = 0;
  let created = 0;
  let operation;
  let verifyLast = () => {};
  let reset = () => {};
  const check = (ok) => {
    if (!ok) throw new Error('Benchmark output mismatch: ' + name);
  };
  const values = Array.from({ length: n }, (_, i) => (i * 17 + seed) % 997);
  const sum = values.reduce((a, b) => a + b, 0);
  const text = 'a'.repeat(bytes - 1) + 'z';
  const plain = (x) => x + 1;
  const closure = (
    (offset) => (x) =>
      x + offset
  )(1);
  const json = JSON.stringify({ text });
  const object = { value: 7 };
  const buffer = new Uint8Array(bytes);
  buffer.fill(7);
  const live = new Array(Math.min(n, 256));
  switch (name) {
    case 'number.integer':
      expected = sum;
      operation = () => {
        let result = 0;
        for (let i = 0; i < n; i++) result = (result + values[i]) | 0;
        return result;
      };
      break;
    case 'number.float':
      expected = sum * 0.5 + n * 0.25;
      operation = () => {
        let result = 0;
        for (let i = 0; i < n; i++) result += values[i] * 0.5 + 0.25;
        return result;
      };
      break;
    case 'array.traverse':
      expected = sum;
      operation = () => values.reduce((a, b) => a + b, 0);
      break;
    case 'array.map':
      expected = sum + n;
      operation = () => {
        last = values.map(plain);
        return last.reduce((a, b) => a + b, 0);
      };
      verifyLast = () => check(last.every((x, i) => x === values[i] + 1));
      break;
    case 'array.sort':
      expected = sum;
      operation = () => {
        last = values.slice().sort((a, b) => a - b);
        return last.reduce((a, b) => a + b, 0);
      };
      verifyLast = () => {
        check(last.length === n);
        for (let i = 1; i < n; i++) check(last[i - 1] <= last[i]);
        const counts = new Array(997).fill(0);
        values.forEach((x) => counts[x]++);
        last.forEach((x) => counts[x]--);
        check(counts.every((x) => x === 0));
      };
      break;
    case 'object.properties': {
      const objects = values.map((value) => ({ value, other: 1 }));
      expected = sum + n;
      operation = () => {
        let result = 0;
        for (let i = 0; i < n; i++) {
          objects[i].other = objects[i].value + 1;
          result += objects[i].other;
        }
        return result;
      };
      break;
    }
    case 'collection.map-set': {
      const map = new Map();
      const set = new Set();
      expected = sum;
      operation = () => {
        let result = 0;
        for (let i = 0; i < n; i++) {
          map.set(i, values[i]);
          set.add(i);
          if (set.has(i)) result += map.get(i);
        }
        return result;
      };
      reset = () => {
        map.clear();
        set.clear();
      };
      verifyLast = () => check(map.size === n && set.size === n);
      break;
    }
    case 'string.transform':
      expected = bytes;
      operation = () => {
        last = text.toUpperCase();
        return last.length;
      };
      verifyLast = () => check(last === 'A'.repeat(bytes - 1) + 'Z');
      break;
    case 'json.parse':
      expected = bytes;
      operation = () => {
        last = JSON.parse(json);
        return last.text.length;
      };
      verifyLast = () => check(last.text === text);
      break;
    case 'json.stringify':
      expected = json.length;
      operation = () => {
        last = JSON.stringify({ text });
        return last.length;
      };
      verifyLast = () => check(last === json);
      break;
    case 'function.plain':
    case 'function.closure':
    case 'function.higher-order':
      expected = sum + n;
      operation = () => {
        if (name === 'function.higher-order')
          return values.map(closure).reduce((a, b) => a + b, 0);
        let result = 0;
        const fn = name === 'function.plain' ? plain : closure;
        for (let i = 0; i < n; i++) result += fn(values[i]);
        return result;
      };
      break;
    case 'promise':
      expected = n;
      operation = () => {
        for (let i = 0; i < n; i++)
          Promise.resolve(1).then((x) => {
            completed += x;
          });
        created += n;
        return n;
      };
      reset = () => {
        completed = 0;
        created = 0;
      };
      verifyLast = () => check(completed === created && created > 0);
      break;
    case 'allocation':
      expected = sum;
      operation = () => {
        let result = 0;
        for (let i = 0; i < n; i++) {
          const entry = { value: values[i], pair: [i, values[i]] };
          live[i % live.length] = entry;
          result += entry.pair[1];
        }
        return result;
      };
      verifyLast = () => {
        check(live.length <= 256);
        live.forEach((entry) => check(entry.value === values[entry.pair[0]]));
      };
      break;
    case 'bridge.js-dart-number':
    case 'bridge.js-dart-string':
    case 'bridge.js-dart-object':
    case 'bridge.js-dart-bytes':
    case 'bridge.reentry': {
      const payload = name.endsWith('string')
        ? text
        : name.endsWith('object')
          ? object
          : name.endsWith('bytes')
            ? buffer
            : 7;
      const count = name.endsWith('string') || name.endsWith('bytes') ? 1 : n;
      const value = name.endsWith('string')
        ? bytes
        : name.endsWith('bytes')
          ? bytes * 7
          : 7;
      expected = count * value;
      operation = () => {
        let result = 0;
        for (let i = 0; i < count; i++) result += globalThis.benchHost(payload);
        return result;
      };
      break;
    }
    case 'flax.signals':
    case 'flax.batch': {
      const source = FlaxBench.signal(0);
      const unsubscribe = source.bind.observe(1);
      globalThis.benchCleanup = unsubscribe;
      reset = () => {
        source.value = 0;
      };
      expected = n;
      operation = () => {
        const update = () => {
          for (let i = 0; i < n; i++) source.value++;
        };
        if (name === 'flax.batch') FlaxBench.batch(update);
        else update();
        return n;
      };
      verifyLast = () => {
        check(source.value === checksum);
      };
      break;
    }
    case 'flax.descriptors':
      expected = n;
      operation = () => {
        last = FlaxBench.Column({
          children: values.map((x) => FlaxBench.Text(String(x))),
        });
        return last.args.children.length;
      };
      verifyLast = () => {
        check(last.kind === 'widget' && last.args.children.length === n);
        last.args.children.forEach((child, i) =>
          check(child.args.data === String(values[i])),
        );
      };
      break;
    default:
      throw new Error('Unknown JS scenario: ' + name);
  }
  globalThis.benchReset = () => {
    reset();
    checksum = 0;
  };
  globalThis.benchRun = (repetitions) => {
    for (let i = 0; i < repetitions; i++) checksum += operation();
    return checksum;
  };
  globalThis.benchPending = () => completed;
  globalThis.benchVerify = (repetitions) => {
    check(checksum === expected * repetitions);
    verifyLast();
    return true;
  };
};
