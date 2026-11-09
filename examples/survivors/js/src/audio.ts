import { AudioPlayer, BytesSource, ReleaseMode } from '@flax/audioplayers';
import { getAssetBundle } from '@flax/core/assets';

declare const __FLAX_SURVIVORS_ACCEPTANCE__: boolean;

const names = ['music', 'shot', 'hit', 'pulse', 'upgrade', 'win', 'lose'] as const;
type Sound = (typeof names)[number];
type SoundSource = ReturnType<typeof BytesSource>;
export class Sounds {
  // The vendored Darwin plugin recognizes this per-session ID for bundled music.
  private readonly music = AudioPlayer({
    playerId: `lumen-outpost-bgm-${crypto.randomUUID()}`,
  });
  private readonly effects = Array.from({ length: 4 }, () => AudioPlayer());
  private readonly sources = new Map<Sound, SoundSource>();
  private readonly preparedEffects?: Map<AudioPlayer, SoundSource>;
  private readonly queues = new Map<AudioPlayer, Promise<void>>();
  private readonly busy = new Map<
    AudioPlayer,
    { resuming: boolean; settled: boolean; completed: boolean }
  >();
  private readonly subscriptions: { cancel(): Promise<void> }[] = [];
  private next = 0;
  private disposed = false;
  private failed = false;
  private paused = true;
  private generation = 0;
  private live = 5;
  private musicVolume: number | null = null;
  constructor(
    private readonly report: (message: string) => void,
    reuseEffectSources: boolean,
  ) {
    if (reuseEffectSources) this.preparedEffects = new Map();
    try {
      for (const player of [this.music, ...this.effects]) {
        // This game never reads positions; avoid a native query on every Flutter frame.
        player.positionUpdater = null;
        if (
          typeof __FLAX_SURVIVORS_ACCEPTANCE__ !== 'undefined' &&
          __FLAX_SURVIVORS_ACCEPTANCE__
        ) {
          const observe = (
            globalThis as typeof globalThis & {
              __survivorsObserveAudioPlayer?: (player: AudioPlayer) => void;
            }
          ).__survivorsObserveAudioPlayer;
          observe?.(player);
        }
        this.subscriptions.push(
          player.onPlayerComplete.listen(
            () => {
              const slot = this.busy.get(player);
              if (slot?.resuming) {
                slot.completed = true;
                if (slot.settled) this.busy.delete(player);
              }
            },
            {
              onError: (error) => this.fail(error),
            },
          ),
        );
      }
      this.enqueue(this.music, () => this.music.setReleaseMode(ReleaseMode.loop));
      for (const player of this.effects)
        this.enqueue(player, () => player.setReleaseMode(ReleaseMode.stop));
    } catch (error) {
      this.dispose();
      throw error;
    }
  }
  get playerCount(): number {
    return this.live;
  }
  private fail(error: unknown): void {
    if (this.disposed || this.failed) return;
    this.failed = true;
    this.paused = true;
    this.generation++;
    this.musicVolume = null;
    this.busy.clear();
    this.preparedEffects?.clear();
    this.sources.clear();
    this.report(`Audio unavailable: ${String(error)}`);
    this.stopPlayers(false);
  }
  private enqueue(player: AudioPlayer, operation: () => Promise<void>): void {
    const prior = this.queues.get(player) ?? Promise.resolve();
    this.queues.set(
      player,
      prior.then(operation).catch((e) => {
        this.fail(e);
      }),
    );
  }
  private stopPlayers(pauseMusic: boolean): void {
    for (const player of [this.music, ...this.effects]) {
      try {
        // Cancel Dart playback intent now; fresh playback still waits for this control.
        const control =
          pauseMusic && player === this.music ? player.pause() : player.stop();
        const handled = control.catch((error) => this.fail(error));
        this.enqueue(player, () => handled);
      } catch (error) {
        this.fail(error);
      }
    }
  }
  async load(): Promise<void> {
    try {
      for (const name of names) {
        const data = await getAssetBundle().load(`assets/audio/${name}.wav`);
        if (this.disposed || this.failed) return;
        this.sources.set(
          name,
          BytesSource(new Uint8Array(data.buffer, data.byteOffset, data.byteLength), {
            mimeType: 'audio/wav',
          }),
        );
        if (name === 'music' && this.musicVolume !== null)
          this.play('music', this.musicVolume);
      }
    } catch (e) {
      this.fail(e);
    }
  }
  private selectEffect(source: SoundSource): AudioPlayer | undefined {
    const prepared = this.preparedEffects;
    if (!prepared) {
      const player = this.effects[this.next++ % this.effects.length]!;
      return this.busy.has(player) ? undefined : player;
    }
    let selected = -1;
    for (let offset = 0; offset < this.effects.length; offset++) {
      const index = (this.next + offset) % this.effects.length;
      const player = this.effects[index]!;
      if (this.busy.has(player)) continue;
      if (prepared.get(player) === source) {
        selected = index;
        break;
      }
      if (selected < 0) selected = index;
    }
    if (selected < 0) return;
    this.next = (selected + 1) % this.effects.length;
    return this.effects[selected];
  }
  play(name: Sound, volume: number): void {
    if (this.disposed || this.failed) return;
    if (name === 'music') this.musicVolume = volume;
    const source = this.sources.get(name);
    if (!source || volume === 0) return;
    this.paused = false;
    const generation = this.generation;
    const player = name === 'music' ? this.music : this.selectEffect(source);
    if (!player) return;
    const slot =
      name === 'music' ? null : { resuming: false, settled: false, completed: false };
    if (slot) this.busy.set(player, slot);
    this.enqueue(player, async () => {
      if (this.disposed || this.failed || generation !== this.generation) return;
      try {
        await player.setVolume(volume);
        // Android STOP rewinds completed clips and keeps their native source prepared.
        if (this.preparedEffects?.get(player) !== source)
          await player.setSource(source);
        // An old completion may change Dart desiredState during preparation.
        // Only an explicit resume after the generation check owns fresh playback.
        if (this.disposed || this.failed || generation !== this.generation) return;
        if (slot) {
          this.preparedEffects?.set(player, source);
          slot.resuming = true;
        }
        await player.resume();
        if (slot && this.busy.get(player) === slot) {
          slot.settled = true;
          if (slot.completed) this.busy.delete(player);
        }
      } catch (error) {
        if (slot && this.busy.get(player) === slot) this.busy.delete(player);
        throw error;
      }
    });
  }

  pause(): void {
    this.musicVolume = null;
    if (this.disposed || this.failed || this.paused) return;
    this.paused = true;
    this.generation++;
    this.busy.clear();
    this.preparedEffects?.clear();
    this.stopPlayers(true);
  }
  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.paused = true;
    this.generation++;
    this.musicVolume = null;
    this.busy.clear();
    this.preparedEffects?.clear();
    this.sources.clear();
    this.stopPlayers(false);
    for (const subscription of this.subscriptions) {
      try {
        void subscription.cancel().catch(() => {});
      } catch {
        // Continue disposing players if the session has already closed.
      }
    }
    this.subscriptions.length = 0;
    for (const player of [this.music, ...this.effects])
      this.enqueue(player, () =>
        player.dispose().finally(() => {
          this.live--;
        }),
      );
  }
}
