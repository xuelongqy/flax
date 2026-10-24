import { add, counter, alias, update, close, inline, stats } from '@flax/ffi-fixture';

let checks = 0;
function check(condition, message) {
  if (!condition) throw new Error(message);
  checks++;
}
check(add(20, 22) === 42, 'packaged C function');
const value = counter(37);
const other = alias(value);
check(update(other, 5) === 42, 'packaged opaque pointer');
check(inline((x) => add(x, 1), 41) === 42, 'callback reentry');
close(value);
close(other);
let revoked = false;
try {
  update(other, 1);
} catch (_) {
  revoked = true;
}
check(revoked, 'closed alias is revoked');
const counts = stats();
check(counts.created === 1 && counts.destroyed === 1, 'exact native release');
check(counts.wrongThreadDestroys === 0, 'release on owner thread');
globalThis.packageResult = { checks, answer: 42, ...counts };
