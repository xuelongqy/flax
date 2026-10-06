/** Weak aliases share one Dart identity; the cache never roots a JS wrapper. */
export class ReferenceCache {
  readonly handles = new WeakMap<
    object,
    { type: string; id: number; alive: boolean }
  >();
  private readonly aliases = new Map<number, Set<WeakRef<object>>>();
  private cursor: MapIterator<number> | undefined;

  get(type: string, id: number): object | null {
    const aliases = this.aliases.get(id);
    if (!aliases) return null;
    for (const alias of aliases) {
      const value = alias.deref();
      if (!value) {
        aliases.delete(alias);
        continue;
      }
      const handle = this.handles.get(value);
      if (handle?.alive && handle.type === type) return value;
    }
    return null;
  }

  track(value: object, type: string, id: number): void {
    const current = this.handles.get(value);
    if (current) {
      if (!current.alive || current.type !== type || current.id !== id)
        throw new TypeError('Object identity mismatch');
      return;
    }
    this.handles.set(value, { type, id, alive: true });
    const aliases = this.aliases.get(id) ?? new Set<WeakRef<object>>();
    aliases.add(new WeakRef(value));
    this.aliases.set(id, aliases);
  }

  transfer(source: object, target: object): void {
    const ref = this.handles.get(source);
    if (!ref || !ref.alive) throw new TypeError('Invalid Dart object alias');
    this.track(target, ref.type, ref.id);
    for (const alias of this.aliases.get(ref.id)!) {
      const value = alias.deref();
      if (!value || value === source) this.aliases.get(ref.id)!.delete(alias);
    }
    this.handles.delete(source);
  }

  release(id: number): void {
    for (const alias of this.aliases.get(id) ?? []) {
      const value = alias.deref();
      const handle = value && this.handles.get(value);
      if (handle) handle.alive = false;
    }
    this.aliases.delete(id);
  }

  sweep(): number[] {
    const expired: number[] = [];
    this.cursor ??= this.aliases.keys();
    // Each checkpoint examines at most 64 identities and scans their weak aliases.
    for (let i = 0; i < 64; i++) {
      const next = this.cursor.next();
      if (next.done) {
        this.cursor = undefined;
        break;
      }
      const aliases = this.aliases.get(next.value);
      if (!aliases) continue;
      for (const alias of aliases) {
        if (!alias.deref()) aliases.delete(alias);
      }
      if (aliases.size === 0) {
        this.aliases.delete(next.value);
        expired.push(next.value);
      }
    }
    return expired;
  }
}
