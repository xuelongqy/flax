import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';
const code = await buildHost(hostBundles.find((bundle) => bundle.base));
function environment() {
  let base;
  const timers = new Map(),
    errors = [];
  const context = createContext({
    __flaxBaseCall(operation, ...args) {
      if (operation === 'timeOrigin') return 0;
      if (operation === 'fetch' && args[0] === 'baseUrl') return undefined;
      if (operation === 'now') return performance.now();
      if (operation === 'timer') {
        const [id, delay] = args;
        timers.set(
          id,
          setTimeout(() => {
            timers.delete(id);
            base.fire(id);
          }, delay),
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
    context,
    errors,
    close() {
      base.close();
      for (const timer of timers.values()) clearTimeout(timer);
      timers.clear();
    },
  };
}

test('root FileReader reads bytes, encodings and data URLs without HTTP requests', async () => {
  const e = environment();
  try {
    const result = await runInContext(
      `(async()=>{
      if(typeof fetch!=='function')throw Error('Core Fetch must be installed');
      const read=(blob,method,encoding)=>new Promise((resolve,reject)=>{const r=new FileReader();r.onloadend=()=>resolve(r.result);r.onerror=()=>reject(r.error);r[method](blob,encoding)});
      const bytes=new Uint8Array([0,65,255]);
      const buffer=await read(new Blob([bytes]),'readAsArrayBuffer');
      if([...new Uint8Array(buffer)].join()!=='0,65,255')throw Error('Buffer bytes');
      if(await read(new Blob([bytes]),'readAsBinaryString')!=='\x00A\xff')throw Error('Binary string');
      if(await read(new Blob([bytes]),'readAsDataURL')!=='data:application/octet-stream;base64,AEH/')throw Error('Data URL');
      if(await read(new Blob(['中文']),'readAsText')!=='中文')throw Error('UTF-8');
      if(await read(new Blob([new Uint8Array([0x41,0,0x42,0])]),'readAsText','utf-16le')!=='AB')throw Error('Encoding');
      const large=new Uint8Array(70000).fill(65);
      if((await read(new Blob([large]),'readAsDataURL')).length<90000)throw Error('Chunked base64');
      return [FileReader.EMPTY,FileReader.LOADING,FileReader.DONE,new FileReader().EMPTY];
    })()`,
      e.context,
    );
    assert.equal(JSON.stringify(result), '[0,1,2,0]');
    assert.deepEqual(e.errors, []);
  } finally {
    e.close();
  }
});

test('FileReader preserves event order, aborts, reuse and session shutdown', async () => {
  const e = environment();
  try {
    assert.equal(
      await runInContext(
        `(async()=>{
      const r=new FileReader(),events=[];
      await new Promise((resolve,reject)=>{
        for(const type of ['loadstart','progress','load','loadend'])r.addEventListener(type,event=>{
          events.push([type,event.loaded,event.total,event.lengthComputable,r.readyState]);
          if(type==='loadend')resolve();
        });
        r.readAsText(new Blob(['abc']));
        if(r.readyState!==1||r.result!==null||r.error!==null)reject(Error('Loading state'));
        try{r.readAsText(new Blob());reject(Error('Concurrent read accepted'))}catch(error){if(error.name!=='InvalidStateError')reject(error)}
      });
      if(JSON.stringify(events)!==JSON.stringify([['loadstart',0,3,true,1],['progress',3,3,true,1],['load',3,3,true,2],['loadend',3,3,true,2]]))throw Error(JSON.stringify(events));
      const cancelled=new FileReader(),aborted=[];
      cancelled.onabort=()=>aborted.push('abort');cancelled.onloadend=()=>aborted.push('end');cancelled.onload=()=>{throw Error('Aborted load')};
      cancelled.readAsText(new Blob(['old']));cancelled.abort();
      if(cancelled.result!==null||cancelled.readyState!==2||aborted.join()!=='abort,end')throw Error('Abort');
      const reused=new FileReader();let ends=0;
      await new Promise(resolve=>{reused.onload=()=>{if(reused.result==='first')reused.readAsText(new Blob(['second']));};reused.onloadend=()=>{ends++;resolve()};reused.readAsText(new Blob(['first']));});
      if(reused.result!=='second'||ends!==1)throw Error('Reentrant loadend');
      globalThis.pendingReader=new FileReader();pendingReader.readAsText(new Blob(['pending']));
      return true;
    })()`,
        e.context,
      ),
      true,
    );
    e.close();
    assert.equal(runInContext('pendingReader.readyState', e.context), 2);
    assert.throws(
      () => runInContext('pendingReader.readAsText(new Blob())', e.context),
      (error) => error.name === 'InvalidStateError',
    );
    assert.deepEqual(e.errors, []);
  } finally {
    e.close();
  }
});
