import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';

const code = await buildHost(hostBundles.find((bundle) => bundle.base));
function environment() {
  let base;
  const timers = new Map(),
    errors = [],
    randomCalls = [];
  const context = createContext({
    check: (value, message) => assert.ok(value, message),
    throws(action, name) {
      assert.throws(action, (error) => error.name === name);
    },
    __flaxBaseCall(operation, ...args) {
      if (operation === 'timeOrigin') return 1000;
      if (operation === 'now') return 100;
      if (operation === 'fetch' && args[0] === 'baseUrl') return undefined;
      if (operation === 'random') {
        randomCalls.push(args[0]);
        return Uint8Array.from({ length: args[0] }, (_, i) => i & 255).buffer;
      }
      if (operation === 'timer') {
        timers.set(
          args[0],
          setTimeout(() => {
            timers.delete(args[0]);
            base.fire(args[0]);
          }, args[1]),
        );
      } else if (operation === 'clearTimer') {
        clearTimeout(timers.get(args[0]));
        timers.delete(args[0]);
      } else if (operation === 'error') errors.push(args[0]);
      else throw Error(operation);
    },
  });
  base = runInContext(code, context);
  return {
    run: (source) => runInContext(source, context),
    randomCalls,
    errors,
    timers,
    close() {
      base.close();
      for (const timer of timers.values()) clearTimeout(timer);
      timers.clear();
    },
  };
}

test('Core aliases the global and fills only genuine integer views with one random call', () => {
  const e = environment();
  try {
    assert.deepEqual(e.randomCalls, []);
    e.run(`
      check(window===globalThis && window===self && document.defaultView===window,'window identity');
      check(Object.isExtensible(navigator),'main navigator supports host plugins');
      check(location.href==='about:blank' && document.cookie==='','No configured address or cookie store');
      const storage=new Uint8Array(12).fill(255), view=new Uint16Array(storage.buffer,4,2);
      check(crypto.getRandomValues(view)===view,'original view returned');
      check([...storage].join()==='255,255,255,255,0,1,2,3,255,255,255,255','view bounds');
      for(const C of [Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,BigInt64Array,BigUint64Array]) crypto.getRandomValues(new C(0));
      throws(()=>crypto.getRandomValues(new Float32Array(0)),'TypeMismatchError');
      throws(()=>crypto.getRandomValues(new DataView(new ArrayBuffer(0))),'TypeMismatchError');
      throws(()=>crypto.getRandomValues(new ArrayBuffer(1)),'TypeError');
      throws(()=>crypto.getRandomValues(new Uint8Array(65537)),'QuotaExceededError');
      const oversized=new Uint8Array(65537);Object.defineProperty(oversized,'byteLength',{value:1});
      throws(()=>crypto.getRandomValues(oversized),'QuotaExceededError');
      const spoof=new Float64Array(1);Object.defineProperty(spoof,Symbol.toStringTag,{value:'Uint8Array'});
      throws(()=>crypto.getRandomValues(spoof),'TypeMismatchError');
      crypto.getRandomValues(new Uint8Array(65536));
      check(crypto.randomUUID()==='00010203-0405-4607-8809-0a0b0c0d0e0f','RFC 4122 bits');
      throws(()=>crypto.randomUUID.call({}),'TypeError');
      check(crypto instanceof Crypto && Object.prototype.toString.call(crypto)==='[object Crypto]','Crypto identity');
    `);
    assert.deepEqual(e.randomCalls, [4, 65536, 16]);
    e.close();
    assert.throws(
      () => e.run('crypto.randomUUID()'),
      (error) => error.name === 'InvalidStateError',
    );
  } finally {
    e.close();
  }
});

