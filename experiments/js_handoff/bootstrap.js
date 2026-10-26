// Pure JavaScript only. Real Dart bindings are installed after handoff.
globalThis.handoff = (() => {
  let captured = 40;
  const fromWorker = 3;
  class Base {
    value() {
      return captured;
    }
  }
  class Child extends Base {
    #extra = 2;
    value() {
      return super.value() + this.#extra;
    }
    fail() {
      try {
        throw new Error('handoff failure');
      } finally {
        captured++;
      }
    }
  }
  const instance = new Child();
  let microtasks = 0;
  Promise.resolve().then(() => microtasks++);
  return {
    Base,
    Child,
    instance,
    closure: () => instance.value(),
    microtasks: () => microtasks,
    makeOwner(tick) {
      return new (class {
        #offset = 10;
        run() {
          return tick() + this.#offset;
        }
      })();
    },
    makeBoxClass(DartBase) {
      return class extends DartBase {
        #bonus = 1;
        operatorAdd(other) {
          return super.operatorAdd(other) + this.#bonus + fromWorker;
        }
      };
    },
  };
})();
let checksum = 0;
let rounds = 0;
const deadline = Date.now() + 2000;
do {
  for (let i = 0; i < 10000; i++)
    checksum = (Math.imul(checksum ^ i, 1664525) + 1013904223) | 0;
  rounds++;
} while (Date.now() < deadline);
globalThis.initializationWork = {
  checksum,
  rounds,
  sourceFunctions: sourceFunctions.length,
};
undefined;
