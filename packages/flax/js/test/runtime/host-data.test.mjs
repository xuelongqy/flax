import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';

test('base environment provides Fetch, data and streams by default', async () => {
  const context = createContext({
    __flaxBaseCall(op, ...args) {
      if (op === 'fetch' && args[0] === 'baseUrl') return undefined;
      if (op === 'fetch') return;
      if (op === 'timeOrigin') return 0;
      throw Error(`Unexpected host operation: ${op}`);
    },
  });
  const base = runInContext(
    await buildHost(hostBundles.find((bundle) => bundle.base)),
    context,
  );
  try {
    assert.equal(
      await runInContext(
        `(async () => {
      const check = value => { if (!value) throw Error('Base data contract'); };
      check([typeof fetch,typeof Headers,typeof Request,typeof Response].every(x=>x==='function'));
      const buffer = new Uint8Array([0,65,66,0]);
      const blob = new Blob([buffer.subarray(1,3)]); buffer.fill(0);
      check(await blob.text()==='AB'); check(await blob.slice(1).text()==='B');
      const file = new File([blob], 'data.bin', {lastModified:123});
      const form = new FormData(); form.append('x','a');form.append('x','b');form.append('file',file);
      check(form.getAll('x').join()==='a,b' && form.get('file')===file && file.lastModified===123);
      const view = new Uint8Array(8); const reader = blob.stream().getReader({mode:'byob'});
      const result = await reader.read(view); check(view.byteLength===0 && result.value[0]===65); await reader.cancel();
      const input = new ReadableStream({start(c){c.enqueue('hello');c.close();}});
      const output = input.pipeThrough(new TextEncoderStream()).pipeThrough(new TextDecoderStream());
      const r=output.getReader();check((await r.read()).value==='hello');check((await r.read()).done);r.releaseLock();
      let outputByte=0; const writer=new WritableStream({write(x){outputByte=x;}}).getWriter();
      await writer.write(42);await writer.close();check(outputByte===42);
      let pulls=0, cancelled=false;
      const demand=new ReadableStream({pull(c){pulls++;c.enqueue(7);},cancel(){cancelled=true;}},{highWaterMark:0});
      await Promise.resolve();check(pulls===0);
      const demandReader=demand.getReader();check((await demandReader.read()).value===7 && pulls===1);
      await demandReader.cancel();check(cancelled);
      const reason={};const failed=new ReadableStream({start(c){c.error(reason);}}).getReader();
      let caught;try{await failed.read();}catch(e){caught=e;}check(caught===reason);failed.releaseLock();
      return 'ok';
    })()`,
        context,
      ),
      'ok',
    );
  } finally {
    base.close();
  }
});

test('progress events and Blob URL factories belong to the base session', async () => {
  const context = createContext({
    __flaxBaseCall(op, ...args) {
      if (op === 'fetch' && args[0] === 'baseUrl') return undefined;
      if (op === 'timeOrigin' || op === 'now') return 0;
      throw Error(op);
    },
  });
  const base = runInContext(
    await buildHost(hostBundles.find((bundle) => bundle.base)),
    context,
  );
  const factory = runInContext(
    `() => URL.createObjectURL(new Blob(['bytes']))`,
    context,
  );
  try {
    assert.equal(
      runInContext(
        `(() => {
      const event = new ProgressEvent('progress', {loaded: 12.9, total: 24, lengthComputable: true});
      const target = new EventTarget(); let delivered;
      target.addEventListener('progress', value => delivered = value); target.dispatchEvent(event);
      if (!(event instanceof Event) || delivered !== event || event.loaded !== 12 || event.total !== 24 || !event.lengthComputable) throw Error('Progress event');
      if (new ProgressEvent('progress', {loaded: Infinity}).loaded !== 0) throw Error('Progress conversion');
      const blob = new Blob(['bytes']); const first = URL.createObjectURL(blob), second = URL.createObjectURL(blob);
      if (first === second || !first.startsWith('blob:')) throw Error('Unique Blob URLs');
      URL.revokeObjectURL(first); URL.revokeObjectURL(first);
      for (const action of [() => URL.revokeObjectURL(), () => URL.revokeObjectURL(Symbol())]) {
        let rejected = false; try { action(); } catch(e) { rejected = e instanceof TypeError; }
        if (!rejected) throw Error('Object URL conversion');
      }
      let rejected = false; try { URL.createObjectURL({size: 1}); } catch(e) { rejected = e instanceof TypeError; }
      return rejected;
    })()`,
        context,
      ),
      true,
    );
  } finally {
    base.close();
  }
  assert.throws(factory, (error) => error.name === 'InvalidStateError');
});
