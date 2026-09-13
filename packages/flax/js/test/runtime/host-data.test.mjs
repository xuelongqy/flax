import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';

test('base data and streams need no Fetch installation', async () => {
  const context = createContext({
    __flaxBaseCall(op) {
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
      check([typeof fetch,typeof Headers,typeof Request,typeof Response].every(x=>x==='undefined'));
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
