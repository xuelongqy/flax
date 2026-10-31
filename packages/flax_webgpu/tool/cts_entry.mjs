// Bundle a bounded, unmodified subset of the pinned CTS into the real Flax app.
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
const [ctsRoot, output, main] = process.argv.slice(2);
const groups = [
  'api/operation/adapter/info',
  'api/operation/command_buffer/basic',
  'api/operation/onSubmittedWorkDone',
  'api/validation/buffer/destroy',
  'api/validation/error_scope',
  'api/validation/encoding/cmds/setImmediates',
  'api/validation/capability_checks/features/texture_component_swizzle',
  'api/validation/encoding/cmds/render/draw',
];
const selectedTests = {
  'api/validation/encoding/cmds/render/draw': ['max_draw_count'],
};
if (!ctsRoot || !output || !main)
  throw new Error('Usage: cts_entry.mjs CTS_ROOT OUTPUT MAIN_ENTRY');
const imports = groups.map(
  (name, i) =>
    `import {g as g${i}} from ${JSON.stringify(path.resolve(ctsRoot, 'src/webgpu', name + '.spec.ts'))};`,
);
imports.push(
  `import {Logger} from ${JSON.stringify(path.resolve(ctsRoot, 'src/common/internal/logging/logger.ts'))};`,
);
imports.push(
  `import {TestQueryMultiFile,TestQuerySingleCase} from ${JSON.stringify(path.resolve(ctsRoot, 'src/common/internal/query/query.ts'))};`,
);
imports.push(
  `import {globalTestConfig} from ${JSON.stringify(path.resolve(ctsRoot, 'src/common/framework/test_config.ts'))};`,
);
imports.push(
  `import {SkipTestCase} from ${JSON.stringify(path.resolve(ctsRoot, 'src/common/framework/fixture.ts'))};`,
);
const source = `${imports.join('\n')}
globalThis.__runWebGpuCts=async()=>{
  globalTestConfig.enforceDefaultLimits=false;
  const log=new Logger();
  const groups=[${groups.map((name, i) => `[${JSON.stringify(name)},g${i}]`).join(',')}];
  for(const [path,group] of groups){
    const parts=path.split('/');group.validate(new TestQueryMultiFile('webgpu',parts));
    for(const test of group.iterate()){
      const selected=${JSON.stringify(selectedTests)}[path];
      if(selected&&!selected.includes(test.testPath.join(',')))continue;
      for(const item of test.iterate(null)){
      const query=new TestQuerySingleCase('webgpu',parts,item.id.test,item.id.params);
      const [rec,result]=log.record(query.toString());
      // The pinned test excludes Float16Array, but its bundled Proxy polyfill has a different name.
      if(path==='api/validation/encoding/cmds/setImmediates'&&item.id.params.arrayType==='_Float16Array'){
        rec.start();rec.skipped(new SkipTestCase('Pinned CTS Float16Array polyfill is not a native BufferSource'));rec.finish();
      }else await item.run(rec,query,[]);
      console.log("CTS",query.toString(),result.status,JSON.stringify(result.logs??[]));
      }
    }
  }
  return JSON.parse(log.asJSON());
};
import ${JSON.stringify(path.resolve(main))};
`;
await writeFile(output, source);