test('User Timing clones detail and resolves marks, options, ordering and errors', () => {
  const e = environment();
  try {
    e.run(`
      check(performance instanceof Performance && performance instanceof EventTarget,'Performance identity');
      check(performance.now()===100 && performance.timeOrigin===1000,'clock preserved');
      const detail={map:new Map([['value',{x:1}]])};detail.self=detail;
      const mark=performance.mark('work',{startTime:20,detail});detail.map.get('value').x=2;
      check(mark.detail!==detail && mark.detail.self===mark.detail && mark.detail.map.get('value').x===1,'structured clone');
      performance.mark('work',{startTime:10});performance.mark('end',{startTime:40});
      const span=performance.measure('span','work','end');
      check(span instanceof PerformanceMeasure && span.startTime===20 && span.duration===20,'latest timestamp mark');
      let reads=0;performance.mark('getter',{get startTime(){reads++;return 3;}});
      check(reads===1,'mark getter once');
      const access=[];performance.measure('getters',{get detail(){access.push('detail');},get duration(){access.push('duration');return 5;},get end(){access.push('end');return 10;},get start(){access.push('start');}});
      check(access.join()==='detail,duration,end,start','options getter order');
      check(performance.measure('negative',{start:5,end:2}).duration===-3,'signed duration');
      check(performance.measure('offset',{end:2,duration:3}).startTime===-1,'computed negative start');
      check(performance.measure('origin','navigationStart').startTime===0,'navigation origin');
      check(performance.getEntries()[0].startTime===-1,'timeline sorted');
      const alone=new PerformanceMark('alone',{startTime:1});
      check(alone.detail===null && !performance.getEntriesByName('alone').length,'standalone constructor');
      throws(()=>performance.mark('invalid',{detail:()=>{}}),'DataCloneError');
      throws(()=>performance.mark('navigationStart'),'SyntaxError');
      throws(()=>performance.mark('invalid',{startTime:-1}),'TypeError');
      throws(()=>performance.measure('missing','absent'),'SyntaxError');
      throws(()=>performance.measure('bad',{detail:{}}),'TypeError');
      throws(()=>performance.measure('bad',{start:0,end:1,duration:1}),'TypeError');
      throws(()=>PerformanceObserver.prototype.observe.call({},{}),'TypeError');
      check(JSON.stringify(mark)==='{"name":"work","entryType":"mark","startTime":20,"duration":0,"navigationId":null}','entry JSON');
      performance.clearMarks('work');check(performance.getEntriesByName('work').length===0,'clear named marks');
      performance.clearMarks();performance.clearMeasures();check(performance.getEntries().length===0,'clear timeline');
    `);
    assert.equal(e.timers.size, 0, 'No observer timer for ordinary marks');
    assert.deepEqual(e.errors, []);
  } finally {
    e.close();
  }
});

test('PerformanceObserver delivers buffered entries asynchronously and stops on disconnect or close', async () => {
  const e = environment();
  try {
    await e.run(`(async()=>{
      check(PerformanceObserver.supportedEntryTypes.join()==='mark,measure','only supported types advertised');
      performance.mark('old',{startTime:50});performance.mark('old',{startTime:5});
      let callbacks=0, synchronous=true;
      await new Promise(resolve=>{
        const observer=new PerformanceObserver(function(list,self,options){
          check(!synchronous && this===observer && self===observer,'async callback receiver');
          check(list instanceof PerformanceObserverEntryList && list.getEntriesByName('old','mark')[0].startTime===5,'sorted entry list');
          check(options.droppedEntriesCount===0,'observer options');callbacks++;self.disconnect();resolve();
        });
        observer.observe({type:'mark',buffered:true});synchronous=false;
      });
      check(callbacks===1,'one buffered delivery');
      const observer=new PerformanceObserver(()=>{throw Error('Cancelled observer called');});
      observer.observe({entryTypes:['mark']});
      performance.mark('a',{startTime:50});performance.mark('b',{startTime:5});
      check(observer.takeRecords().map(x=>x.name).join()==='a,b','takeRecords queue order');
      observer.disconnect();
      throws(()=>observer.observe({type:'measure'}),'InvalidModificationError');
      throws(()=>new PerformanceObserver(()=>{}).observe({}),'TypeError');
      globalThis.pending=new PerformanceObserver(()=>{throw Error('Closed observer called');});
      pending.observe({type:'mark'});performance.mark('pending');
    })()`);
    assert.equal(e.timers.size, 1);
    e.close();
    assert.equal(e.timers.size, 0);
    e.run(
      "check(performance.getEntries().length===0 && pending.takeRecords().length===0,'close releases records')",
    );
    assert.deepEqual(e.errors, []);
  } finally {
    e.close();
  }
});
