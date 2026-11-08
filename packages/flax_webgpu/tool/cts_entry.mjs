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
  'api/validation/queue/writeBuffer',
  'api/validation/encoding/cmds/setImmediates',
  'api/validation/capability_checks/features/texture_component_swizzle',
  'api/validation/encoding/cmds/render/draw',
  'api/validation/encoding/cmds/clearBuffer',
  'api/validation/encoding/cmds/copyBufferToBuffer',
  'api/validation/encoding/cmds/setBindGroup',
  'api/validation/buffer/mapping',
  'web_platform/canvas/configure',
  'idl/constructable',
  'idl/javascript',
];
const selectedTests = {
  'api/validation/encoding/cmds/render/draw': ['max_draw_count'],
  'api/validation/encoding/cmds/clearBuffer': [
    'default_args',
    'offset_alignment',
    'overflow',
    'out_of_bounds',
  ],
  'api/validation/encoding/cmds/copyBufferToBuffer': [
    'copy_size_alignment',
    'copy_offset_alignment',
    'copy_overflow',
    'copy_out_of_bounds',
  ],
  'api/validation/encoding/cmds/setBindGroup': ['u32array_start_and_length'],
  'api/validation/buffer/mapping': [
    'mapAsync,sizeUnspecifiedOOB',
    'mapAsync,offsetAndSizeAlignment',
    'getMappedRange,sizeAndOffsetOOB,mappedAtCreation',
    'getMappedRange,sizeAndOffsetOOB,mapped',
  ],
  'web_platform/canvas/configure': [
    'defaults',
    'device',
    'size_zero_before_configure',
    'size_zero_after_configure',
  ],
  'idl/javascript': [
    'obj,Object_keys',
    'obj,spread',
    'obj,for_of',
    'obj,getOwnPropertyDescriptors',
    'setlike,spread',
    'setlike,set',
    'setlike,requiredFeatures',
    'limits',
    'readonly_properties',
    'getter_replacement',
    'sameObject',
    'inheritance',
  ],
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
