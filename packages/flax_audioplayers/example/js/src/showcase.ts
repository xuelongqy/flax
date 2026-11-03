import { bind, signal } from '@flax/core';
import type {} from '@flax/core/host';
import { Duration } from '@flax/dart/core';
import { FontWeight } from '@flax/dart/ui';
import {
  Builder,
  Center,
  Column,
  Container,
  CrossAxisAlignment,
  Icon,
  LayoutBuilder,
  MainAxisSize,
  Row,
  SingleChildScrollView,
  SizedBox,
  State,
  StatefulWidget,
  Text,
  ValueKey,
  Wrap,
  WrapAlignment,
  type Widget,
} from '@flax/flutter/widgets';
import {
  Border,
  BorderRadius,
  BoxDecoration,
  EdgeInsets,
  TextStyle,
} from '@flax/flutter/painting';
import {
  ChoiceChip,
  IconButton,
  Icons,
  Slider,
  TextButton,
  Theme,
} from '@flax/material-ui';
import { AudioPlayer, PlayerState, ReleaseMode, UrlSource } from '@flax/audioplayers';

const tracks = [
  {
    id: 'song-1',
    title: 'SoundHelix Song 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'song-2',
    title: 'SoundHelix Song 2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
] as const;

export function createAudioPlayerExample(): Widget {
  return new AudioExample();
}

class AudioExample extends StatefulWidget {
  createState() {
    return new AudioExampleState();
  }
}

class AudioExampleState extends State<AudioExample> {
  private readonly selected = signal(0);
  override build() {
    return SizedBox({
      child: bind(
        () =>
          new PlayerPage(this.selected.value, (index) => {
            this.selected.value = index;
          }),
      ),
    });
  }
}

class PlayerPage extends StatefulWidget {
  constructor(
    readonly index: number,
    readonly select: (index: number) => void,
  ) {
    super({ key: ValueKey(tracks[index]!.id) });
  }
  createState() {
    return new PlayerPageState();
  }
}

function timestamp(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

class PlayerPageState extends State<PlayerPage> {
  private player!: AudioPlayer;
  private readonly subscriptions: { cancel(): Promise<void> }[] = [];
  private readonly ready = signal(false);
  private readonly playing = signal(false);
  private readonly position = signal(0);
  private readonly duration = signal(0);
  private readonly scrub = signal<number | null>(null);
  private readonly volume = signal(1);
  private readonly rate = signal(1);
  private readonly looping = signal(false);
  private readonly error = signal('');
  private disposed = false;
  // Completion events may arrive after a click; observed Dart state is not intent.
  private playRequested = false;
  private loopRequested = false;
  private readonly report = (error: unknown) => {
    if (!this.disposed) this.error.value = String(error);
  };

  override initState() {
    super.initState();
    this.player = AudioPlayer();
    this.subscriptions.push(
      this.player.onPlayerStateChanged.listen(
        (state) => {
          if (!this.disposed) this.playing.value = state === PlayerState.playing;
        },
        { onError: this.report },
      ),
      this.player.onPositionChanged.listen(
        (value) => {
          if (!this.disposed) this.position.value = value.inMilliseconds;
        },
        { onError: this.report },
      ),
      this.player.onDurationChanged.listen(
        (value) => {
          if (!this.disposed) this.duration.value = value.inMilliseconds;
        },
        { onError: this.report },
      ),
      this.player.onPlayerComplete.listen(
        () => {
          // audioplayers 6.8.1 marks even native loops completed and stops its
          // position updater. Resume restores Dart state without replacing the source.
          if (this.disposed) return;
          if (this.loopRequested && this.playRequested)
            this.perform(() => this.player.resume());
          else if (!this.loopRequested) this.playRequested = false;
        },
        { onError: this.report },
      ),
    );
    void this.prepare().catch(this.report);
  }

  private async prepare() {
    await this.player.setReleaseMode(ReleaseMode.stop);
    if (this.disposed) return;
    await this.player.setSource(UrlSource(tracks[this.widget.index]!.url));
    if (this.disposed) return;
    const duration = await this.player.getDuration();
    if (this.disposed) return;
    if (duration !== null) this.duration.value = duration.inMilliseconds;
    this.ready.value = true;
  }

  override dispose() {
    this.disposed = true;
    const cleanupError = (error: unknown) => {
      if (!String(error).endsWith('FlaxSessionClosed'))
        console.error('Audio cleanup failed:', String(error));
    };
    for (const subscription of this.subscriptions)
      void subscription.cancel().catch(cleanupError);
    // Flutter State.dispose cannot await; native disposal remains an ordinary Future.
    void this.player.dispose().catch(cleanupError);
    super.dispose();
  }

  private perform(action: () => Promise<void>) {
    void action()
      .then(() => {
        if (this.disposed) return;
        this.volume.value = this.player.volume;
        this.rate.value = this.player.playbackRate;
        this.looping.value = this.player.releaseMode === ReleaseMode.loop;
      })
      .catch(this.report);
  }

  override build() {
    const track = tracks[this.widget.index]!;
    const enabled = (action: () => Promise<void>) =>
      bind(() =>
        this.ready.value && !this.error.value ? () => this.perform(action) : null,
      );
    return Builder({
      builder: (context) => {
        const colors = Theme.of(context).colorScheme;
        const secondary = TextStyle({ color: colors.onSurfaceVariant, fontSize: 12 });
        return LayoutBuilder({
          builder: (_context, constraints) =>
            Center({
              child: SingleChildScrollView({
                padding: EdgeInsets.all(24),
                child: SizedBox({
                  width: Math.min(720, Math.max(0, constraints.maxWidth - 48)),
                  child: Column({
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Audio player', {
                        style: TextStyle({
                          fontSize: 26,
                          fontWeight: FontWeight.w600,
                          color: colors.onSurface,
                        }),
                      }),
                      SizedBox({ height: 6 }),
                      Text('HTTPS audio · Native audioplayers', { style: secondary }),
                      SizedBox({ height: 16 }),
                      Wrap({
                        spacing: 8,
                        runSpacing: 8,
                        children: tracks.map((entry, index) =>
                          ChoiceChip({
                            key: ValueKey(`audio-source-${entry.id}`),
                            label: Text(entry.title),
                            selected: index === this.widget.index,
                            onSelected: () => this.widget.select(index),
                          }),
                        ),
                      }),
                      SizedBox({ height: 16 }),
                      Container({
                        padding: EdgeInsets.all(20),
                        decoration: BoxDecoration({
                          color: colors.surfaceContainerLow,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all({ color: colors.outlineVariant }),
                        }),
                        child: Column({
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Center({
                              child: Icon(Icons.music_note_rounded, {
                                size: 64,
                                color: colors.primary,
                              }),
                            }),
                            SizedBox({ height: 12 }),
                            Text(track.title, {
                              style: TextStyle({
                                fontSize: 20,
                                fontWeight: FontWeight.w600,
                                color: colors.onSurface,
                              }),
                            }),
                            Text('SoundHelix · T. Schürger', { style: secondary }),
                            SizedBox({ height: 16 }),
                            SizedBox({
                              child: bind(() =>
                                Slider({
                                  key: ValueKey('audio-progress'),
                                  min: 0,
                                  max: 1,
                                  value:
                                    this.scrub.value ??
                                    (this.duration.value > 0
                                      ? Math.max(
                                          0,
                                          Math.min(
                                            1,
                                            this.position.value / this.duration.value,
                                          ),
                                        )
                                      : 0),
                                  onChanged:
                                    this.ready.value &&
                                    !this.error.value &&
                                    this.duration.value > 0
                                      ? (fraction: number) => {
                                          this.scrub.value = fraction;
                                        }
                                      : null,
                                  onChangeEnd: (fraction) => {
                                    this.scrub.value = null;
                                    this.perform(() =>
                                      this.player.seek(
                                        Duration({
                                          milliseconds: Math.round(
                                            fraction * this.duration.value,
                                          ),
                                        }),
                                      ),
                                    );
                                  },
                                }),
                              ),
                            }),
                            Text(
                              bind(
                                () =>
                                  `${timestamp(this.position.value)} / ${timestamp(this.duration.value)}`,
                              ),
                              { key: ValueKey('audio-time'), style: secondary },
                            ),
                            SizedBox({ height: 8 }),
                            Wrap({
                              alignment: WrapAlignment.spaceBetween,
                              spacing: 12,
                              runSpacing: 8,
                              children: [
                                Row({
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    IconButton.filled({
                                      key: ValueKey('audio-toggle'),
                                      tooltip: bind(() =>
                                        this.playing.value ? 'Pause' : 'Play',
                                      ),
                                      iconSize: 28,
                                      icon: bind(() =>
                                        Icon(
                                          this.playing.value
                                            ? Icons.pause_rounded
                                            : Icons.play_arrow_rounded,
                                        ),
                                      ),
                                      onPressed: enabled(() => {
                                        this.playRequested = !this.playRequested;
                                        return this.playRequested
                                          ? this.player.resume()
                                          : this.player.pause();
                                      }),
                                    }),
                                    IconButton({
                                      key: ValueKey('audio-rewind'),
                                      tooltip: 'Restart',
                                      icon: Icon(Icons.replay_rounded),
                                      onPressed: enabled(() =>
                                        this.player.seek(Duration.zero),
                                      ),
                                    }),
                                    IconButton({
                                      key: ValueKey('audio-seek'),
                                      tooltip: 'Seek to 1 second',
                                      icon: Icon(Icons.skip_next_rounded),
                                      onPressed: enabled(() =>
                                        this.player.seek(Duration({ seconds: 1 })),
                                      ),
                                    }),
                                  ],
                                }),
                                Row({
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    IconButton({
                                      key: ValueKey('audio-mute'),
                                      tooltip: bind(() =>
                                        this.volume.value === 0 ? 'Unmute' : 'Mute',
                                      ),
                                      icon: bind(() =>
                                        Icon(
                                          this.volume.value === 0
                                            ? Icons.volume_off_rounded
                                            : Icons.volume_up_rounded,
                                        ),
                                      ),
                                      onPressed: enabled(() =>
                                        this.player.setVolume(
                                          // Upstream updates this request value before its Future completes.
                                          this.player.volume === 0 ? 1 : 0,
                                        ),
                                      ),
                                    }),
                                    IconButton({
                                      key: ValueKey('audio-loop'),
                                      tooltip: 'Loop',
                                      icon: Icon(Icons.repeat_rounded),
                                      isSelected: bind(() => this.looping.value),
                                      onPressed: enabled(() => {
                                        this.loopRequested = !this.loopRequested;
                                        return this.player.setReleaseMode(
                                          this.loopRequested
                                            ? ReleaseMode.loop
                                            : ReleaseMode.stop,
                                        );
                                      }),
                                    }),
                                    TextButton({
                                      key: ValueKey('audio-speed'),
                                      onPressed: enabled(() =>
                                        this.player.setPlaybackRate(
                                          this.player.playbackRate === 1 ? 2 : 1,
                                        ),
                                      ),
                                      child: Text(bind(() => `${this.rate.value}×`)),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      SizedBox({ height: 12 }),
                      Text(
                        bind(
                          () =>
                            this.error.value ||
                            (!this.ready.value
                              ? 'Preparing audio…'
                              : this.playing.value
                                ? 'Playing'
                                : 'Paused'),
                        ),
                        { key: ValueKey('audio-status'), style: secondary },
                      ),
                      SizedBox({ height: 6 }),
                      Text('Drag the timeline to seek · Streaming requires internet', {
                        style: secondary,
                      }),
                    ],
                  }),
                }),
              }),
            }),
        });
      },
    });
  }
}
