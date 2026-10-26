// Only this small fixture uses the experimental message transport.
// Production bindings and their synchronous proxy protocol are unchanged.
globalThis.busy = function (milliseconds) {
  const start = Date.now();
  let work = 0;
  while (Date.now() - start < milliseconds) {
    for (let i = 0; i < 10000; i++) work = (work + Math.imul(i, i)) | 0;
  }
  return { elapsedMs: Date.now() - start, work };
};
class LocalBase {
  describe() {
    return 'base';
  }
}
class LocalChild extends LocalBase {
  #suffix = 'child';
  describe() {
    return `${super.describe()}/${this.#suffix}`;
  }
}
class DartBase {
  constructor(id) {
    this.id = id;
  }
  describe() {
    return nativeCall({ operation: 'base', id: this.id });
  }
}
class DartChild extends DartBase {
  #suffix = 'override';
  describe() {
    return `${super.describe()}/${this.#suffix}`;
  }
}
globalThis.localChild = new LocalChild();
globalThis.dartChild = new DartChild(7);
globalThis.describeLayout = (width) => ({
  width,
  label: width < 300 ? 'narrow' : 'wide',
});
globalThis.bridgeRoots = new Map();
globalThis.createCycle = (id) => {
  const peer = { dartId: id };
  const callback = () => nativeCall({ operation: 'node', id: peer.dartId });
  peer.callback = callback;
  globalThis.weakPeer = new WeakRef(peer);
  globalThis.businessRoot = peer;
  bridgeRoots.set(id, callback);
  return true;
};
true;
