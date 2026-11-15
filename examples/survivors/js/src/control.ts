const joystickDeadZone = 3;
const joystickFullSpeedDistance = 24;

export class Controls {
  private keys = new Set<string>();
  private pulse = false;
  private pointer: number | undefined;
  private originX = 0;
  private originY = 0;
  private x = 0;
  private y = 0;

  get joystick(): {
    active: boolean;
    x: number;
    y: number;
    originX: number;
    originY: number;
  } {
    return {
      active: this.pointer !== undefined,
      x: this.x,
      y: this.y,
      originX: this.originX,
      originY: this.originY,
    };
  }
  get held(): number {
    return this.keys.size + Number(this.pointer !== undefined) + Number(this.pulse);
  }
  key(key: string, down: boolean): void {
    key = key.toLowerCase();
    if (down && key === 'space' && !this.keys.has(key)) this.pulse = true;
    if (down) this.keys.add(key);
    else this.keys.delete(key);
  }
  skill(): void {
    this.pulse = true;
  }
  pointerDown(id: number, x: number, y: number): boolean {
    if (this.pointer !== undefined) return false;
    this.pointer = id;
    this.originX = x;
    this.originY = y;
    return true;
  }
  pointerMove(id: number, x: number, y: number): boolean {
    if (id !== this.pointer) return false;
    const dx = x - this.originX,
      dy = y - this.originY;
    const distance = Math.hypot(dx, dy);
    const travel = Math.max(
      0,
      Math.min(
        1,
        (distance - joystickDeadZone) / (joystickFullSpeedDistance - joystickDeadZone),
      ),
    );
    // Match the visible thumb travel while keeping small finger drift still.
    const strength = travel * (2 - travel);
    const nextX = distance > joystickDeadZone ? (dx / distance) * strength : 0,
      nextY = distance > joystickDeadZone ? (dy / distance) * strength : 0;
    if (this.x === nextX && this.y === nextY) return false;
    this.x = nextX;
    this.y = nextY;
    return true;
  }
  pointerUp(id: number): boolean {
    if (id !== this.pointer) return false;
    this.pointer = undefined;
    this.x = 0;
    this.y = 0;
    return true;
  }
  clear(): void {
    this.keys.clear();
    this.pointer = undefined;
    this.x = 0;
    this.y = 0;
    this.pulse = false;
  }
  consume(): { x: number; y: number; pulse: boolean } {
    let x =
      this.x +
      Number(this.keys.has('d') || this.keys.has('arrow right')) -
      Number(this.keys.has('a') || this.keys.has('arrow left'));
    let y =
      this.y +
      Number(this.keys.has('s') || this.keys.has('arrow down')) -
      Number(this.keys.has('w') || this.keys.has('arrow up'));
    const length = Math.max(1, Math.hypot(x, y));
    x /= length;
    y /= length;
    const pulse = this.pulse;
    this.pulse = false;
    return { x, y, pulse };
  }
}

export class FixedClock {
  private last: number | undefined;
  private accumulator = 0;
  private nextDraw: number | undefined;
  private lastDraw: number | undefined;
  discarded = 0;
  reset(): void {
    this.last = undefined;
    this.accumulator = 0;
    this.nextDraw = undefined;
    this.lastDraw = undefined;
  }
  drawDue(now: number): boolean {
    const period = 1000 / 60;
    if (this.lastDraw !== undefined && now <= this.lastDraw) return false;
    if (this.nextDraw === undefined) this.nextDraw = now;
    // Host callback service times jitter around vsync; keep the accumulated deadline.
    if (now < this.nextDraw - period / 2) return false;
    const missed = Math.floor(Math.max(0, now - this.nextDraw + 0.1) / period);
    this.nextDraw += (missed + 1) * period;
    this.lastDraw = now;
    return true;
  }
  advance(now: number, step: () => void): void {
    if (this.last === undefined) {
      this.last = now;
      return;
    }
    this.accumulator += Math.max(0, (now - this.last) / 1000);
    this.last = now;
    let count = 0;
    while (this.accumulator + 1e-9 >= 1 / 60 && count < 3) {
      this.accumulator = Math.max(0, this.accumulator - 1 / 60);
      count++;
      step();
    }
    if (this.accumulator >= 1 / 60) {
      const remainder = this.accumulator % (1 / 60);
      this.discarded += this.accumulator - remainder;
      this.accumulator = remainder;
    }
  }
}
