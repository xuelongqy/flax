export type FrameSample = { start: number; encodedMs: number; completed?: number };
export function distribution(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  const p = (fraction: number) =>
    sorted[Math.max(0, Math.ceil(sorted.length * fraction) - 1)] ?? 0;
  return { count: sorted.length, p50: p(0.5), p95: p(0.95), p99: p(0.99) };
}
export function frameSummary(
  samples: FrameSample[],
  start: number,
  end: number,
  callbacks: number,
  skipped: number,
) {
  if (!(end > start))
    throw new RangeError('A measurement window must have positive duration');
  const measured = samples.filter((s) => s.start >= start && s.start < end);
  const completed = samples.filter(
    (s) => s.completed !== undefined && s.completed >= start && s.completed <= end,
  );
  const seconds = (end - start) / 1000;
  return {
    measuredMs: end - start,
    submitted: measured.length,
    completedWithinWindow: completed.length,
    callbacks,
    skipped,
    submittedFps: measured.length / seconds,
    completedFps: completed.length / seconds,
    callbackFps: callbacks / seconds,
    encodeMs: distribution(measured.map((s) => s.encodedMs)),
    frameGapMs: distribution(
      measured.slice(1).map((s, i) => s.start - measured[i]!.start),
    ),
    completionMs: distribution(
      measured
        .filter((s) => s.completed !== undefined)
        .map((s) => s.completed! - s.start),
    ),
  };
}
