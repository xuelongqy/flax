globalThis.galleryProbe = (() => {
  let captured = 40;
  class Base { value() { return captured; } }
  class Child extends Base {
    #extra = 2;
    value() { return super.value() + this.#extra; }
    increment() { captured++; }
  }
  const child = new Child();
  const states = [];
  const State = __flaxModules.require('@flax/flutter/widgets').State;
  let initialized = 0, disposed = 0;
  const init = State.prototype.initState, dispose = State.prototype.dispose;
  State.prototype.initState = function (...args) {
    initialized++;
    states.push(new WeakRef(this));
    console.log('GALLERY_LIFECYCLE', this.constructor.name, 'initState');
    return Reflect.apply(init, this, args);
  };
  State.prototype.dispose = function (...args) {
    disposed++;
    console.log('GALLERY_LIFECYCLE', this.constructor.name, 'dispose');
    return Reflect.apply(dispose, this, args);
  };
  return { Base, Child, child,
    get initialized() { return initialized; },
    get disposed() { return disposed; },
    get aliveStates() { return states.filter(r => r.deref() !== undefined).length; },
  };
})();
